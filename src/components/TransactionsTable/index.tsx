import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable () {
  useEffect(() => {
    api.get('transactions')
      .then(data => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Lorem, ipsum dolor</td>
            <td>12,000</td>
            <td>Developtim</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor</td>
            <td className="peposit">12,000</td>
            <td>Developtim</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor</td>
            <td className="withdraw">-12,000</td>
            <td>Housing</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
