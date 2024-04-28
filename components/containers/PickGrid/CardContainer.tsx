import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Character } from "@/types/characters";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    character: Character,
    source: string
}


const CardContainer = ({ character, source }: Props) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const page = searchParams?.get('page') ?? 1
    const id1 = searchParams?.get('id1')
    const id2 = searchParams?.get('id2')
    const [C1, setC1] = useState(() => Number(id1) || 0)
    const [C2, setC2] = useState(() => Number(id2) || 0)

    useEffect(() => {
        if (Number(id1) !== C1) {
            setC1(Number(id1))
        }
        if (Number(id2) !== C2) {
            setC2(Number(id2))
        }
    }, [id1, id2])

    const handleClick = () => {
        const newId = character.id;
        if (source === '#1') {
            setC1(prevId1 => newId !== prevId1 ? newId : prevId1);
            router.push(`/?page=${page}&id1=${newId}&id2=${id2}`, { scroll: false });
        } else {
            setC2(prevId2 => newId !== prevId2 ? newId : prevId2);
            router.push(`/?page=${page}&id1=${id1}&id2=${newId}`, { scroll: false });
        }
    }
    console.log(C1,C2);
    
    return (
        <Card
            className={`w-full rounded-lg border cursor-pointer shadow-lg shadow-zinc-400/80 ${character.id === C1 ? ' bg-character1 border border-character1' : character.id === C2 ? ' bg-character2 border border-character2' : ''}`}
            onClick={handleClick}>

            <CardContent className="flex">
                <Avatar>
                    <Image alt="Character Image" src={character.image} width={50} height={50} />
                </Avatar>
                <div className="flex-col">
                    <h3 className="font-bold ">{character.name}</h3>
                    <div className="flex">
                        <p className={`${character.status === 'Alive' ? 'text-green-500 ' : character.status === 'Dead' ? ' text-red-400' : ''}`}>{character.status}</p>
                        <p> -{character.species}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardContainer;