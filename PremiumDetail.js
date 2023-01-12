import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const premiumDetailItem = ({ item }) => (
<View style={styles.premium_detail_item}>
<Text style={styles.duration}>{item.duration}</Text>
<Text style={styles.charges}>{item.charges}</Text>
<Text style={styles.save_percentage}>{item.save_percentage}</Text>
</View>
  );

const PremiumDetail = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.premium_detail}
    data={item}
    renderItem={premiumDetailItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default PremiumDetail;

const styles = StyleSheet.create({
    'duration': {
        'color': '#030303',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'charges': {
        'color': '#060505',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'save_percentage': {
        'color': '#0b0a0a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});