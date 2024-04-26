'use client'

import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Character } from "@/types/characters";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  characters: Character[],
  source: string
}

const CharacterGrid = ({characters, source}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const id1 = searchParams.get('id1')
  const id2 = searchParams.get('id2')

  return (
    <div className="grid grid-cols-2 gap-4">
      {characters && characters.map((character: Character) => (
          <Card 
            key={character.id}
            className={`w-full rounded-lg border cursor-pointer ${character.id === Number(id1) ? ' bg-character1 ': character.id === Number(id2) ? ' bg-character2' : ''}`}
            onClick={() => {              
              if (!id1 || source === '#1') {
                router.push(`/?page=${page}&id1=${character.id}&id2=${id2}`)
              } else {
                router.push(`/?page=${page}&id1=${id1}&id2=${character.id}`)
              }
            }}>
            <CardContent className="flex">
              <Avatar>
                <AvatarImage alt="Character Image" src={character.image} />
              </Avatar>
              <div className=" flex-col">
                <h3 className="font-bold ">{character.name}</h3>
                <div className="flex">
                  <p className={`${character.status === 'Alive' ? 'text-green-500 ' : character.status === 'Dead' ?  ' text-red-400' : '' }`}>{character.status}</p>
                  <p> - {character.species}</p>
                </div>
              </div>
            </CardContent>
          </Card>
      ))}
    </div>
  );
}

export default CharacterGrid;