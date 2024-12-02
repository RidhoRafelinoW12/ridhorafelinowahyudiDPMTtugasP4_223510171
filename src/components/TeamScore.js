import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../styles/styles";

const TeamScore = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Image source={{ uri: 'URL_TO_TEAM_LOGO' }} style={styles.teamLogo} />
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TeamScore;