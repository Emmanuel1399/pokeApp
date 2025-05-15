import getPKMDetails from './getPKMDetails'

const BASE_URL = 'https://pokeapi.co/api/v2'
const SIZE_LIST_PKM = 40

export default async function getPKMListFromAPI() {
  const OFFSET = Math.floor(Math.random() * 300)
  const GET_PKM_LIST_ENDPOINT = `${BASE_URL}/pokemon?limit=${SIZE_LIST_PKM}&offset=${OFFSET}`

  try {
    const response = await fetch(GET_PKM_LIST_ENDPOINT)
    const data = await response.json()

    const pkmIds = data.results.map((item) =>
      item.url.replace(`${BASE_URL}/pokemon/`, "").replace("/", "")
    )

    return await Promise.all(pkmIds.map((id) => getPKMDetails(id)))
  } catch (err) {
    console.error('PokeAPI is Down', err)
    return []
  }
}