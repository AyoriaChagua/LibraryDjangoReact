import { useState, useEffect } from "react";
import NavbarLib from "./Navbar";
import LoanList from "./LoanList";
import * as ReactBootstrap from "react-bootstrap";
import FormLib from "./Form";

function App() {
  const [loans, setLoans] = useState([]);
  const [loan, setLoan] = useState({
    loanDate: "",
    returnDate: "",
    book: 0,
    user: 0
  });
  useEffect(() => {
    const getLoans = () => {
      fetch("http://127.0.0.1:8000/loan/")
        .then((res) => res.json())
        .then((res) => setLoans(res));
    };
    getLoans();
  }, []);

  return (
    <>
      <NavbarLib title="Ayoria Library" />
      <br />
      <ReactBootstrap.Container>
        <ReactBootstrap.Row>
          <ReactBootstrap.Col sm={8}>
            <LoanList loans = {loans}/>
          </ReactBootstrap.Col>
          <ReactBootstrap.Col sm={4}>
            <h3>loan form</h3>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </ReactBootstrap.Container>
    </>
  );
}

export default App;
