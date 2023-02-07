import { useQuery } from '@tanstack/react-query';

async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  const json = await result.json();
  return json;
}

export function useStarships() {
  const { data, isError, isLoading } = useQuery(['starships'], fetchData);

  return {
    data,
    isError,
    isLoading,
  };
}