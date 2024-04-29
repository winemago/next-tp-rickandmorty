'use client'

import { Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Character } from "@/types/characters";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { SetStateAction, useState } from "react";

type Props = {
  characters: Character[],
  source: string
}

const CharacterGrid = ({characters, source}: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams?.get('page') ?? 1
  const id1 = searchParams?.get('id1')
  const id2 = searchParams?.get('id2')
  const [C1, setC1] = useState(Number(id1))
  const [C2, setC2] = useState(Number(id2))

  const handleClick = (id:SetStateAction<number>) => {
    const newId = id;
    if (source === '#1') {
        setC1(newId)
        router.push(`/?page=${page}&id1=${newId}&id2=${id2}`, { scroll: false })
    } else {
        setC2(newId)
        router.push(`/?page=${page}&id1=${id1}&id2=${newId}`, { scroll: false })
    }
}

  return (
    <div className="grid grid-cols-2 gap-4">
      {characters && characters.map((character: Character) => (
          <Card 
            key={character.id}
            className={`w-full rounded-lg border cursor-pointer shadow-lg shadow-zinc-400/80 ${character.id === C1 ? ' bg-character1 border border-character1': character.id === C2 ? ' bg-character2 border border-character2' : ''}`}
            onClick={()=>handleClick(character.id)}
            >
            <CardContent className="flex">
              <Avatar>
                <Image alt="Character Image" src={character.image} width={50} height={50}/>
              </Avatar>
              <div className=" flex-col">
                <h3 className="font-bold ">{character.name}</h3>
                <div className="flex gap-1">
                  <p className={`${character.status === 'Alive' ? 'text-green-500 ' : character.status === 'Dead' ?  ' text-red-400' : '' }`}>{character.status }</p>
                  <p>-</p>
                  <p>{character.species}</p>
                </div>
              </div>
            </CardContent>
          </Card>
      ))}
    </div>
  );
}

export default CharacterGrid;