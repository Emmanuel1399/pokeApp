let FEMALE_LIST = []
let MALE_LIST = []

async function preloadGenderData() {
  if (FEMALE_LIST.length === 0 || MALE_LIST.length === 0) {
    const base = 'https://pokeapi.co/api/v2'
    const [female, male] = await Promise.all([
      fetch(`${base}/gender/1`).then(res => res.json()),
      fetch(`${base}/gender/2`).then(res => res.json()),
    ])

    FEMALE_LIST = female.pokemon_species_details
    MALE_LIST = male.pokemon_species_details
  }
}

export function getPKMDescription(species, language = 'en', version = 'emerald') {
  const entry = species.flavor_text_entries?.find(
    (item) => item.language.name === language && item.version.name === version
  )
  return entry?.flavor_text?.replace(/\r?\n|\r/g, ' ') || ''
}

export async function getPKMGender(species) {
  await preloadGenderData()

  const name = species.name

  if (FEMALE_LIST.some(p => p.pokemon_species.name === name)) return 'Female'
  if (MALE_LIST.some(p => p.pokemon_species.name === name)) return 'Male'
  return 'Genderless'
}
