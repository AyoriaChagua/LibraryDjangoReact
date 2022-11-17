import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import * as ReactBootstrap from "react-bootstrap";

const FormLib = ({loan, setLoan}) => {

    const [selectUser, setSelectUser] = useState(0)

    const [selectBook, setSelectBook] = useState(0)

    const handleChangeCheckUser = e => {
        setSelectUser(e.target.value)
    }

    const handleChangeCheckBook = e => {
        setSelectBook(e.target.value)
    }

    const handleChange = (e) => {
        setLoan({
            ...loan,
            book: selectBook,
            user: selectUser,
            [e.target.name]:  e.target.value
        })
    }

    let [book, user, loanDate, returnDate] = loan
    const handleSubmit = () => {
        book = parseInt(book, 10)
        user = parseInt(user, 10)
        
        if(book <=0 || user <=0 || loanDate === '' || returnDate === ''){
            alert("All inputs are required")
            return
        }
        const requestInit =  {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body :JSON.stringify(loan)
        }

        fetch("http://127.0.0.1:8000/loan/", requestInit)
            .then((res) => res.json())
            .then((res) => console.log("Loan added"));

    }

    const [books, setBooks] = useState([]);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        const getBooks = () => {
            fetch('http://127.0.0.1:8000/book/')
              .then(res => res.json())
              .then((res) => setBooks(res));
          }
        
        const getUsers = () => {
            fetch('http://127.0.0.1:8000/user/')
                .then(res => res.json())
                .then((res) => setUsers(res));    
        }

        getUsers();
        getBooks();
    }, []);

    return (
        <ReactBootstrap.Card>
            
        <Form onSubmit={handleSubmit}>
        <ReactBootstrap.Container>
            <ReactBootstrap.Row>
            <ReactBootstrap.Col sm={6}>
            <Form.Label>Books:</Form.Label>
                {books.map((book) => (
                    <div key={book.id} className="mb-3">
                    <Form.Check
                        inline
                        label={book.title}
                        name="book"
                        type="radio"
                        value={book.id}
                        onChange={handleChangeCheckBook}
                    />
                    </div>
                ))}
            </ReactBootstrap.Col>
            <ReactBootstrap.Col sm={6}>

                <Form.Label>Users:</Form.Label>
                {users.map((user) => (
                    <div key={user.id} className="mb-3">
                    <Form.Check
                        inline
                        label={user.name}
                        name="user"
                        type="radio"
                        value={user.id}
                        onChange={handleChangeCheckUser}
                    />
                    </div>
                ))}
            </ReactBootstrap.Col>
            </ReactBootstrap.Row>
            
            <ReactBootstrap.Row>
                <div className="mb-3">
                    <Form.Label>Loan date:</Form.Label>
                    <Form.Control type="date" name="loanDate" onChange={handleChange}/>
                </div>
            </ReactBootstrap.Row>

            <ReactBootstrap.Row>
                <div className="mb-3">
                    <Form.Label>Finish date:</Form.Label>
                    <Form.Control type="date" name="finishDate" onChange={handleChange}/>
                </div>
            </ReactBootstrap.Row>
            <ReactBootstrap.Row>
                <div className="mb-3">
                    <ReactBootstrap.Button className='info' type="submit">Submit</ReactBootstrap.Button>
                </div>
            </ReactBootstrap.Row>
        </ReactBootstrap.Container>
        </Form>
        </ReactBootstrap.Card>
    );
}

export default FormLib;