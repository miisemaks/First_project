import * as React from 'react'
import {View,
        StyleSheet,
        Text,
        TouchableOpacity,
        FlatList} from 'react-native'

import {TimeTableComponent} from '../../component/TimeTableComponent'
import {data} from '../../data/data'

export const TimeTable = () => {
    const [isPressed, setIsPressed] = React.useState(null)

    const pressed = () => {
        return(
            <View>
                <View style={{flexDirection:'row', justifyContent:'center', width:'100%'}}>
                    <TouchableOpacity style={styles.touch} onPress={() => {setIsPressed('')}}>
                        <Text style={styles.text}>Из Якутска</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch2} onPress={() => {setIsPressed(null)}}>
                        <Text style={styles.text2}>Из Нижнего Бестяха</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={({ item }) => <TimeTableComponent data={item} />}
                    keyExtractor={item => item.id}
                  />
            </View>
        )
    }
    const nonpressed = () => {
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', justifyContent:'center', width:'100%'}}>
                    <TouchableOpacity style={styles.touch2} onPress={() => setIsPressed('')}>
                        <Text style={styles.text2}>Из Якутска</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touch} onPress={() => setIsPressed(null)}>
                        <Text style={styles.text}>Из Нижнего Бестяха</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={({ item }) => <TimeTableComponent  data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }

    return(
        isPressed===''?pressed():nonpressed()
    )


}

const styles=StyleSheet.create({
    main:{
        alignItems:'center'
    },
    touch:{
        marginTop:5,
        marginBottom:35,
        borderColor:'#479ED8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:5,
        width:'46%',
        alignItems:'center',
        backgroundColor:'#479ED8'
    },
    touch2:{
            marginTop:5,
            marginBottom:35,
            borderColor:'#479ED8',
            borderWidth:1,
            borderRadius:5,
            paddingHorizontal:5,
            width:'46%',
            alignItems:'center',
            backgroundColor:'#fff'
    },
    text:{
        fontSize:17,
        color:'#fff'
    },
    text2:{
        fontSize:17,
        color:'#479ED8'
    },
    flatlist:{
        flex:1,
        width:'100%'
    }

})