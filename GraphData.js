import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const graphDataItem = ({ item }) => (
<View style={styles.graph_data_item}>
<Text style={styles.graph_title}>{item.graph_title}</Text>
<Text style={styles.about_graph}>{item.about_graph}</Text>
<Image
    style={styles.graph}
    source={{uri: item.graph}}
    />
</View>
  );

const GraphData = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.graph_data}
    data={item}
    renderItem={graphDataItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default GraphData;

const styles = StyleSheet.create({
graph_title: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
about_graph: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
graph: {
    width: '100vw',
    height: '100vw',
    marginTop: 5
  }
});