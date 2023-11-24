import { View, Text,Button  } from 'react-native'
import React from 'react'
import {useAuth} from '@clerk/clerk-react';
import {Link} from 'expo-router';

const Profile= () => {
  const {signOut, isSingedIn}=useAuth();

  
  return (
    <View>
      <Button title='Log Out' onPress={()=>signOut()}/>
      {!isSingedIn &&(
      <Link href={'/(modals)/login'}>
        <Text>Log in</Text>
      </Link>
  )}
    </View>
  );
};

export default Profile;