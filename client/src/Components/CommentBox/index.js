import React, {useState, useEffect} from "react";
import { useMutation } from '@apollo/client';
import FormGroup from 'react-bootstrap/FormGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { FaUserCircle } from 'react-icons/fa'
import  AuthService from '../../utils/auth' 
import { IconContext } from "react-icons"
import {ADD_COMMENT} from '../../utils/mutations'

const CommentBox = (props) => {
  console.log(props.movieTitle)

  // define state values
  const [isButtonDisabled, setbuttonDisabled] = useState(true);
  const [user, setUser] = useState({});
  const [comment, setComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(false)

  //run once when component just loaded. Retrieves current user info
  useEffect(() => {
    if (AuthService.loggedIn()) {
      let user = AuthService.getProfile().data ?? {}
      setUser(user)
    }
  }, [])

  //Apollo Client hooks
  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT);

  function handleInputChange(event) {
    setComment(event.target.value);
    if (event.target.value && event.target.value.length > 1) {
      setbuttonDisabled(false)
    }
    else {
      setbuttonDisabled(true)
    }
  }

  async function handleSubmit(event) {
    console.log(event.target);
    event.preventDefault();
    console.log(addComment)
    const { data } = await addComment({variables: { comment: {
      commentBody: comment, 
      movieId: props.movieId, 
      userId: user.id
    }}});
    if (data) setCommentAdded(true)
  }
  if (!props.movieId) {
    return <div></div>
  }
  if (!user.email) {
    return (
      <Alert variant="secondary">
        Please login to comment
      </Alert>
    )
  }
  if (commentAdded) {
    return (
      <Alert variant="success">
        Thank you for your comment!
      </Alert>
    )
  }
  return (
    <IconContext.Provider value={{ size: '2em'}}>
    <Card body>
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3" controlId="formBasicEmail">
      <Row className="mb-3">
        <Col>
          <FaUserCircle className="mr-3"/>&nbsp;&nbsp;<Badge bg="secondary">{user.email}</Badge>
        </Col>
      </Row>
      <Row className="mb-3">
      <Col md>
      <Form.Control
            type="text"
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
    </Card>
    </IconContext.Provider>
  );
};

export default CommentBox;