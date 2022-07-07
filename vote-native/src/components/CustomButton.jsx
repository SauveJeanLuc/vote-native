import { View } from "react-native";
import { TouchableHighlight } from "react-native";
import { COLORS } from "../constants/Color";
import CustomText from "./CustomText";

export default function CustomButton({children, margin = 10, onClick}){
    return(
        <TouchableHighlight
         underlayColor={'transparent'}
         onPress={onClick}
        >
            <View
                style={
                    {
                        borderWidth: 1,   
                        paddingHorizontal: 30,
                        paddingVertical: 8,
                        borderRadius: 5,
                        backgroundColor: COLORS.intenseBlue,
                        borderColor: COLORS.intenseBlue,
                        marginTop: margin,
                    }
                }
            >
                <CustomText color={COLORS.white}>{children}</CustomText>
            </View>
        </TouchableHighlight>
    );
}