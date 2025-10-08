import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Props = { text: string };
export function TodoItem () {
    const [done, setDone ] = useState (false)
        
    const Validationdetache = () => {
         setDone(done => !done)
    };
        return (

            <View style={styles.item} > 
                <Text style={styles.Text}> Valide la tâche {done} ou non</Text>
                <Button title="" onPress={Validationdetache}/>
                <Text style={styles.itemText}>Faire les courses</Text>
            </View>
                // <>
                //</>
        )
}
  
 const styles = StyleSheet.create({
     item: {
        flex: 1,
        padding: 12,
        backgroundColor: "#fff",
        borderBottomEndRadius: 8,
        alignItems: "center",
        gap: 12,

     },
     Text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
     },
     itemText:{
        padding: 20,
        flex: 1,

     }

});
