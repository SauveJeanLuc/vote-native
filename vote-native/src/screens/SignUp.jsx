import { StyleSheet, Text, View, StatusBar, Image, TextInput, Alert } from 'react-native';
import CustomText from '../components/CustomText';
import { COLORS } from '../constants/Color';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {Integrate} from '../utils/Integrate';

export default function SignUp({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignUp(){
        if (!email || !password || !name) {
            Alert.alert("Error", "You must fill in all fields");
            return;
        }
        const payload = JSON.stringify({
            name,
            email,
            password
        })

        var data = await Integrate('/user/register',payload,'POST');

        if(data.message = 'User Created Successfully'){
            Alert.alert('User Registered Successfully');
            navigation.navigate('SignIn');
        }else{
            Alert.alert(data.message);
        }
    }

    return(
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../assets/bird-blue.gif')}
            />

            <View
                style={
                    {
                        marginTop: 20,
                        marginBottom: 40
                    }
                }
            >
                <CustomText fontSize={24} color = {COLORS.blue} > Let's Get Started </CustomText>
            </View>

            <View>
                <CustomText textAlign='left' opacity={0.63}>Names:</CustomText>
                <CustomInput placeholder='Enter Your Names' marginBottom={14} value={name} onChange={(text) => {setName(text)}} />
                <CustomText textAlign='left' opacity={0.63}>Email:</CustomText>
                <CustomInput placeholder='Enter Your Email' marginBottom={14} value={email} onChange={(text) => {setEmail(text)}} />
                <CustomText textAlign='left' opacity={0.63}>Password:</CustomText>
                <CustomInput placeholder='Enter Your Password' isPassword={true} marginBottom={14} value={password} onChange={(text) => {setPassword(text)}}/>
            </View>


            <CustomButton margin={30} onClick={handleSignUp}>SIGN UP</CustomButton>
            
            <TouchableOpacity
                onPress={
                    () => navigation.navigate('SignIn')
                }
            >
                <View>
                    <Text
                        style={{
                            color: COLORS.intenseBlue,
                            padding: 10
                        }}                    
                    >
                        Already have an account ?
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
      height: '20%',
      width: '80%',
    },
});
  