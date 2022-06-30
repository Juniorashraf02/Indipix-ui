// NextJS & React imports
import type { NextPage } from 'next'
import Image from 'next/image'

// Third Party imports

// Custom Components imports
import { SEO } from '../Components/SEO'

/** Home page */
const Home: NextPage = () => {
  return (
    <div>
      <SEO
        title='Indipix'
        description="Indipix"
      />
    </div>
  )
}

export default Home
