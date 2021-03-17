import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
} 

export function TransactionsTable () {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en', {
                  style: 'currency',
                  currency: 'EUR'
                }).format(transaction.amount)}
              </td>
              <td>Developtim</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt)
              )}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}
