import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Screening'); // Navigate to the Screening.js page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <TouchableOpacity style={styles.notificationContainer} onPress={handlePress}>
        {/* Profile Icon */}
        <Image
          style={styles.profileImage}
          source={require('../../assets/Profile/dp.png')} // Local profile image
        />
        <View style={styles.textContainer}>
          <Text style={styles.message}>
            Someone wants to adopt <Text style={styles.highlight}>Shiro</Text>.
          </Text>
          <Text style={styles.time}>Just now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  highlight: {
    color: '#68C2FF',
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
});

export default Notification;
