const BASE_URL = 'https://pokeapi.co/api/v2'

export default async function getPKMSpecies(pkmId) {
  try {
    const res = await fetch(`${BASE_URL}/pokemon-species/${pkmId}`)
    return await res.json()
  } catch (err) {
    console.error('Error fetching species:', err)
    return null
  }
}
