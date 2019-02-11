import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

class CoinDetail extends React.Component {
    render() {
        let date = new Date();
        let now  = date.toLocaleString()

        return (
            <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.iconUri}}
                />
                <Text style={[styles.text, {flex: 1}]}>{'#' + (this.props.rank || 'Rank')}</Text>
                <Text style={[styles.text, {flex: 1}]}>{(this.props.name || 'Name')}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Price: ' + (this.props.price || 'Price')}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Volume: ' + (this.props.volume || 'Volume')}</Text>
                <Text style={[styles.text, {flex: 1}]}>{'Updated: ' + (this.props.times || now)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
        marginBottom: 5,
    },
    text: {
        color: 'white',
    },
});

export default CoinDetail