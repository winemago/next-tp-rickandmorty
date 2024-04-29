import List from '@/components/containers/episodesList/List';
import { render } from '@testing-library/react';

const title = 'some title';
const description = 'some description';
const episodes = [
  {
    "id": 10,
    "name": "Close Rick-counters of the Rick Kind",
    "air_date": "April 7, 2014",
    "episode": "S01E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    "url": "https://rickandmortyapi.com/api/episode/10",
    "created": "2017-11-10T12:56:34.747Z"
  },
  {
    "id": 28,
    "name": "The Ricklantis Mixup",
    "air_date": "September 10, 2017",
    "episode": "S03E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    "url": "https://rickandmortyapi.com/api/episode/28",
    "created": "2017-11-10T12:56:36.618Z"
  }
]

describe('List', () => {
  it("render List", () => {
    const { getByText } = render(<List title={title} description={description} episodes={episodes}/>)
    
    expect(getByText('some title')).toBeTruthy()
    expect(getByText('some description')).toBeTruthy()

    expect(getByText('Close Rick-counters of the Rick Kind')).toBeTruthy()
    expect(getByText("April 7, 2014")).toBeTruthy()
    expect(getByText("S01E10")).toBeTruthy()
  })
});


it('renders correctly with no episodes', () => {

  const episode:any[] = [];

  const { getByText } = render(
    <List title={title} description={description} episodes={episode} />
  );

  expect(getByText('some title')).toBeInTheDocument();
  expect(getByText('some description')).toBeInTheDocument();
  expect(getByText('nothing here...')).toBeInTheDocument();
});