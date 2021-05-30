import React, { useEffect } from 'react'
import Sidebar from '../../../infrastructure/components/Sidebar'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import { Author, Books, Category, Library, Member, MemeberBorrow } from '../index'
import { useSelector } from 'react-redux'
/* eslint-disable */
const Dashboard = ({ history }) => {
  const url = useLocation()
  const tab = url.pathname.split('/')[2] ? url.pathname.split('/')[2] : null
  const activeTab = tab ? tab.charAt(0).toUpperCase() + tab.slice(1) : null

  const userInfo = useSelector((data) => data.domain.info.userInfo)

  useEffect(() => {
    if (!userInfo || !userInfo.user_name) {
      history.push('/login')
    }
  }, [userInfo])

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar history={history} />
      <div style={{ marginLeft: '324px', width: '100%', padding: '1rem', marginBottom: '0' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>{activeTab}</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route path="/dashboard/member-borrow">
            <MemeberBorrow history={history} />
          </Route>
          <Route path="/dashboard/category">
            <Category history={history} />
          </Route>
          <Route path="/dashboard/library">
            <Library history={history} />
          </Route>
          <Route path="/dashboard/books">
            <Books history={history} />
          </Route>
          <Route path="/dashboard/member">
            <Member history={history} />
          </Route>
          <Route path="/dashboard/author">
            <Author history={history} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard
