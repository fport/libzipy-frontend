import React from 'react'
import Sidebar from '../../../infrastructure/components/Sidebar'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import { Author, Books, Category, Library, Member, MemeberBorrow } from '../index'

const Dashboard = () => {
  const url = useLocation()
  const tab = url.pathname.split('/')[2] ? url.pathname.split('/')[2] : null
  const activeTab = tab ? tab.charAt(0).toUpperCase() + tab.slice(1) : null

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '300px', width: '100%', padding: '1rem', marginBottom: '0' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>{activeTab}</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route path="/dashboard/member-borrow">
            <MemeberBorrow />
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
