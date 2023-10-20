import Footer from '../Homepage/Headers/Footer'
import Content from '../Content/Content'
import Contact from '../Content/Contact'

function Home ()
{
    return (
        <>
            <section id='content'>
                <Content/>
            </section>
            <section id='contact'>
                <Contact/>
            </section>
            <section id='footer'>
                <Footer/>
            </section>
        </>
    )
}

export default Home