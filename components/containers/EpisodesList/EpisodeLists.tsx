import List from "@/components/containers/EpisodesList/List"
import { extractLastIdFromUrls, findEpisodesByIds, findRepeatedEpisodes } from "@/lib/utils"
import { FetchAllCharacters, FetchMultiEpisode } from "@/services/apicall"


type Prop = {
  searchParams: {
    id1: number | 'null',
    id2: number | 'null',
    page: string
  }
}

const EpisodesLists = async ({ searchParams }: Prop) => {
  const id1 = searchParams?.id1
  const id2 = searchParams?.id2

  const cachedData = await FetchAllCharacters(searchParams.page)
  const characters = cachedData.results

  let episodesC1: Episode[] = []
  let commonEpisodes: Episode[] = []
  let episodesC2: Episode[] = []

  if (((!!id1 && id1!=="null") && (!!id2 && id2!=="null"))) {
    const episodes = findEpisodesByIds(characters, id1, id2)
    
    const episodesIdC1 = extractLastIdFromUrls(episodes[0])
    const episodesIdC2 = extractLastIdFromUrls(episodes[1])
    
    episodesC1 = await FetchMultiEpisode(episodesIdC1)
    episodesC2 = await FetchMultiEpisode(episodesIdC2)
    
    commonEpisodes = findRepeatedEpisodes(episodesC1,episodesC2)
  }

  return (
    <div className="flex gap-4 pt-8 pb-10">
      <List title="Episodes Character #1" description="All episodes that character #1 had appear" episodes={episodesC1}/>
      <List title="Episodes that match" description="Common episodes between #1 and #2" episodes={commonEpisodes}/>
      <List title="Episodes Character #2" description="All episodes that character #2 had appear" episodes={episodesC2}/>
    </div>
  );
}

export default EpisodesLists;
