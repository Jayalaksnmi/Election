import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

import firebase from 'firebase';

import db from '../config';

export default class Score extends React.Component {
  constructor() {
    super();
    this.state = {
      party1score: 0,
      party2score: 0,
      party3score: 0,
      party4score: 0,
      party5score: 0,
      winner: '',
    };
  }
  gettingTheScores() {
    var scores = [];
    var scores2 = [];
    var scores3 = [];
    var scores4 = [];
    var scores5 = [];
    var actual = null;
    var actual2 = null;
    var actual3 = null;
    var actual4 = null;
    var actual5 = null;
    var total = [];

    db.collection('Party1')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          scores.push(data);
        });
        actual = scores.length;
        total.push(actual);
        this.setState({
          party1score: actual,
        });
      });

    db.collection('Party2')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          scores2.push(data);
        });
        actual2 = scores2.length;
        total.push(actual2);
        this.setState({
          party2score: actual2,
        });
      });

    db.collection('Party3')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          scores3.push(data);
        });
        actual3 = scores3.length;
        total.push(actual3);
        this.setState({
          party3score: actual3,
        });
      });

    db.collection('Party4')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          scores4.push(data);
        });
        actual4 = scores4.length;
        total.push(actual4);
        this.setState({
          party4score: actual4,
        });
      });

    db.collection('Party5')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          scores5.push(data);
        });
        actual5 = scores5.length;
        total.push(actual5);

        this.setState({
          party5score: actual5,
        });
      })
      
  }

  componentDidMount() {
    this.gettingTheScores();
  }

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/boom.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            alignItems: 'center',
            width: 1364.5,
            height: 1000,
          }}>
          <Text style={{ fontSize: 70, fontWeight: '500', padding: 20 }}>
            Final Results!
          </Text>

          <Text style={{ marginTop: 50, marginLeft: -800, fontSize: 30 }}>
            Party Name1
          </Text>
          <Text style={{ marginTop: -40, marginLeft: -390, fontSize: 30 }}>
            Party Name2
          </Text>
          <Text style={{ marginTop: -40, marginLeft: 40, fontSize: 30 }}>
            Party Name3
          </Text>
          <Text style={{ marginTop: -40, marginLeft: 440, fontSize: 30 }}>
            Party Name4
          </Text>
          <Text style={{ marginTop: -40, marginLeft: 840, fontSize: 30 }}>
            Party Name5
          </Text>
          <Text style={{ marginTop: 50, marginLeft: -820, fontSize: 70 }}>
            {this.state.party1score}
          </Text>
          <Text style={{ marginTop: -90, marginLeft: -400, fontSize: 70 }}>
            {this.state.party2score}
          </Text>
          <Text style={{ marginTop: -90, marginLeft: 50, fontSize: 70 }}>
            {this.state.party3score}
          </Text>
          <Text style={{ marginTop: -90, marginLeft: 460, fontSize: 70 }}>
            {this.state.party4score}
          </Text>
          <Text style={{ marginTop: -90, marginLeft: 840, fontSize: 70 }}>
            {this.state.party5score}
          </Text>

    
        </ImageBackground>
      </View>
    );
  }
  //   wining(a,b,c,d,e){
  // if(a==1){
  // alert('working!')
  // }

  // }
}
