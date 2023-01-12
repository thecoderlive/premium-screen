import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import GraphData from './GraphData'
import PremiumDetail from './PremiumDetail'

const Premium = () => (
<ScrollView style={styles.premium} showsVerticalScrollIndicator={false}>
<GraphData item={item.graph_data}/>
<PremiumDetail item={item.premium_detail}/>
<Text style={styles.about_premium}>{item.about_premium}</Text>
</ScrollView>
)

export default Premium;

const styles = StyleSheet.create({
    'about_premium': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});