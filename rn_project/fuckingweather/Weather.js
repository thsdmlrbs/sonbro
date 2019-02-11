import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
//https://expo.github.io/vector-icons/ 아이콘 제공 사이트
import { Ionicons } from "@expo/vector-icons";
import { MeterialCommunityIcons } from "@expo/vector-icons";

//난 이게 왜 없을까... npm으로 설치해
import PropTypes from "prop-types";

// LinearGradient colors 속성에 'red'값을 추가로 줘보기
// export default class Weather extends React.Component {
//     render() {
//         return (
//             <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//                 <View style={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy"/>
//                     <Text style={styles.temp}>35도</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>This is title</Text>
//                     <Text style={styles.subtitle}>This is subtitle</Text>
//                 </View>
//             </LinearGradient>
//         )
//     }
// }

const weatherCase = {
    Rain: {
        color:["#00C6FB","#005BEA"],
        title:"Raining like MF",
        subtitle: "우산 꼭 챙기세요",
        icon: "ios-rainy",
        //icon: "weather-rainy",
    },
    Clear: {
        color:["#FEF253","#FF7300"],
        title:"Sunny as Fuck",
        subtitle: "빨래하기 좋은 날씨네요",
        icon: "ios-sunny",
        //icon: "weather-sunny",
    },
    Thunderstorm: {
        color:["#00ECBC","#007ADF"],
        title:"천둥번개 오집니다",
        subtitle: "피뢰침을 들고 서있어보세요.",
        icon: "weather-lightning",
    },
    Clouds: {
        color:["#D7D2CC","#304352"],
        title:"구름이 잔뜩 껴있음요",
        subtitle: "구름낀날은 구름과자 하나 어떠세요",
        icon: "ios-cloudy",
    },
    Snow: {
        color:["#00C6FB","#005BEA"],
        title:"밖에 눈이 옵니다",
        subtitle: "나랑 눈싸람 만들래~?",
        icon: "ios-snow ",
    },
};
//갑자기 함수로 뺴고 지랄임
function Weather( { weatherName, temp }) {
    return (
        <LinearGradient colors={weatherCase[weatherName].color} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCase[weatherName].icon}/>

                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCase[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCase[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )

}

Weather.protoTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    temp: {
        fontSize: 50,
        color: 'white',
        marginTop: 20,
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
    },
    title: {
        fontSize: 38,
        color: 'white',
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        color: 'white',
        backgroundColor: 'transparent',
        marginBottom: 24,
    }
});