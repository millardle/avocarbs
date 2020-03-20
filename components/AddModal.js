import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, 
    View, Alert, Platform, TouchableHighlight, 
    Dimensions, TextInput} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

let screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItemName: '',
            newItemDescription: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render() {
        return (
            <Modal
            ref={'myModal'}
            style={{
                justifyContent: 'center',
                borderRadius: Platform.OS === 'android' ? 0 : 30,
                shadowRadius: 10,
                width: screen.width - 80,
                height: 300
            }}
            position='center'
            backdrop={true}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New Item</Text>
                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newItemName: text })}
                    placeholder='Enter Name'
                    value={this.state.newItemName}
                />
                <TextInput 
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ newItemDescription: text })}
                    placeholder='Enter Description'
                    value={this.state.newItemDescription}
                />
                <Button 
                    style={{
                        fontSize: 18,
                        color: 'white'
                    }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'green'
                    }}
                    onPress={() => {
                        if (this.state.newItemName.length == 0 || this.state.newItemDescription.length == 0) {
                            alert('You must enter item name and description');
                            return;
                        }
                        const newKey = this.generateKey(10);
                        const newItem = {
                            key: newKey,
                            name: this.state.newItemName,
                            itemDescription: this.state.newItemDescription
                        };
                        flatListData.push(newItem);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                Save
                </Button>
            </Modal>
        )
    }
}