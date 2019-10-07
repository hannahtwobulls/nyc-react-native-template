import React, { Component } from 'react';
import { Platform } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users';
import strings from '../../constants/strings';
import { User } from '../../types';
import * as S from './Home.style'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export interface Props {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser('1');
  }

  render() {
    return (
      <S.Container>
        <S.Title>
          {strings.hello}. Welcome to React Native!
        </S.Title>
        <S.BodyText>To get started, edit Home.tsx</S.BodyText>
        <S.BodyText>{instructions}</S.BodyText>
      </S.Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
