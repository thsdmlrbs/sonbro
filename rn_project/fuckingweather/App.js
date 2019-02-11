import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Weather from './Weather';

//ActivityIndicator 는 로딩화면
const API_KEY = "0717b8a065037b293f4d186f9ed66c1d";
export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
  };

  componentDidMount() {
    // 위치 받아오는 허용 메세지가 뜨는데 그것도 변경가능하다.
    navigator.geolocation.getCurrentPosition(
        position => {
          this._getWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: error
          });
        }
    )
  }

  _getWeather = ( lat, long ) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    ).then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            temperature: json.main.temp,
            name: json.weather[0].main,
          })
        });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        { isLoaded ? <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}></Weather> : (<View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the fucking weather</Text>
          { error ? <Text style={styles.errorText}>{error}</Text> : null }
        </View>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,
  },
  errorText: {
    color: 'red',
    fontSize: 15,
  }
});
