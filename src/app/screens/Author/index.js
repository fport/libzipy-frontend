import { Table } from 'react-bootstrap'

const Author = () => {
  return (
    <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <i className="fas fa-angle-double-down" />
              </th>
              <th>Yazar</th>
              <th>Kitaplarını Gör</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>
                <i className="fas fa-mouse" />
              </td>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Author
