import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const DetailScreen = () => {
  const route = useRoute();
  const { Option } = route.params;

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.detailBox}>
                <Text style={styles.label}>மு.வரதராசனார் விளக்கம் </Text>
                <Text style={styles.detailText}>{Option.mv}</Text>
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.label}>சாலமன் பாப்பையா விளக்கம் </Text>
                <Text style={styles.detailText}> {Option.sp}</Text>
            </View>
            <View style={styles.detailBox}>
                <Text style={styles.label}>மு.கருணாநிதி விளக்கம் </Text>
                <Text style={styles.detailText}> {Option.mk}</Text>
            </View>
        </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  detailBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center'
  },
  label :{
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: 16
  },
});
