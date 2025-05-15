import Head from 'next/head';
import Layout from '../components/layoutComponent/layout.component';
import Card from '../components/cardComponent/card.component'
import Navbar from '../components/navbarComponent/Navbar.component';
import getPKMListFromAPI from '../lib/getPKMListFromAPI'
import { useState } from 'react';
import Modal from '../components/modalComponent/modal.component';



export async function getServerSideProps() {
  const pokemonList = await getPKMListFromAPI()

  return {
    props: {
      pokemonList,
    },
  }
}


export default function Home({ pokemonList }) {
  const [selectedPkm, setSelectedPkm] = useState(null)
  const [filteredList, setFilteredList] = useState(pokemonList)

  const handleFilter = (query) => {
    if (query.trim() === '') {
      setFilteredList(pokemonList)
      return
    }

    const filtered = pokemonList.filter((pkm) =>
      pkm.name.toLowerCase().includes(query)
    )
    setFilteredList(filtered)
  }

  const handleReset = async () => {
    const refreshed = await getPKMListFromAPI()
    setFilteredList(refreshed)
  }
  return (
    <div>
      <Head>
        <title>Pokemon Cards</title>
        <link rel="icon" href="/pokeball.png" />
      </Head>
      <Navbar onFilter={handleFilter} onReset={handleReset} />
      {selectedPkm && <Modal pkmCardDetail={selectedPkm} onClose={() => setSelectedPkm(null)}></Modal>}
      <Layout>
        {filteredList.map((pkm, index) =>
          pkm ? (
            <div key={index} onClick={() => setSelectedPkm(pkm)}>
              <Card pkmCardDetail={pkm} />
            </div>
          ) : null
        )}
      </Layout>

    </div>
  );
}
