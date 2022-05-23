import { StyleSheet, Image, View, TextInput,TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
const Header = ({navigation}) => {
    const [textInputValue, setTextInputValue] = useState('');

    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity  >
            <Entypo name="menu" size={30} />
            </TouchableOpacity>
            <TextInput
                onChangeText={text => setTextInputValue(text)}
                value={textInputValue}
                placeholder="Search in mails"
                style={{marginLeft:-60}}
            />

            <Image source={{ uri: "https://scontent.flhe2-4.fna.fbcdn.net/v/t31.18172-8/29060789_151824442312445_1455140487902702803_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFe_wfF3EoRUtJxk0FZ3Ta0OxuPhYJGi_k7G4-FgkaL-eht6xwLUbjSAWIV348vh3nrRLnbTZR6yvfyNZ1W-d5P&_nc_ohc=sCgmTCjdjOsAX91bfi_&_nc_ht=scontent.flhe2-4.fna&oh=00_AT8TwSoRa4eyvhlKur0sGvAknsML4ZDT3SKVUntpwX9VTQ&oe=62844A16" }}
                style={styles.avatar}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    headercontainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#e8f5fa",
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        margin: 10,
    }
})