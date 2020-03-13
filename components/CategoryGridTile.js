import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem} >
        <TouchableCmp 
        style={styles.touchableCmp}
        onPress={props.onSelect}
    >
        <View style={{ ...styles.container, ...{ backgroundColor: 'white'} }}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
    </TouchableCmp>
    </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        // flex: 1,
        width: 300,
        margin: 15,
        marginTop: 10,
        marginBottom: 0,
        height: 180,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 22 
            ? 'hidden' 
            : 'visable',
        // elevation: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    },
    touchableCmp: {
        flex: 1
    },
    container: {
        flex: 1,
        borderRadius: 10,
        // shadowColor: 'black',
        // shadowOpacity: 0.26,
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryGridTile;