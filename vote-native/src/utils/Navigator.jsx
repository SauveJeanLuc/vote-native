import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { Stats } from "../screens/Stats";
import { Welcome } from "../screens/Welcome";
import  Candidates from "../screens/Candidates";



const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName='SignUp'
    > 
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="Stats" component={Stats} /> 
        <Stack.Screen name="Welcome" component={Welcome} /> 
        <Stack.Screen name="Candidates" component={Candidates} /> 

    </Stack.Navigator>
        // <SignIn/>
    )
}