import CharacterPick from "@/components/containers/PickGrid/CharacterPick";
import { Suspense } from "react";
import Loading from "./loading";
import List from "@/components/ui/List";
import EpisodesLists from "@/components/containers/EpisodesList/EpisodeLists";

export default async function Home({searchParams}: any) {

  return (
    <main className="flex flex-col items-center justify-between pt-16 px-64">
      <h1 className=" font-extrabold text-4xl pb-6">Rick and Morty Episode Match</h1>
      <p className="pb-8">Please choose between this options</p>
      <Suspense fallback={<Loading/>}>
        <CharacterPick searchParams={searchParams}/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <EpisodesLists searchParams={searchParams}/>
      </Suspense>
    </main>
  );
}



//signal abort
//try to fetch and find id on list 