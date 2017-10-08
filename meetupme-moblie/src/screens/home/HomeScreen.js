import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { fetchMyMeetups } from './actions';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';

import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';

import { Button, icon } from 'native-base';

@connect(state => ({ myMeetups: state.home.myMeetups }), { fetchMyMeetups })

//
class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerRight: () => {
    //   const style = { backgroundColor: Colors.redColor };
    //
    //   const right = (
    //     <View>
    //       <Button transparent>
    //         <Icon
    //           name="md-add-circle"
    //           style={{
    //             fontSize: 30,
    //             color: Colors.whiteColor
    //           }}
    //         />
    //       </Button>
    //     </View>
    //   );
    //
    //   return { style, right };
    // },

    headerStyle: {
      backgroundColor: Colors.redColor
    },

    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    )
  };

  async componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const { myMeetups: { isFetched, data, error } } = this.props;

    if (!isFetched) {
      return <LoadingScreen />;
    }

    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>

        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
