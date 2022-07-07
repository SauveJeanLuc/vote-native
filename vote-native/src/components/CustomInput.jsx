import { View } from "react-native";
import { TextInput } from "react-native";

export default function CustomInput({placeholder = 'Enter Input', isPassword = false, value='', onChange, marginBottom = 0}){
    return(
        <View>
            <TextInput
                style={{
                    borderRadius: 10,
                    borderColor: 'black',
                    width: '100%',
                    padding: 10,
                    alignItems: "center",
                    paddingLeft: 10,
                    marginTop: 10,
                    width: 327,
                    height: 54,
                    borderRadius: 8,
                    borderColor: "#EAECEE",
                    borderWidth: 3,
                    marginBottom: marginBottom
                    
                }}
                placeholder = {placeholder}
                // keyboardType="numeric"
                // multiline={true}
                secureTextEntry={isPassword}
                value={value}
                onChangeText={onChange}
            /> 
        </View>
    );
}

  