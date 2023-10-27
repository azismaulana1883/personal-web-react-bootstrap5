import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { artikelDetail } from '../services/ArticelServices'

function ArtikelDetail() {
  const {ArtikelId} = useParams()
  const [artikel, setArtikel] = useState([])

   const fetchArtikelList = async (id) => {
        const resArtikelList = await artikelDetail(id)
        setArtikel(resArtikelList)
    }

    useEffect(() => {
        fetchArtikelList(ArtikelId)
    }, [ArtikelId])

  return (
    <>
    <section className="artikel section" id="artikel">
        <img className="profile-banner" src={artikel.image || "../img/php.png"} alt={artikel.title || "Default Title"} />
        <h1 className="title-profile">{artikel.title || "Default Title"}</h1>
        <p className="description">{artikel.deskripsi || "Default Description"}</p>
        <p className="cerita">{artikel.cerita || "Default Cerita"}</p>
      </section>
    </>
  )
}

export default ArtikelDetail