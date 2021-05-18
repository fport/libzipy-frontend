import React from 'react'
import { Table } from 'react-bootstrap'

const Books = () => {
  return (
    <div className="books-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <i className="fas fa-angle-double-down" />
            </th>
            <th>Kitap Adı</th>
            <th>Kitabın Yazarı</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>
              <i className="fas fa-mouse" />
            </td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Books
