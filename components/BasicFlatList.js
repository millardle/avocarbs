import React, { Component } from 'react';
import { 
    FlatList, 
    StyleSheet, 
    Text, 
    View, 
    Platform
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import { TouchableOpacity } from 'react-native-gesture-handler';

import flatListData from '../data/flatListData';
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
                    text: 'Edit',backgroundColor: 'green'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                            flatListData.splice(this.props.index, 1);
                            this.props.parentFlatList.refreshFlatList(deletingRow);
                    },
                    text: 'Remove', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    marginBottom: 1
                }}>
                    <Text style={styles.flatListHeaderItem}>{this.props.item.name}</Text>
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
        this.refs.addModal.showAddModal();
    }

    render(){
        return(
            <View style={{flex:1, marginTop: Platform.OS === 'android' ? 0 : 34}}>

                <FlatList
                ref={'flatList'}
                data={flatListData} 
                renderItem={({item, index}) => {
                    return (<FlatListItem item={item} index={index} parentFlatList={this}>

                    </FlatListItem>);
                }}
                >

                </FlatList>
                <TouchableOpacity
                style={styles.button}
                onPress={this._onPressAdd}      
                >
                <Text
                style={styles.buttonText}>
                Add Grocery Item
                </Text>

                </TouchableOpacity>

                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flatListHeaderItem: {
        color: 'black',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatListItem: {
        color: 'black',
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 10,
        fontSize: 16
    },
    button: {
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '100%'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
});