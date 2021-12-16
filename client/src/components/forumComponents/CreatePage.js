import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Row,Col, Button, Form,Container } from "react-bootstrap";
import {listDetailsForum,updateForum} from '../../actions/forumActions'
import {FORUM_UPDATE_RESET} from '../../constants/forumConstants'


function CreatePage({match,history}) {
  const {id} = useParams()
  const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('')

    const dispatch = useDispatch()

    const forumDetails = useSelector((state) => state.forumDetails)
    const { loading, error, forum } = forumDetails

    const forumUpdate = useSelector((state) => state.forumUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = forumUpdate

  useEffect(() => {
    if(successUpdate) {
      dispatch({type:FORUM_UPDATE_RESET})
      navigate('/')
    }else {
      if (forum._id !=={id}) {
        dispatch(listDetailsForum({id}))
      } else {
        setTitle(forum.title)
        setImage(forum.image)
        setCategory(forum.category)
        setDescription(forum.description)
      }
    }
  },[dispatch, navigate, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateForum({
        _id: {id},
        title,
        image,
        category,
        description,
      })
    )
  }
    return (
        <div>
          <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>

<Form p="10" onSubmit={submitHandler}>
<Form.Group controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
          <br />
          <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
          <br />
          <br />
          <Form.Group controlId='image'>
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>
          <br />
          <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
          <Button variant="primary" type="submit">
            Create{" "}
          </Button>{" "}
        </Form>{" "}
        </Col>
        </Row>
        </Container>
            
        </div>
    )
}

export default CreatePage
