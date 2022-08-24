import { isLoggedInVar } from '../Apollo'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <buton onClick={() => isLoggedInVar(false)}>Log out Now!</buton>
    </div>
  )
}

export default Home
