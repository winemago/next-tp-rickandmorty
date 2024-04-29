import CharacterGrid from '@/components/containers/PickGrid/CharacterGrid';
import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';

const characters = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      }
];

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
      push: jest.fn(),
    })),
    useSearchParams: jest.fn(() => new URLSearchParams('?page=1&id1=null&id2=null')),
  }));

describe('CharacterGrid component', () => {
    it('renders correctly with characters', () => {

      const { getAllByText } = render(<CharacterGrid characters={characters} source="#1" />)
      
      expect(getAllByText('Rick Sanchez')).toHaveLength(1);
      expect(getAllByText('Alive')).toHaveLength(1);
      expect(getAllByText('Human')).toHaveLength(1);

    });
})

