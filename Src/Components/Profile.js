import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = ({ route }) => {
  console.log(route.params);
  return (
    <View>
      <Text>Name:{route.params.username}</Text>
      <Text>Email:{route.params.useremail}</Text>
      <Text>Password:{route.params.userpassword}</Text>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({})