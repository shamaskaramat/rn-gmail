import { ScrollView, StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import Maildetails from '../Components/Maildetails'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Header from '../Components/Header'
const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="lightgray" barStyle="light-content" />
      <Header />
      <ScrollView>
        <Maildetails
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />
        <Maildetails
          image="https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Mustakbil Jobs"
          details="SK Jobs in Lahore Pakistan"
          message="Filler text is text that shares..."
          date="17 april"
          Star={EvilIcons}
        />

      </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})