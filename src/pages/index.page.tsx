import type { NextPage } from 'next'
import Button from '../components/inputs/Button'

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Hello</Button>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
    </main>
  )
}

export default Home
