import React from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../components/LoadingSpinner';

class AuthLoadingScreen extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('AppStack');
      } else {
        this.props.navigation.navigate('AuthStack');
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <LoadingSpinner visible color="blue" size="large" />;
  }
}

export default AuthLoadingScreen;
