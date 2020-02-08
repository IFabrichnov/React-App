import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../commons/FormsControls/FormsControns';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";


const MyPosts = React.memo(props => {

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostElement);
  }

  let postsElements = props.posts.map(p  => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  

  return (

    <div className={classes.postBlock}>
      <AddProfileMessageRedux onSubmit={onAddPost} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
});

const maxLength10 = maxLengthCreator(10);

const AddProfileMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>

        <div>
          <Field component={Textarea} name='newPostElement'
          placeholder='Enter your message' validate={[required, maxLength10]} />
        </div>
        <div>
            <Button
                onClick={props.handleSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button>
        </div>
      </form>
  )
}

const AddProfileMessageRedux = reduxForm({form: 'profileAddMessageForm'})(AddProfileMessage)

export default MyPosts;