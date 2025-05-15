import getPKMSpecies from './getPKMSpecies'
import { getPKMGender, getPKMDescription } from './utils'

const BASE_URL = 'https://pokeapi.co/api/v2'

export default async function getPKMDetails(pkmId) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${pkmId}`)
    const details = await response.json()

    const species = await getPKMSpecies(pkmId)
    details.description = getPKMDescription(species)
    details.gender = await getPKMGender(species)

    return details
  } catch (err) {
    console.error('Error fetching Pokémon details:', err)
    return null
  }
}
