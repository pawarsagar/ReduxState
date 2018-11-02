import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'
import { addValue } from '../redux/action'


class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Name: null,
            Age: null,
            Marks: null
        }


        this.click = this.click.bind(this)
        this.buttonEvent = this.buttonEvent.bind(this)
    }

    buttonEvent() {
        if (this.state.Marks <= 29) {
            Alert.alert('Insufficient Marks', "Please enter marks more than 30")
        }
        else {
            this.props.callFunction(this.state.Name, this.state.Age, this.state.Marks)
            Alert.alert('Added', "Details are added")
        }
    }

    click() {
        var length = Object.keys(this.props.state.user).length;
        length == 0 ? Alert.alert("Data is Blank", "Please enter data to avoid this message") : this.props.navigation.navigate('histroy')
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>

                <View style={styles.formContainer}>
                    <View style={styles.form}>
                        <TextInput style={styles.input} placeholder="Enter Name" placeholderTextColor='white' onChangeText={(e) => this.setState({ Name: e })} />
                        <TextInput style={styles.input} placeholder="Enter Age" placeholderTextColor='white' onChangeText={(e) => this.setState({ Age: e })} />
                        <TextInput style={styles.input} placeholder="Enter Marks" placeholderTextColor='white' onChangeText={(e) => this.setState({ Marks: e })} />

                        <View style={{ padding: 10 }}>
                            <TouchableOpacity style={styles.buttonContainer} onPress={this.buttonEvent}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity style={styles.history} onPress={this.click}>
                                <Text style={styles.buttonText}>Go to Added List</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(285,75,65,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {

        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
        width: 225


    },
    buttonContainer: {
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 10,
        height: 50,
        alignContent: 'space-between'

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '900',
        color: 'rgba(285,75,65,0.9)',
        padding: 4,
        fontSize: 18
    },
    history: {
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 10,
        justifyContent: 'flex-start',
        padding: 10,
        alignContent: 'space-between'

    }
});


const dataStore = (dispatch) => ({
    callFunction: (Name, Age, Marks) => dispatch(addValue(Name, Age, Marks)),
    changeStateValue: (value) => dispatch(changeState(value))

})

const sagarStore = (state) => {
    return { state }
}




export default connect(sagarStore, dataStore)(Home)