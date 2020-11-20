import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    const additionHandler = () => {
        setCounter(counter + 1)
    }

    const subtractionHandler = () => {
        setCounter(counter - 1)
    }
    return (
        <View style={styles.container}>
            <Button 
            title="Add" 
            onPress={() => additionHandler()}
            />
            <Text>{counter}</Text>
            <Button title="Subtract" onPress={() => subtractionHandler()}/>
        </View>
    )
}
export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})