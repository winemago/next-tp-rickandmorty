import CharacterPick from "@/components/containers/PickGrid/CharacterPick";
import { Suspense } from "react";
import Loading from "./loading";
import EpisodesLists from "@/components/containers/EpisodesList/EpisodeLists";
import { DarkToggle } from "@/components/containers/darktoggle/DarkToggle";

export default function Home({ searchParams }: any) {

  return (
    <main className="flex flex-col items-center justify-between pt-16 xl:px-58 ">
      <div className=" absolute top-10 right-12">
        <DarkToggle />
      </div>
      <h1 className=" font-extrabold text-5xl pb-6 bg-gradient-to-r from-character1 to-character2  bg-clip-text text-transparent">Rick and Morty Episode Match</h1>
      <p className="pb-8">Please choose between this options</p>
      <Suspense fallback={<Loading />}>
        <CharacterPick searchParams={searchParams} />
      </Suspense>
      <Suspense key={Math.random()} fallback={<Loading />}>
        <EpisodesLists searchParams={searchParams} />
      </Suspense>
    </main>
  );
}