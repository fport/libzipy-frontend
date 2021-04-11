import { Table } from 'react-bootstrap'

const MemberBorrow = () => {
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
                <th>Alınan Kitap</th>
                <th>Teslim Alınan gün</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
                <td>26.04.2021</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
                <td>26.04.2021</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
                <td>26.04.2021</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
                <td>26.04.2021</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Mark</td>
                <td>26.04.2021</td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-mouse" />
                </td>
                <td>Jacob</td>
                <td>26.04.2021</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default MemberBorrow
