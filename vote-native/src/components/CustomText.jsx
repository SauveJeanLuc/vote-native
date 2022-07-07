import { View, Text } from "react-native"
import { COLORS } from "../constants/Color"

export default function CustomText({ children , bold = false, color = COLORS.black, opacity = 1, fontSize = 16, textAlign = 'center', onClick = null}){
    return(
        <View>
            <Text
                style = {{
                    fontWeight: bold ? '700': '600',
                    color: color,
                    opacity: opacity,
                    fontSize: fontSize,
                    fontFamily: 'Roboto',
                    textAlign: textAlign,
                }}
                onPress = {onClick}
            > {children} </Text>
        </View> 
    )
}