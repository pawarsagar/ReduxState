import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import { changeState, deleteData } from '../redux/action';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');


class History extends React.Component {
    static navigationOptions = {

        headerTintColor: 'white'
    }

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            id: 0,
            changeName: null,
            changeAge: null,
            changeMarks: null,
            data: []
        }

        this.settings = this.settings.bind(this)
        this.changeButton = this.changeButton.bind(this)
        this.deleteData = this.deleteData.bind(this)

    }


    settings(id) {


        this.setState({
            id: id,
            changeName: this.props.state.user[id].Name,
            changeAge: this.props.state.user[id].Age,
            changeMarks: this.props.state.user[id].Marks,
        })

    }
    deleteData() {



        this.props.deleteData(this.state.id)
        this.toggle(false)



    }

    changeButton() {

        this.props.changeStateValue(this.state.id, this.state.changeName, this.state.changeAge, this.state.changeMarks)
        this.toggle(false)
    }

    toggle(value) {
        this.setState({
            modalVisible: value
        })
    }



    componentWillMount() {
        this.setState({
            data: this.props.state.user
        })


    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                    decelerationRate={0}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                    {

                        this.state.data.map((elements, key) => {


                            return (<View style={styles.card}>
                                <View key={key} >
                                    <View>
                                        <View ><Text style={styles.name} key={key}>{elements.Name}</Text></View>
                                        <View>
                                            <Text style={styles.ageText} key={key}>{`   Age   `}</Text>
                                            <Text style={styles.marksText} key={key}>{` Marks   `}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.age} key={key}>{elements.Age}</Text>
                                            <Text style={styles.marks} key={key}>{elements.Marks}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.settings(key), this.toggle(true) }} >
                                            <Icon name="cog" size={38} color="white" />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>)






                        })}

                </ScrollView>
                <Modal animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {/*  console.log("Modal has been closed.") */ }}
                    transparent={true}
                >

                    <View style={styles.modal}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                            <TextInput style={styles.input} onChangeText={(e) => { this.setState({ changeName: e }) }} placeholder="Change NAME HERE" placeholderTextColor='rgba(285,75,65,0.9)'></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInput style={styles.input} onChangeText={(e) => { this.setState({ changeAge: e }) }} placeholder="Change AGE HERE" placeholderTextColor='rgba(285,75,65,0.9)'></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <TextInput style={styles.input} onChangeText={(e) => { this.setState({ changeMarks: e }) }} placeholder="Change Marks Here" placeholderTextColor='rgba(285,75,65,0.9)'></TextInput>
                        </View>

                        <View style={{ padding: 10 }}>
                            <TouchableOpacity onPress={this.changeButton}>
                                <Text style={styles.buttonText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }}>
                            <TouchableOpacity onPress={this.deleteData}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 10 }}>
                            <TouchableHighlight onPress={() => {
                                this.toggle(false)
                            }}>
                                <Text style={styles.buttonText}>Close This Slide </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.9)',
        alignItems: 'center',
        justifyContent: 'center',

    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {
        color: 'rgb(255,255,255)',

        left: 10,
        fontSize: 15,
        fontWeight: '900'

    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '900',
        color: 'rgba(285,75,65,0.9)',
        padding: 4,
        fontSize: 18
    },
    input: {

        backgroundColor: 'rgba(255,255,255,0.9)',
        height: 40,
        marginBottom: 20,
        color: 'rgba(285,75,65,0.9)',
        paddingHorizontal: 10,
        width: 225


    },
    buttonContainer: {
        //  backgroundColor: "#3700B3",
        paddingVertical: 10,
        left: '43%',
        top: '65%',

    },

    modalButton: {
        backgroundColor: "rgba(255,255,255,0.9)",
        paddingVertical: 10,
        height: 50,
        alignContent: 'space-between',
        width: '55%'
    },
    card: {

        marginTop: 100,
        backgroundColor: 'rgba(285,75,65,0.9)',
        width: width - 80,
        margin: 10,
        height: 300,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: -5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.5

    },
    name: {
        top: '35%',
        color: 'rgb(255,255,255)',
        left: '35%',
        fontSize: 30,
        fontWeight: '900'

    },
    ageText: {
        top: 95,
        paddingLeft: '5%',
        fontSize: 20,

    },
    marksText: {
        top: 71,
        paddingLeft: '64%',
        fontSize: 20,
    },
    age: {
        top: 80,
        paddingLeft: '7%',
        fontSize: 45,
        fontWeight: '900'
    },
    marks: {
        top: 25,
        paddingLeft: '65%',
        fontSize: 45,
        fontWeight: '900'
    }

});
const sagarStore = (state) => {
    return { state }
}

const dataStore = (dispatch) => ({

    changeStateValue: (id, Name, Age, Marks) => dispatch(changeState(id, Name, Age, Marks)),
    deleteData: (id) => dispatch(deleteData(id))

})


export default connect(sagarStore, dataStore)(History)
