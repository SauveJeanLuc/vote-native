import { StyleSheet, Text, View, StatusBar, Image, Button, Alert } from 'react-native';
import CustomText from '../components/CustomText';
import { COLORS } from '../constants/Color';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Integrate} from '../utils/Integrate';
import { useState } from 'react';
import * as SecureStore from "expo-secure-store";

export default function SignIn({navigation}){


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){

        if (!email || !password ) {
            Alert.alert("Error", "You must fill in all fields");
            return;
        }

        const payload = JSON.stringify({
            email,
            password
        })

        var data = await Integrate('/user/login',payload,'POST');

        if(data.user){
            if (data.token) {
                await SecureStore.setItemAsync("token", data.token);
                await SecureStore.setItemAsync("loggedIn", "true");
            }
            navigation.navigate('Candidates');
        }else{
            Alert.alert('Email or Password is incorrect');
        }
    }
    
    return(
        <View style={styles.container}>
            <View>
                <CustomText fontSize={24} color = {COLORS.blue}> SIGN IN </CustomText>
            </View>

            <Image
                style={styles.image}
                source={require('../assets/signin.jpg')}
            />

            <View>
                <CustomText textAlign='left' opacity={0.63}>Email:</CustomText>
                <CustomInput placeholder='Enter Your Email' value={email} marginBottom={14} onChange={(text) => {setEmail(text)} }/>
                <CustomText textAlign='left' opacity={0.63}>Password:</CustomText>
                <CustomInput placeholder='Enter Your Password' value={password} onChange={(text) => {setPassword(text)}} isPassword={true}/>
            </View>


            <CustomButton margin={30} onClick={handleLogin}>SIGN IN</CustomButton>

            
            
            <TouchableOpacity
                onPress={
                    () => navigation.navigate('SignUp')
                }
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.intenseBlue,
                            padding: 10
                        }}                    
                    >
                        Create new account ?
                    </Text>
                </View>
            </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
      height: '50%',
      width: '80%',
    },
  });
  