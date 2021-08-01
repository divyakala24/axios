import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
class PostApp extends Component {
    constructor(){
        super();
        this.state={
            posts:[],
            id: "",
            userId:"",
            title:"",
            body:"",
        }
    }
componentDidMount = () =>{
this.getPosts();
}
  getPosts = async () => {
      //API call to the server and get Data
      try {
          const { data }=  await axios.get(API_URL);
          
          this.setState({ posts : data })
  } catch (error){
      console.log(error)
  }
};

updatePost = async () =>{
    //API call to the server and update Data
    try{
        const { id, userId, title, body, posts} = this.state;
        const { data } =  await axios.put(`${API_URL}/${id}`,{
   userId,
   title,
   body, 
        });
       
        const index= posts.findIndex( (post) => post.id === id);

        posts[index]= data;
        this.setState({ posts, userId: "", title:"", body:"" });
    }catch(error){
        console.log(error)
    }
}

deletePost= async (postId) =>{
    //API call to server to delete the Data
 
     try {
    const { data }=  await axios.delete(`${API_URL}/${postId}`);
    let posts = [...this.state.posts];
    posts = posts.filter(({id})=> id !==postId);
    this.setState({ posts });
     } catch(error){
         console.error(error);
     }

};

createPosts = async () => {
    //API call to the server and create Data
    try {
        const { userId, title, body } = this.state;
        const { data }=  await axios.post(API_URL, {
            userId,
            title,
            body,
        });
        let posts = [...this.state.posts];
        posts.push(data);
        this.setState({ posts, userId: "", title:"", body:"" });

   } catch (error){
    console.log(error)
}
};


viewPost = async(postId) =>{
    //API call to the server and view Data
   
        // const { data }=  await axios.get(`${API_URL}/${postId}`);
        
        
            window.location.href= `${API_URL}/${postId}`;
          

};


editPost = (post) =>{
    
    this.setState( {...post } )
}

handleChange=({target : {name, value} }) =>{
    this.setState({ [name]: value});

}

handleSubmit = (e) =>{
    e.preventDefault();
    if(this.state.id){
        this.updatePost();
    }
    else{
    this.createPosts();
    }
   
    }


render (){
    return (
        <>
        
        <form onSubmit= {this.handleSubmit}>
            

            <label>User Id:</label>
            <input type="number" name="userId" value={this.state.userId} onChange={this.handleChange}/>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title}  onChange={this.handleChange} />
            <label>Body:</label>
            <input type="text" name="body" value={this.state.body} onChange={this.handleChange}  />
            <input type="submit" onChange={this.handleSubmit} />
            
            
                 </form>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.posts.map((post) =>{
                     return(
                       
                       <tr key={post.id}>
                       
                       <td>{post.id}</td>
                       <td>{post.userId}</td>
                       <td>{post.title}</td>
                       <td>{post.body}</td>
                       <tr>
                          <td> <Button variant="danger" className="delBtn" onClick={() => this.deletePost(post.id)}> <i class="fa fa-trash"></i></Button></td>
                          <td> <Button className="editBtn" onClick={() => this.editPost(post)}><i class="fas fa-highlighter"></i></Button></td>
                          <td> <Button variant="info" className="viewBtn" onClick={() => this.viewPost(post.id)}><i class="fa fa-eye" aria-hidden="true"></i></Button></td>

                       </tr>
    
                    </tr>
                  
   
                    );
                   })}
                
              
            </tbody>
        </Table>
        </>
    );
}



}
export default PostApp;