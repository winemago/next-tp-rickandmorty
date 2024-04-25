import CharacterGrid from "@/components/containers/CharacterGrid";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<h1>loading...</h1>}>
        <CharacterGrid/>
      </Suspense>
    </main>
  );
}
