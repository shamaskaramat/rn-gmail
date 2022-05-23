import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Maildetails = ({ image, title, details, message, date, Star }) => {
    return (
        <View style={styles.containerdetails}>
            <Image source={{ uri: image, width: 50, height: 50 }} style={{ borderRadius: 50 }} />
            <View style={styles.details}>
                <Text style={{fontSize:16, fontWeight:"bold"}}>{title}</Text>
                <Text style={{fontSize:14, fontWeight:"bold"}}>{details}</Text>
                <Text>{message}</Text>
            </View>
            <View style={styles.left}>
                <Text style={{marginBottom:20,fontSize:16, fontWeight:"bold"}}>{date}</Text>
                <Star name="star" size={24} />
            </View>
        </View>
    )
}

export default Maildetails

const styles = StyleSheet.create({
    containerdetails:{
        flexDirection:"row",
        alignItems:"center",
        padding: 10,
        justifyContent:"space-between"
    },
    details:{
        marginLeft:10
    },
    left:{
        marginLeft:20,
    }
})