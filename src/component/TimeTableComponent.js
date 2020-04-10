import * as React from 'react'
import {View,
        Text,
        StyleSheet,
        TouchableOpacity,
        ScrollView,
        } from 'react-native'



export const TimeTableComponent = ({data}) => {
    return(

            <ScrollView
                style={styles.scrollview}
                horizontal={true}

            >
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.touchChange}>
                        <Text>Изменить</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row', flex:1}}>
                            <View style={styles.viewText}>
                                <Text>Отплытие</Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text>Причал</Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text>Паром</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.viewText}>
                                <Text>{data.date1}</Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text>{data.dock1}</Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text>{data.parom}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.touchCancel}>
                        <Text>Отменить</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}

const styles=StyleSheet.create({
    main:{
        flex:1,
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#E6E6E6'
    },
    scrollview:{
        width:'60%',
        flex:1,
        backgroundColor:'skyblue'
    },
    viewText:{
        flex:1,
        width:'30%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    touchChange:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ABABAB'
    },
    touchCancel:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    }
})