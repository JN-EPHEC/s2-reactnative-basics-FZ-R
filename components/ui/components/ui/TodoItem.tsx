import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function TodoItem () {
    const [done, setDone ] = useState (false);
        
    const Validationdetache = () => {
         setDone(!done);
    };
        return (

            <View style={styles.item} >
                <Text style={styles.Validationdetache}> Valide la tâche {Validationdetache} ou non</Text>
                <Button onPress={TodoItem}> </Button>
                <Text>Faire les courses</Text>
                <>
                 

</>
            </View> 
        );

};
  
 const styles = StyleSheet.create ({
     item: {
        flex: 1,

     }

});
