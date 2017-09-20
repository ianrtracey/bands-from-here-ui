import React from 'react'

export default ({ data }) => {
    const pageData = data.citiesJson.value
    const spotifyUrl = `http://open.spotify.com/user/bandsfromhere/playlist/${pageData.spotifyPlaylistUri}`
    return (
        <div>
        <div className="f4 fw4 pa2">
            <div className="dtc v-top fl w-50">
                <img className="br4 h9 w9 dib" src="http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png" alt="A bright blue sky" />
                <p className="f5 w9 w-90">San Francisco proper was headquarters for the hippie counterculture of the 1960s and the music scene that became associated with it. One of the area's most notable acts was The Grateful Dead, formed in 1965, who played regularly at the legendary venue The Fillmore Auditorium. Other local artists in that movement included Jefferson Airplane and Janis Joplin; all three would be closely associated with the 1967 Summer of Love. Jimi Hendrix, although born in Seattle and later a resident of London, England, had strong connections to the movement and the metropolitan Bay area, as he lived in Berkeley for a brief time as a child and played many local venues in that decade. Creedence Clearwater Revival (of El Cerrito) would gain traction as an associated band of the anti-Vietnam war movement. Rock and Roll Hall of Fame legend Neil Young has lived in the Bay Area in La Honda, CA for more than 40 years. Carlos Santana from San Francisco became famous in the late 1960s and early 1970s with his Santana band which pioneered a blend of rock, salsa, and jazz fusion. Journey formed in 1973 in San Francisco, by former members of Santana. The Doobie Brothers, from San Jose, had a successful career with several albums earning RIAA gold certification. The early 1970s sounds of the Tower of Power from Oakland, Sly and the Family Stone and Pablo Cruise all came from the Bay Area.</p>
            </div>
            <div className="dtc v-top fl pl4">
                <h2 className="lh-copy mv0 f3 f3-ns mv2-ns">
                    Bands from {pageData.city}, {pageData.state} 
                </h2>
                <p className="f5 fw4 gray mt0">Last updated Sep 15th, 2018</p>
                <a className="f6 grow no-underline br-pill ph3 pv2 mb3 dib white bg-black"
                    style={{ "background-color": "#1DB954" }}
                    target="_"
                    href={spotifyUrl}
                    >
                    Open in Spotify</a>
                <h3>156 Artists</h3>
                <main className="mw6 center">
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/2.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <a href="#" className="f6 f5-ns fw6 lh-title db blue link dim mv0">Young Gatchell </a>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr f6">
                                14,343 followers
        </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/3.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Arnoldo Degraff</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@99xx88randomhandle</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/4.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Deirdre Lachance</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@favfavfav</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/5.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Frederic Starner</h1>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/6.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Cleveland Ridout</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@purethinking</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/7.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Leticia Fearon</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@retrofeels</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/10.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Ahmad Backer</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@ahmadBB</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                        <div className="dtc w2 w3-ns v-mid">
                            <img src="http://mrmrs.github.io/photos/p/11.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                        </div>
                        <div className="dtc v-mid pl3">
                            <h1 className="f6 f5-ns fw6 lh-title black mv0">Carlie Noakes</h1>
                            <h2 className="f6 fw4 mt0 mb0 black-60">@carnoakes99</h2>
                        </div>
                        <div className="dtc v-mid">
                            <form className="w-100 tr">
                                <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                            </form>
                        </div>
                    </article>
                </main>
            </div>  <div className="f4 fw4 pa2">
            </div>
        </div>
            </div>
    )
}

export const query = graphql`
    query CityPageQuery($slug: String!) {
        citiesJson(value: { slug: { eq: $slug } }) {
            value {
                city
                state
                spotifyPlaylistUri
            }
        }
    }
`