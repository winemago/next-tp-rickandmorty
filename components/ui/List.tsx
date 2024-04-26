import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Prop = {
  title: string,
  description: string,
  episodes: Episode[]
}

export default function List({title, description, episodes }: Prop) {
  const arrayEpisodes = Array.isArray(episodes) ? episodes : [episodes];

  return (
    <div className="overflow-auto">
      <Card className="col-span-2">
        <CardHeader className="flex flex-row items-center w-82">
          <div className="grid gap-2 pl-7 pt-7 pr-7">
            <CardTitle className={`${title.includes("1") ? 'text-character1': title.includes("2") ? 'text-character2' : "" }`}>{title}</CardTitle>
            <CardDescription >{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className=" w-full">
                <TableHead>Name</TableHead>
                <TableHead>Episode</TableHead>
                <TableHead className="text-right">Air Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {arrayEpisodes ? arrayEpisodes.map((episode) => (
                <TableRow key={episode.id}>
                  <TableCell>
                    <div className="font-medium">{episode.name}</div>
                  </TableCell>
                  <TableCell className="text-right">{episode.episode}</TableCell>
                  <TableCell className="text-right">{episode.air_date}</TableCell>
                </TableRow>
              )):
              <p>nothing here</p>
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
