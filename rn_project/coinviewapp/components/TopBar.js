import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Left</Text>
                <Text style={{fontSize:20}}>{this.props.title}</Text>
                <Text>Right</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        flexDirection: 'row',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'space-between', //center, space-around, space-between
    },
});

export default TopBar