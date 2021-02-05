/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import menu from './src/img/meat.png';
import user from './src/img/user.png';
const window = Dimensions.get('window');

import styles from './styles';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <SafeAreaView> */}
      
         <ImageBackground style={styles.full_contionor}>
              <View style={styles.headder}>
                   <View>
                      <Image source={menu} style={styles.menu_icon} />
                   </View>
                   <View>
                       <Text style={styles.welconetxt}>Welcome</Text>
                   </View>
                   <View>
                   <Image source={user} style={styles.menu_icon} />
                  </View>
              </View>
             
              <View style={styles.hello_txt}>
                   <View>
                        <Text style={styles.hello}>Hello</Text>
                        <Text style={styles.name}>Rananjaya</Text>
                   </View>
                   <View>
                         <Text style={styles.balanace_text}>Your Balance</Text>
                         <Text style={styles.blanace}>120,000</Text>
                   </View>
              </View>
              <ScrollView>

              {/* card */}

              <View style={styles.credit_card_con}>
                   <View style={styles.credit_card}>
                       <View style={styles.insdie_card_main}>
                           <View style={{alignSelf : "center"}}> 
                             <Text style={styles.credit_text}>Credit</Text>
                           </View>
                           <View style={{alignSelf : "center"}}> 
                             <Text style={styles.visa_text}>VISA</Text>
                           </View>
                       </View>
                       <View style={styles.mycard_name_con}>
                         <Text style={styles.mycard_font}>Bandara M.G.R.C</Text>
                         <Text style={{marginTop : (window.width)*0.03,fontSize:(window.width)*0.04,color : "#fff",fontFamily : "OpenSans-SemiBold"}}>0000 - 0000 - 0000 - 0000</Text>
                       </View>
                     
                   </View>
              </View>

              <View>
                 <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:(window.width)*0.05,marginRight : (window.width)*0.05,marginTop : (window.width)*0.05}}>
                      <View>
                        <Text style={{fontSize:(window.width)*0.045,fontFamily : "OpenSans-SemiBold"}}>Mobile Wallet</Text>
                        </View> 
                      
                  </View>

                  <View style={{flexDirection : "row",marginTop:(window.width)*0.05,marginLeft : (window.width)*0.04,marginRight : (window.width)*0.04,justifyContent : "space-around",alignSelf:"auto"}}>
                     {/* <ScrollView horizontal="true"> */}
                      <View style={styles.small_cards}>
                          
                      </View>
                      <View style={styles.small_cards}>
                           
                      </View>
                      <View style={styles.small_cards}>
                           
                      </View>
                      
                      {/* </ScrollView> */}
                   
                  </View>
               <View style={{marginLeft : (window.width)*0.04,marginTop:(window.height)*0.02}}> 

               <View style={{}}>
                      <Text style={styles.wide_card_text_1}>Recent transactions</Text>
                  </View>

                  <View style={{}}>
                       <View style={styles.bottom_wide_card}>

                       </View>
                  
                 
                  </View>
               </View>
                
                
              </View>
              </ScrollView>
         </ImageBackground>
      {/* </SafeAreaView> */}
    </>
  );
};


export default App;
