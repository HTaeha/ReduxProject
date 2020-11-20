import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { addition, subtraction } from './store/actions'

const Counter = () => {
    const data = useSelector(state => state)
    const { counter, name } = data
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <Button
                title="Add"
                onPress={() => dispatch(addition())}
            />
            <Text>{counter}</Text>
            <Text>{name}</Text>
            <Button title="Subtract" onPress={() => dispatch(subtraction())} />
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