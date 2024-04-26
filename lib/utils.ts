import { Character } from "@/types/characters";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const findEpisodesByIds = (characters: Character[], id1: number, id2: number): string[][] => {
  const foundCharacters = characters?.filter(character => character.id === Number(id1) || character.id === Number(id2));
  const episodes = foundCharacters.map(character => character.episode);

  return episodes;
};

export const extractLastIdFromUrls = (urls: string[]): number[] => {
  const numbers: number[] = [];
  for (const url of urls) {
    const numberStr = url.split('/').pop();
    if (numberStr) {
      const number = parseInt(numberStr, 10);
      if (!isNaN(number)) {
        numbers.push(number);
      }
    }
  }
  return numbers;
};

export const findRepeatedEpisodes = (episodes1: Episode | Episode[], episodes2: Episode | Episode[]): Episode[] => {
  const repeatedEpisodes: Episode[] = [];

  const arrayEpisodes1 = Array.isArray(episodes1) ? episodes1 : [episodes1];
  const arrayEpisodes2 = Array.isArray(episodes2) ? episodes2 : [episodes2];

  arrayEpisodes1.forEach(episode1 => {
    const existsInEpisodes2 = arrayEpisodes2.some(episode2 => episode2.id === episode1.id);
    if (existsInEpisodes2) {
      repeatedEpisodes.push(episode1);
    }
  });

  return repeatedEpisodes;
};