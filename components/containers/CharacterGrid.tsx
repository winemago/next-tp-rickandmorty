import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { FetchAllCharacters } from "@/services/apicall"
import { character } from "@/types/characters";


const CharacterGrid = async () => {
  const Characters = await FetchAllCharacters();

  return (
    <div className="grid grid-cols-2 gap-4">
      {Characters && Characters.results.map((character: character) => (
          <Card key={character.id} className="w-full">
            <CardContent className="flex">
              <Avatar>
                <AvatarImage alt="Character Image" src={character.image} />
              </Avatar>
              <div className=" flex-col">
                <h3 className="font-bold ">{character.name}</h3>
                <p>{character.status} - {character.species}</p>
              </div>
            </CardContent>
          </Card>
      ))}
    </div>
  );
}

export default CharacterGrid;