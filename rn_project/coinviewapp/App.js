import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import CoinView from './components/CoinView'
import TopBar from './components/TopBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" hidden={true}/>
        <TopBar title={'Show me the Coin'}></TopBar>
        <CoinView style={styles.coinView}></CoinView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  coinView: {
      width: '100%',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'space-around'
      // 주석처리한것은 기존에 coinView가 View Component였는데 데이가 늘어남에 따라 ScrollView로 변경했는데
      // ScrollView는 데이터에 따라 변동이 있기때문에 alignItems나 justifyContent는 무의미하다했나, 쓰면안된다했나 어쨋든...
  }
});
