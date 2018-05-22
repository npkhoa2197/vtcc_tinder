import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import CommentsList from '../components/VerticalList';
import CustomTextInput from '../components/CustomTextInput';
import MyButton from '../components/common/MyButton';
import { requestHotgirlComments, stopRequestHotgirlComments, receiveUsername } from '../actions';
import { COMMENT, SEND_BUTTON, COMMENT_PLACEHOLDER } from '../constants/strings';
import { COMMENT_SEND_BUTTON_COLOR } from '../constants/colors';

const styles = StyleSheet.create({
  commentInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  commentsContainer: {
    height: 250,
    alignSelf: 'stretch',
  },
});

class CommentList extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      authorName: PropTypes.string,
      body: PropTypes.string,
    })).isRequired,
    hotgirlId: PropTypes.string.isRequired,
    requestHotgirlComments: PropTypes.func.isRequired,
    stopRequestHotgirlComments: PropTypes.func.isRequired,
    receiveUsername: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.commentsRef = firebase.database().ref(`comments/${this.props.hotgirlId}`);
  }

  componentDidMount() {
    this.props.requestHotgirlComments(this.props.hotgirlId);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.comments.length !== nextProps.comments.length;
  }

  componentWillUnmount() {
    this.props.stopRequestHotgirlComments(this.props.hotgirlId);
  }

  handleCommentSubmit = () => {
    const { username } = this.props;
    const { uid } = firebase.auth().currentUser;
    if (username === '') {
      firebase
        .database()
        .ref(`users/${uid}/name`)
        .once('value')
        .then((dataSnapshot) => {
          this.props.receiveUsername(dataSnapshot.val());
          this.commentsRef.push({
            author: uid,
            authorName: dataSnapshot.val(),
            body: this.comment,
          });
        })
        .catch(() => {}); // TODO: HANDLE SUBMIT ERROR
    } else {
      this.commentsRef.push({
        author: uid,
        authorName: username,
        body: this.comment,
      });
    }
    this.customTextInput.clear();
  };

  render() {
    return (
      <View style={styles.commentsContainer}>
        <CommentsList
          comments={this.props.comments}
          type={COMMENT}
          ref={(ref) => {
            this.commentList = ref;
          }}
        />
        <View style={styles.commentInputContainer}>
          <CustomTextInput
            highlightColor="white"
            highlightTextColor="black"
            placeholder={COMMENT_PLACEHOLDER}
            width={200}
            onChangeText={(comment) => {
              this.comment = comment;
            }}
            ref={(ref) => {
              this.customTextInput = ref;
            }}
          />

          <MyButton
            text={SEND_BUTTON}
            color={COMMENT_SEND_BUTTON_COLOR}
            textColor="white"
            onPress={() => this.handleCommentSubmit()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  username: state.username,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  requestHotgirlComments: id => dispatch(requestHotgirlComments(id)),
  stopRequestHotgirlComments: id => dispatch(stopRequestHotgirlComments(id)),
  receiveUsername: username => dispatch(receiveUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
