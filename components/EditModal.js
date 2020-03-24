import React, { Component } from 'react';
import { 
    Text, 
    Platform,
    Dimensions, 
    TextInput} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

let screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            itemDescription: ''
        }
    }
    showEditModal = (editingItem, flatlistItem) => {

        this.setState({
            key: editingItem.key,
            itemName: editingItem.name,
            itemDescription: editingItem.itemDescription,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

    initializeState = () => this.setState({newItemName: '', newItemDescription: ''})

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
                    onChangeText={(text) => this.setState({ itemName: text })}
                    placeholder='Edit Name'
                    value={this.state.itemName}
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
                    onChangeText={(text) => this.setState({ itemDescription: text })}
                    placeholder='Edit Description'
                    value={this.state.itemDescription}
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
                        if (this.state.itemName.length == 0 || this.state.itemDescription.length == 0) {
                            alert('You must enter item name and description');
                            return;
                        }
                        
                        let foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return;
                        }
                        flatListData[foundIndex].name = this.state.itemName;
                        flatListData[foundIndex].itemDescription = this.state.itemDescription;

                        this.state.flatlistItem.refreshFlatList();
                        this.initializeState();
                        this.refs.myModal.close();
                        
                    }}>
                Save
                </Button>
            </Modal>
        )
    }
}