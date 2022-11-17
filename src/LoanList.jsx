import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

const LoanList = ({loans}) => {
    return (
        <>

        <ReactBootstrap.Table>
          <thead>
              <tr>
                <th>Examplary</th>
                <th>Book</th>
                <th>Client</th>
                <th>Start</th>
                <th>End</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {loans.map( loan => (
                    <tr key={loan.id}>
                        <td>{loan.book}</td>
                        <td>{loan.book}</td>
                        <td>{loan.user}</td>
                        <td>{loan.loanDate}</td>
                        <td>{loan.returnDate}</td>
                        <td><ReactBootstrap.Row>
                        <ReactBootstrap.Col sm={6}>
                            <ReactBootstrap.Button className='btn-danger'>Delete</ReactBootstrap.Button>
                        </ReactBootstrap.Col>
                        <ReactBootstrap.Col sm={6}>
                            <ReactBootstrap.Button className='btn-warning'>Update</ReactBootstrap.Button>
                        </ReactBootstrap.Col>
                        </ReactBootstrap.Row></td>
                    </tr>
                ))}
            </tbody>
          </ReactBootstrap.Table>
        </>
    )
}

export default LoanList;