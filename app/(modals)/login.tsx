import Colors from '@/constants/Colors';
import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { defaultStyles } from '@/constants/Styles';

const Strategy = {
    Google: 'oauth_google',
    Apple: 'oauth_apple',
    Facebook: 'oauth_facebook',
  };
const Page = () => {
  useWarmUpBrowser();
  const route=useRouter();
  const {startOAuthFlow : googleAuth} = useOAuth({strategy: 'oauth_google'});
  const {startOAuthFlow : appleAuth} = useOAuth({strategy: 'oauth_apple'});
  const {startOAuthFlow : facebookAuth} = useOAuth({strategy: 'oauth_facebook'});
  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];
  
    try {
      const { createdSessionId, setActive } = await selectedAuth();
      console.log({ createdSessionId });
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  




  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={[defaultStyles.inputField,{marginBottom:30}]}/> 
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.seperatorView}>
        <View
          style={{
             flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
          <Text style={styles.seperator}>or</Text>
          <View
          style={{
            flex: 1,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

<View style={{ gap: 20 }}>
  <TouchableOpacity style={styles.btnOutline} >
    <Ionicons name="call" size={24} color="black" />
    <Text style={styles.btnOutlineText}>Continue with Phone</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnOutline} onPress={()=>onSelectAuth(Strategy.Apple)}>
    <Ionicons name="md-logo-apple" size={24} color="black" />
    <Text style={styles.btnOutlineText}>Continue with Apple</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnOutline}>
    <Ionicons name="md-logo-google" size={24} color="black" onPress={()=>onSelectAuth(Strategy.Google)} />
    <Text style={styles.btnOutlineText}>Continue with Google</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.btnOutline}>
    <Ionicons name="md-logo-facebook" size={24} color="black" onPress={()=>onSelectAuth(Strategy.Facebook)}/>
    <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
  </TouchableOpacity>
  </View>
</View>
  )   
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:26,
  },
  seperatorView:{
    flexDirection: 'row',
    gap:10,
    alignContent: 'center',
    marginVertical: 30,
  },
  seperator: {
    fontFamily: 'mon-sb',
    color: Colors.grey,
    fontSize: 16,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
});

export default Page;