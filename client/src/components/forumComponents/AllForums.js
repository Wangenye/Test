import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import { ListGroup,Alert,Button,CardGroup,Card,Row,Col,Container} from 'react-bootstrap';
import {listForums,createForum} from '../../actions/forumActions'
import {FORUM_CREATE_RESET,} from '../../constants/forumConstants'


function AllForums({history}) {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const forumsList = useSelector((state) => state.forumsList);
    const { loading, error, forums } = forumsList;

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const forumCreate = useSelector((state) => state.forumCreate)
  const {
    loading:loadingCreate,
    error:errorCreate,
    success:successCreate,
    forum:createdForum
  }=forumCreate



    useEffect(()=>{
      dispatch({type: FORUM_CREATE_RESET})
        if(successCreate){
          navigate(`/forum/create/${createdForum._id}`)
          // alert('Success')
        }else{
          dispatch(listForums())
        }

    },[dispatch,navigate,successCreate,createdForum,userInfo])

    

    const createForumHandler=()=>{
        dispatch(createForum())
    }

    return (
        <div>

{loadingCreate && <h1>loading</h1> }
      {errorCreate && <Alert variant='danger'>{errorCreate}</Alert>}
          {!userInfo ?(<h5>please <a href="/login">Login</a> to create a forum !</h5>):(
           <>
            <Button variant="primary" onClick={createForumHandler}>
            Create Forum
          </Button>
          <br />
          <br />
          </>
          
          )}
         


            
            {loading ?(
               <Alert  variant="info">
               Loading ...
             </Alert>
            ):error?(<Alert  variant="info">
            {error}
          </Alert>):(
                 <Row xs={1} md={3} className="g-4">
                {forums.map((forum)=>(
                  
                 <Col>
                      <Card style={{ width: '18rem' }} key={forum._id}>
                   <Card.Img variant="top" height="200px" width="200px" src={forum.image}  />
                   <Card.Body>
                     <Card.Title>{forum.title}</Card.Title>
                     <Card.Text>
                       {forum.description}
                     </Card.Text>
                     <LinkContainer key={forum._id} to={`/forum/${forum._id}`}> 
                    <Button variant="primary">View Forum</Button>
                    </LinkContainer>
                   </Card.Body>
                 </Card>
                 </Col>
                 
                     
                  
                 
                ))}
               </Row>
                
            )}
                   
            
           

        </div>
    )
}

export default AllForums
