import CharacterPick from "@/components/containers/PickGrid/CharacterPick";
import { FetchAllCharacters } from "@/services/apicall";
import { searchParams } from "@/types/params";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home({searchParams}: searchParams) {
  // const res = await fetch(process.env.RAM_URL + `asdcharacter/${searchParams.id2}`)
  // const data = await res.json()
  // const allCharacters = await FetchAllCharacters(,searchParams?.id2);


  return (
    <main className="flex flex-col items-center justify-between pt-16">
      <Suspense fallback={<Loading/>}>
        <CharacterPick searchParams={searchParams}/>
      </Suspense>
      {/* <h1>{allCharacters.name}</h1> */}
    </main>
  );
}