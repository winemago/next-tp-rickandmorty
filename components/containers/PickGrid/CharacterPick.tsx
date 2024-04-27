import { FetchAllCharacters } from "@/services/apicall";
import CharacterGrid from "./CharacterGrid";
import { Character } from "@/types/characters";
import PaginationControls from "../pagination/PaginationControl";

interface prop {
  searchParams: { page: string }
}

const CharacterPick = async ({ searchParams }: prop) => {

  const allCharacters = await FetchAllCharacters(searchParams.page);

  const Characters1: Character[] = allCharacters?.results?.slice(0, allCharacters.results.length / 2);
  const Characters2: Character[] = allCharacters?.results?.slice(allCharacters.results.length / 2, allCharacters.results.length);

  return (
    <>
      {
        allCharacters instanceof Error ? <h1>{allCharacters.message}</h1>
          :
          <>
            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <h1 className="text-center text-2xl p-4 underline decoration-solid text-character1">Character #1</h1>
                <CharacterGrid characters={Characters1} source={'#1'} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-center text-2xl p-4 underline decoration-solid text-character2">Character #2</h1>
                <CharacterGrid characters={Characters2} source={'#2'} />
              </div>
            </div>
            <div className="py-6 ">
              <PaginationControls hasPrevPage={allCharacters?.info?.prev} hasNextPage={allCharacters?.info?.next} />
            </div>
          </>
      }
    </>

  );
}

export default CharacterPick;