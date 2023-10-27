import React, { useEffect, useState } from 'react'
import { artikelList } from '../services/ArticelServices'
import { Link } from 'react-router-dom'

function ArtikelComponent() {
    const [artikel, setArtikel] = useState([])

    const fetchArtikelList = async () => {
        const resArtikelList = await artikelList()
        setArtikel(resArtikelList)
    }

    useEffect(() => {
        fetchArtikelList()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <section className="blog section" id="blog">
                        <h1>Blog</h1>
                        <p className="blog-deskripsi">Berikut adalah beberapa artikel yang saya tulis di blog saya:</p>
                        <div className="blog-posts">
                            {artikel.map((post) => (
                                <div className="blog-post" key={post.id}>
                                    <Link to={`/artikel/${post.id}`}>
                                    <img src={post.image} alt={post.title} />
                                    <h3>{post.title}</h3>
                                </Link>
                                    <p>{post.deskripsi}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ArtikelComponent
