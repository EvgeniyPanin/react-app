import MyPosts from "./MyPosts";
import {addPost} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import { selectPosts } from "../../../redux/profile-selectors";

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state),
    }
}

const MyPostsContainer = connect(mapStateToProps, 
    {addPost})(MyPosts);

export default MyPostsContainer;