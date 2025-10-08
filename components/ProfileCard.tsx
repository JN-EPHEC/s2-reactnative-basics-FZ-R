import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Define the props interface for type safety
interface ProfileCardProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

// The component receives 'props' as an argument.
// We use destructuring to get the values we need directly.
const ProfileCard: React.FC<ProfileCardProps> = ({name, jobTitle,imageUrl,}) => {
  return (
    <View style={styles.card}>
     <Image style={styles.image} source={{uri:imageUrl}}/>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{jobTitle}</Text> 
      </View> 
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#b5d1e9e4",
    borderRadius: 16,
    padding: 10,
    margin: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#811d1dff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
   
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight : 10,
    borderWidth: 1,
    borderColor : "black",
  },
  textContainer: {
    marginLeft: 26,
    
  },
  name: {
    fontSize: 30,
    fontWeight: 700,
    
  },
  jobTitle: {
    fontSize: 16,
    color: "bleu",
    marginLeft: 'auto',

  },
});

export default ProfileCard;
