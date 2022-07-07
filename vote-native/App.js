import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from './src/utils/Navigator';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
        <Navigator style={{backgroundColor: 'red'}} />
        <StatusBar style="auto" />        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: StatusBar.currentHeight,
  },
});
