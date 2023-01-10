import { TouchableOpacity, View } from "react-native"
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, ScrollView, TextInput, Text, RefreshControl, AppRegistry, Image, Button } from 'react-native';


const LoginScreen = ({ navigation }) => {

    return (
        <View styles={styles.container}>
            <View style={{}}>
                <View style={{ height: '40%' }}>
                    <View style={{ backgroundColor: '#2470a0', flex: 1, justifyContent: 'center', flexDirection: 'row', paddingTop: 100 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/tr/7/72/Fenerbah%C3%A7e_%C3%9Cniversitesi_FB%C3%9C.png',
                            }}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: '#2470a0', height: '60%' }}>
                    <View style={{ flexDirection: 'column', marginTop: 30 }}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: '700', alignSelf: 'center', padding: 20 }}>
                            Giriş
                        </Text>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', color: '#fff' }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', alignSelf: 'flex-start', marginLeft: 40 }}>
                                E-Mail
                            </Text>
                            <TextInput
                                placeholderTextColor="#fff"
                                placeholder="Mail Adresinizi Giriniz"
                                style={styles.input}
                            />
                        </View>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, color: '#fff' }}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', alignSelf: 'flex-start', marginLeft: 40 }}>
                                Şifre
                            </Text>
                            <TextInput
                                placeholderTextColor="#fff"
                                placeholder="Şifrenizi Giriniz"
                                style={styles.input}
                            />
                        </View>

                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', marginTop: 30, color: '#fff' }}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Main")} style={{ justifyContent: 'center' }}>
                                <View style={styles.button}>
                                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '800' }}>
                                        Giriş Yap
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Register")} activeOpacity={0.7} style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '800', color: '#fff' }}>
                                    Hesabın yok mu?  Hemen Kayıt Ol!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#163962'
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 10,
        width: 350,
        color: '#fff'
    },
    button: {
        backgroundColor: '#2196f3',
        width: 220,
        padding: 14,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
    }

});

export default LoginScreen;


