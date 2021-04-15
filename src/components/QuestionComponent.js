import React, { useState } from "react";
import { ListGroup, Card, Form, Button } from "react-bootstrap";
import Result from "./ResultComponent";
let val = 0;
const QuestionComponent = ({ list }) => {
    const [question, setQuestion] = useState(list[0].question);
    const [questionId, setquestionId] = useState(list[0].id);
    const [options, setOptions] = useState(list[0].options[0]);
   
    const [resOrQuiz, setresOrQuiz] = useState(0);
    let Mylist = list;



    const [buttonState, setbuttonState] = useState("Next")
    const onQuestionChange = (e) => {


        if (buttonState == "Finish") {
            setresOrQuiz(1);
        }
        if (val < list.length - 1) {
            val = val + 1;
            console.log(val);
            setquestionId(list[val].id);
            setQuestion(list[val].question);
            setOptions(list[val].options[0]);

        }
        if (val == list.length - 1) {
            setbuttonState("Finish")
        }


    }
    const decrement = (e) => {

        if (val > 0) {
            val = val - 1;
            console.log(val)
            setbuttonState("Next");
            setquestionId(list[val].id);
            setQuestion(list[val].question);
            setOptions(list[val].options[0]);

        }





    }
    const quizResult = (e) => {
        if (Mylist[val].answer == e) {
            Mylist[val].score = "1";
        }
        else{
            Mylist[val].score = "0";
        }
    }
    if (resOrQuiz == 0) {
        return (
            <div className="">
                <Card style={{ width: '30rem' }}>
                    <Card.Body>
                        <Card.Header className="text-center mb-4 ">Quiz App</Card.Header>
                        <Card.Subtitle>{questionId}. {question}</Card.Subtitle>
                        <ListGroup variant="flush">
                            {
                                Object.entries(options).map((item) => (
                                    <ListGroup.Item>
                                        <div className="block-example border border-light">
                                            <Form.Check.Input type="radio" name={"quiz" + val} onChange={() => quizResult(item[1])} />
                                            <Form.Check.Label>{item[1]}</Form.Check.Label>
                                        </div>
                                    </ListGroup.Item>
                                ))
                            }

                        </ListGroup>
                        <div>
                        <Button className="btn-lg m-3" variant="success" onClick={decrement}>Previous</Button>
                        <Button className="btn-lg" variant="success" onClick={onQuestionChange}>{buttonState}</Button>
                                
                        </div>
                    </Card.Body>
                    <Card.Footer>Total Questions: {questionId}/{list.length}</Card.Footer>
                </Card>



            </div>

        )
    }
    else if (resOrQuiz == 1) {
        return (
            <div>
                <Result Mylist={list} />
            </div >
        )
    }
    return (<div></div>)
}
export default QuestionComponent;