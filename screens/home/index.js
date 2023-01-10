import { TouchableOpacity, View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, AppRegistry, Image, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {

    return (
        <View styles={styles.container}>
            <View>
                <Text style={{ fontSize: 20, marginTop: 200, justifyContent: 'center', flexDirection: 'row', textAlign: 'center' }}>
                    Anasayfa
                </Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: 200
    }
});


export default HomeScreen;


