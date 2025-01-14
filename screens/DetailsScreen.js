import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Speech from 'expo-speech';

const DetailScreen = () => {
  const route = useRoute();
  const { Option } = route.params;

  const [tell, setTell] = useState(null)

   const speech =(words, id)=>{
       Speech.speak(words,{
         rate:1,
         onStart:(()=>setTell(id)),
         onDone:(()=>setTell(null))
       })
     }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailBox}>
          <View style={styles.row}>
            <AntDesign
              onPress={() => speech(`மு.வரதராசனார் விளக்கம். ${Option.mv}`, Option.mv)}
              name="caretright"
              size={24}
              color="purple"
              style={styles.icon}
            />
            <Text style={styles.label}>மு.வரதராசனார் </Text>
            {tell === Option.mv ? <ActivityIndicator color='green' size={25} /> : null}
          </View>
          <Text style={styles.detailText}>{Option.mv}</Text>
        </View>
        <View style={styles.detailBox}>
          <View style={styles.row}>
            <AntDesign
              onPress={() => speech(`சாலமன் பாப்பையா விளக்கம். ${Option.sp}`, Option.sp)}
              name="caretright"
              size={24}
              color="purple"
              style={styles.icon}
            />
            <Text style={styles.label}>சாலமன் பாப்பையா </Text>
            {tell === Option.sp ? <ActivityIndicator color='green' size={25} /> : null}
          </View>
          <Text style={styles.detailText}>{Option.sp}</Text>
        </View>
        <View style={styles.detailBox}>
          <View style={styles.row}>
            <AntDesign
              onPress={() => speech(`மு.கருணாநிதி விளக்கம். ${Option.mk}`, Option.mk)}
              name="caretright"
              size={24}
              color="purple"
              style={styles.icon}
            />
            <Text style={styles.label}>மு.கருணாநிதி </Text>
            {tell === Option.mk ? <ActivityIndicator color='green' size={25} /> : null}
          </View>
          <Text style={styles.detailText}>{Option.mk}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  detailBox: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor:'#aaa',
    paddingBottom: 10
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 26,
    textAlign: 'justify',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#007BFF',
    flex:1,
  },
});
