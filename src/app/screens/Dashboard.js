import Sidebar from '../components/Sidebar'
import { Route, Switch } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '300px', padding: '1rem' }}>
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
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item active>Home</Breadcrumb.Item>
    </Breadcrumb>
  )
}

function About() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item active>About</Breadcrumb.Item>
    </Breadcrumb>
  )
}

function Users() {
  return <h2>Users</h2>
}

export default Dashboard
