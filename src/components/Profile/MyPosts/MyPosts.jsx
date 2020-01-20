import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostElement);
  }

  let postsElements = props.posts.map(p  => <Post message={p.message} likesCount={p.likesCount} />);

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  

  return (

    <div className={classes.postBlock}>
      <h3>My post</h3>
      <AddProfileMessageRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddProfileMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component='textarea' name='newPostElement' placeholder='Enter your message' />
        </div>
        <div>
          <button >Add post</button>
        </div>
      </form>
  )
}

const AddProfileMessageRedux = reduxForm({form: 'profileAddMessageForm'})(AddProfileMessage)

export default MyPosts;