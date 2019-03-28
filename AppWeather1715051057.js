import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class Tugas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          city: '',
          forecast: {
            main: '_',
            description: '_',
            temp: 0
    }
        };
      }
      getWeather= () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=+'
        + this.state.city +
        '&appid=aa3419f65050b1ec3bc2cd03175cac70&units=metric';
        return fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson);
            this.setState({
              forecast: {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
              }
            });
          });
      }


    render() {
        return (
            <View style={styles.containerMain}>
                <View style={styles.Box1}>
                    <Text style={styles.TextHeader}>SIMPLE WEATHER APP</Text>
                </View>
                <View style={styles.Box2}>
                   
                    <TextInput 
                        style={{ height: 40, color: 'white', fontSize: 20 }}
                        placeholder="INPUT CITY"
                        onChangeText={( city )=> this.setState({ city })}
                    />
                    <Button
                        style={{ width: 170 }}
                        onPress={()=> this.getWeather()}
                        title="LOOK THE WEATHER"
                        accessibilityLabel="Click to search city"
                    />
                   
                </View>
                <View style={styles.Box3}>
                <Text style={styles.Text} >
                    Kota        = {this.state.city} {"\n"}
                    Temperature = {this.state.forecast.temp}{'°Celcius \n'}
                    Weather     = {this.state.forecast.main} {'\n'}
                    Description = {this.state.forecast.description} {'\n'}

                 </Text>
                </View>
               
                <View style={styles.Box4}>
                    <Text style={styles.Text1}>©CopyRight - Yoga Saputra</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#FFCDD2',
        flexDirection: 'column'
    },
    
    Box1: {
        flex: 1,
        backgroundColor: '#E65100',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    Box2: {
        flex: 1,
        backgroundColor: '#F4511E',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 7,
        alignItems: 'center'
    },
    Box3: {
        flex: 3,
        backgroundColor: '#FFE0B2',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 20,
        borderRadius: 7,
        alignItems: 'flex-start'
    },
    
    Box4: {
        flex: 0.4,
        backgroundColor: '#E65100',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    Text: {
        color: 'black',
        fontSize: 20
    },
    TextHeader: {
        color: 'white',
        fontSize: 22
    },
    Text1: {
        color: 'white',
        fontSize: 17
    },
   
});

