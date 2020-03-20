import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Alert, Platform, Image } from 'react-native';
import flatListData from '../data/flatListData';

import Swipeout from 'react-native-swipeout';
import { TouchableHighlight } from 'react-native-gesture-handler';
import AddModal from './AddModal';
import EditModal from './EditModal';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            itemUpdate: 0
        }
    }

    refreshFlatList = () => {
        this.setState((prevState) => {
            return {
                itemUpdate: prevState.itemUpdate + 1
            };
        })
    }

    render() {

        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },

            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                        'Alert',
                        'Would you like to delete?',
                        [
                            {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'Yes', onPress: () => {
                                flatListData.splice(this.props.index, 1);
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                            }},
                        ],
                        { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'green',
                    marginBottom: 1
                }}>
                    <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.itemDescription}</Text>
                </View>
            </Swipeout>

        )
    }
}

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            }
        });
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd () {
        // alert('Added Item')
        this.refs.addModal.showAddModal();
    }

    render(){
        return(
            <View style={{flex:1, marginTop: Platform.OS === 'android' ? 0 : 34}}>

                <FlatList
                ref={'flatList'}
                data={flatListData} 
                renderItem={({item, index}) => {
                    // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (<FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
                }}
                >

                </FlatList>
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                <TouchableHighlight
                style={{marginRight: 10}}
                underlayColor='tomato'
                onPress={this._onPressAdd}
                >
                    <Image 
                        style={{width: 50, height: 50}}
                        source={require('../assets/icon.png')}
                    />
                </TouchableHighlight>
                </View>

                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
});