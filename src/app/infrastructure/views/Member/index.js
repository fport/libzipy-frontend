import React from 'react'
import { Table } from 'react-bootstrap'

const Member = () => {
  return (
    <div>
      {' '}
      <div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <i className="fas fa-angle-double-down" />
                </th>
                <th>Üyeler</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Member
