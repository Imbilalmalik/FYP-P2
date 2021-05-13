import React from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles.js';

const NewOrderPopup = ({ newOrder, onAccept, onDecline, duration, distance }) => {

  return (
    <View style={styles.main}>
      <Pressable onPress={onDecline} style={styles.cancelButton}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>

        <View style={styles.line}>
          <Text style={styles.gasUpType}>{newOrder.type}</Text>

          <View style={styles.userBackground}>
            <FontAwesome name={"user"} color={"white"} size={35} />
          </View>

          <Text style={styles.gasUpType}>
            <AntDesign name={"star"} size={18}/>
            {newOrder.user?.rating}
          </Text>
        </View>

        <Text style={styles.time}>{duration} min</Text>
        <Text style={styles.distance}>{distance} mi</Text>

      </Pressable>
    </View>
  );
};

export default NewOrderPopup;