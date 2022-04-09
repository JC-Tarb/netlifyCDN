import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }
  return (
    
    <div className="container">
<div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
      <Head>
        <title>JCT IT Consultant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Continuous improvement React App from my github repository. 
        Changes being pushed every day!" />

<p className="description">
This is a description class        </p>

        <p className="description">
         This is a React Class that is named description."Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"  <code>netlify</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
