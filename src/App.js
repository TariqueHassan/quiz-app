import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import data from './questions.json';
import { Container } from "react-bootstrap";
import QuestionComponent from './components/QuestionComponent';

function App() {
  return (
    <Container>
      <QuestionComponent list = {data} />
    </Container>
  );
}

export default App;
