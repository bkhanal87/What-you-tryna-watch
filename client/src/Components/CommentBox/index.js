import React, {useState} from "react";
import FormGroup from 'react-bootstrap/FormGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CommentBox = (props) => {
  const [isButtonDisabled, setbuttonDisabled] = useState(true);
  const [comment, setComment] = useState("");

  function handleInputChange(event) {
    setComment(event.target.value);
    if (event.target.value && event.target.value.length > 1) {
      setbuttonDisabled(false)
    }
    else {
      setbuttonDisabled(true)
    }
  }

  return (
    <Form>
      <FormGroup className="mb-3" controlId="formBasicEmail">
      <Form.Label>Add a comment</Form.Label>
      <Row>
      <Col md>
      <Form.Control
            type="text"
            id="comment-section"
            value={comment}
            onChange={handleInputChange}
            placeholder="Enter comment here"
            name="comment" 
      />
      </Col>
      <Col md>
      <Button variant="primary" type="submit" disabled={isButtonDisabled}>Post Comment</Button>
      </Col>
      </Row>
    </FormGroup>
    </Form>
  );
};

export default CommentBox;