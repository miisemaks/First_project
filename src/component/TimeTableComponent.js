import * as React from 'react'
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ScrollView,
        Dimensions
        } from 'react-native'

const widthWindow = Dimensions.get('window').width 
const heightWindow = Dimensions.get('window').height

export const TimeTableComponent = ({data}) => {
    return(
      <ScrollView 
        style={styles.scrollview}
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
      >
        <View style={styles.submain}> 
          <TouchableOpacity style={styles.touchChange}>
            <Text style={styles.touchText}>Изменить</Text>
          </TouchableOpacity>
          <View style={styles.mainTextView}>
            <View style={styles.textView}>
              <Text style={styles.text}>Отплытие</Text>
              <Text style={styles.text}>Причал</Text>
              <Text style={styles.text}>Паром</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.text}>{data.date1}</Text>
              <Text style={styles.text}>{data.dock1}</Text>
              <Text style={styles.text}>{data.parom}</Text> 
            </View>
          </View>
          <TouchableOpacity style={styles.touchCancel}>
            <Text style={styles.touchText}>Отменить</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
}

const styles=StyleSheet.create({
    scrollview:{
       marginTop:2 
    },
    submain:{
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'grey'
    },
    textView:{
      flexDirection:'row',
      justifyContent:'space-around' 
    },
    text:{
      justifyContent:'center', 
      alignItems:'center',
      padding:3, 
    },
    touchChange:{
      flex:1,
      backgroundColor:'#ABABAB',
      justifyContent:'center',
      alignItems:'center'
    },
    touchText:{
      color:'#fff',
      paddingHorizontal:3 
    },
    touchCancel:{ 
      flex:1,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center'
    },
    mainTextView:{
      flex:1, 
      width:widthWindow+10 
    }
})