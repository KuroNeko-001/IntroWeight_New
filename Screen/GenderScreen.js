import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GenderScreen({ navigate }) {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>
      <Text style={styles.title}>What's your Gender?</Text>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Male' && styles.selectedButton]}
        onPress={() => setSelectedGender('Male')}
      >
        <Text style={styles.optionText}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Female' && styles.selectedButton]}
        onPress={() => setSelectedGender('Female')}
      >
        <Text style={styles.optionText}>Female</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, selectedGender === 'Unspecified' && styles.selectedButton]}
        onPress={() => setSelectedGender('Unspecified')}
      >
        <Text style={styles.optionText}>Unspecified</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigate('Age')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 40,
    backgroundColor: '#000',
  },
  backButton: {
    color: 'white',
    fontSize: 24,
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: 'gray',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    width: '33%',
    height: '100%',
    backgroundColor: 'green',
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 80,
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});