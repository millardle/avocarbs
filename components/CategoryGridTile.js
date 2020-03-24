import React from 'react';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet,
    Platform,
    TouchableNativeFeedback,
    ImageBackground
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
        <View style={{ ...styles.container}}>
            { props.image ? (
                <ImageBackground source={{uri: props.image}} 
            style={{width: 300, height: 180, resizeMode: 'cover', justifyContent: 'flex-end'}}
            >
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </ImageBackground>
            ) 
            : (
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            )} 
        </View>
    </TouchableCmp>
    </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        width: 300,
        margin: 15,
        marginTop: 10,
        marginBottom: 0,
        height: 180,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 22 
            ? 'hidden' 
            : 'visable',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 5
    },
    touchableCmp: {
        flex: 1
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryGridTile;