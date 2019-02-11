import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CoinDetail from './CoinDetail'
import { getCoinIconUri } from '../libs/Constans'

class CoinView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinDatas: [],
            isLoaded: false,
        };
    }

    render() {
        // let detailCells = [];
        //
        // for(let i = 0; i < this.state.coinDatas.length; i++){
        //     let data = this.state.coinDatas[i];
        //     let coinDetail = (
        //         <CoinDetail
        //             key={data.index}{/*컴포넌트의 고유 키값을 넣어주기위한 값, 이값이 없으면 실행은 되지만 워닝이 뜸*/}
        //             rank={data.rank}
        //             name={data.name}
        //             price={data.price_btc}
        //             volume={data.market_cap_usd}
        //         />
        //     );
        //     detailCells.push(coinDetail);
        // }
        // map 표현식과 위의 문법이 동일한 결과 map은 ES6 문법

        let detailCells = this.state.coinDatas.map( (data, index) => {
            const { rank, name, price_btc, market_cap_usd } = data;
            return (
                <CoinDetail
                    key={index}
                    rank={rank}
                    name={name}
                    price={price_btc}
                    volume={market_cap_usd}
                    iconUri={getCoinIconUri(name)}
                />
            );
        });

        return (
            <ScrollView style={this.props.style}>
                {detailCells}
            </ScrollView>
        )
    }

    componentDidMount() {
        this._getCoinDatas(30);

        setInterval(() => {
            this._getCoinDatas(30);
            console.log("toggled!");
        }, 10000);
    }

    _getCoinDatas(limit) {
        this.setState({
            isLoaded: false,
        });

        fetch(
            `https://api.coinmarketcap.com/v1/ticker/?limit=${limit}`
        ).then(res => res.json())
            .then(data => {
                this.setState({
                    coinDatas: data,
                    isLoaded: true,
                })
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default CoinView
