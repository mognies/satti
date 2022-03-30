import type { NextPage } from 'next'
import Button from '../components/inputs/Button'

const Home: NextPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Hello</Button>
      <label htmlFor="my-modal" className="btn modal-button">open modal</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
          <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </main>
  )
}

export default Home
