import Sidebar from '../components/Sidebar'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '300px', padding: '1rem', height: '300vh' }}>
        <Switch>
          <Route path="/dashboard/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

export default Dashboard
