import React, { useState } from "react";
import useEffect from "react";
import { ListGroup, Card, Form, Button, Table } from "react-bootstrap";
import Icon from "./IconComponent";
let total=0;
const countTotal=(list) => {
    list.map((item)=>(
        total=total+parseInt(item.score)
        
    ))
 return total;
}
const Result = ({ Mylist }) => {
   
      
        return (
            <div>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Header className="text-center">Quize</Card.Header>

                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <div className="text-center">
                                  Total Score:  {countTotal(Mylist)/2}/{Mylist.length}
                                </div>

                            </ListGroup.Item>
                            {

                                Mylist.map((item) => (
                                    <ListGroup.Item>
                                        <div>
                                            {item.id}. {item.question}
                                        </div>
                                        <div>
                                            <b>correct answer:</b> {item.answer}
                                        </div>
                                        <div>
                                            <b>Score:</b> {item.score} <Icon value={item.score} />
                                        </div>

                                    </ListGroup.Item>           
                                ))
                            }

                        </ListGroup>

                    </Card.Body>
                </Card>
            </div>
        )
    
   
}
export default Result;