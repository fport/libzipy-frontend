import Sidebar from '../components/Sidebar'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import { Author, Books, Category, Library, Member } from './index'

const Dashboard = () => {
  const url = useLocation()
  const tab = url.pathname.split('/')[2]
  const activeTabs = tab.charAt(0).toUpperCase() + tab.slice(1)

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '300px', padding: '1rem' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>{activeTabs}</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route path="/dashboard/category">
            <Category />
          </Route>
          <Route path="/dashboard/category">
            <Category />
          </Route>
          <Route path="/dashboard/library">
            <Library />
          </Route>
          <Route path="/dashboard/books">
            <Books />
          </Route>
          <Route path="/dashboard/member">
            <Member />
          </Route>
          <Route path="/dashboard/author">
            <Author />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard
