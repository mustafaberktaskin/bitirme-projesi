import { View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, AppRegistry, TouchableOpacity } from 'react-native';


const ProfileScreen = ({ navigation }) => {


    return (
        <View styles={styles.container}>
            <View>
                <Text style={{ fontSize: 20, marginTop: 200, justifyContent: 'center', flexDirection: 'row', textAlign: 'center' }}>
                    Profile
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Login")} style={{ justifyContent: 'center' }}>
                    <View style={styles.button}>
                        <Text style={{ textAlign: 'center', color: '#000', fontWeight: '800',marginTop:200,fontSize:20 }}>
                            Çıkış Yap
                        </Text>
                    </View>
                </TouchableOpacity>
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

export default ProfileScreen;


