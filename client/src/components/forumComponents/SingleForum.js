import React ,{useState, useEffect }from 'react'
import { useParams } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { useDispatch, useSelector } from "react-redux";
import {Card,Container,Image,Row,Col,Form,Button,InputGroup,FormControl,Alert} from "react-bootstrap";
import {listDetailsForum,createForumComment} from '../../actions/forumActions'
import { FORUM_CREATE_REVIEW_RESET } from '../../constants/forumConstants'
import '../../App.css';


function SingleForum({match}) {
    // const [forum,setForum]=useState('')
    const {id} = useParams();
    const [comment, setComment] = useState('')
    // useEffect((id) => {
    //     axios.get(`api/forums/get/${id}`).then((response) => {
    //         setForum(response.data)
    //     })
    // })
    // console.log(forum)
    


    const dispatch = useDispatch()

    const forumDetails = useSelector((state) => state.forumDetails)
    const { loading, error, forum } = forumDetails


  
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const forumReviewCreate = useSelector((state) => state.forumReviewCreate)
  const {  loading:loadingReview, success:successReview, error:errorReview } = forumReviewCreate

    useEffect(() => {
      if(successReview){
        alert('Comment Submitted !!')
      setComment('')
      dispatch({type:FORUM_CREATE_REVIEW_RESET})
      }
          dispatch(listDetailsForum({id}))
        //   dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        
      }, [dispatch,successReview])

      const shareURL = `http:localhost:3001/forum/${id}`
      console.log(shareURL)

      const submitHandler = (e) => {
        // e.preventDefault()
        dispatch(createForumComment({id},{
          comment
        }))}

    return (
        <div id="ab">
            Forum Details
            
            <Container align="center">
                    <Row>
                        <Col  md={4} fluid>
            <Card  >
            <Card.Title  >Title::{forum.title}</Card.Title>
            <Card.Subtitle className="mb-1 text-muted " align="right">Created On :{forum.createdAt}</Card.Subtitle>
            <Card.Subtitle className="mb-1 text-muted " align="right">Created By :{forum.user}</Card.Subtitle>
  <Card.Body align="left">{forum.description}</Card.Body>
  {/* <Card.Img variant="top" className="Imagia" src={forum.image} fluid/> */}
  <Col md={4}>
              <Image style={{backgroundPosition:'center', backgroundSize:'cover',backgroundRepeat:"no-repeat" }} src={forum.image} alt={forum.name} width="350" height="250"/>
            </Col>
  </Card>
  </Col>
  <Col  md={6}>
  <CopyToClipboard text={shareURL}>
    <Button>
      Copy and Share link of the forum.
    </Button>
    </CopyToClipboard>
  <div>
    <br />
    {!userInfo ?(<Alert variant="info">Please <a href="/login">Login</a> to post a comment</Alert>):(
       <Form >
       <Form.Group controlId='comment'>
         <Form.Label>Comment</Form.Label>
         <Form.Control
           as='textarea'
           row='3'
           value={comment}
           onChange={(e) => setComment(e.target.value)}
         ></Form.Control>
       </Form.Group>
       <br />
       


<Button m={4} variant="primary"  onClick={submitHandler}>
Submit
</Button>
<br/>
</Form>
    )}
 
<br/>
  {/* {forum.reviews.sort((a,b) => a.timeM - b.timeM)} */}
    {forum.reviews.map((review)=>(
      <Card key={review.id}>
 <Card.Title align="right" >{review.name}</Card.Title>
 <Card.Subtitle className="mb-1 text-muted " align="right">Posted on :{review.createdAt.substring(0,10)}</Card.Subtitle>
 <Card.Body align="right">{review.comment}</Card.Body>
</Card>
    )) }
 
  </div>
  </Col>


</Row>
</Container>

        </div>
    )
}

export default SingleForum

