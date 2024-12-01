import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { useFonts } from 'expo-font';

const Screening = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const [rejectMessageVisible, setRejectMessageVisible] = useState(false); // State for rejection message visibility
  const [acceptMessageVisible, setAcceptMessageVisible] = useState(false); // State for acceptance message visibility
  const [fontsLoaded] = useFonts({
    'Lilita': require('../../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleBackPress = () => {
    onClose(); // Close the modal when the back button is pressed
    navigation.navigate('Notification'); // Navigate to Notification screen
  };

  const handleAccept = () => {
    setAcceptMessageVisible(true); // Show the acceptance message modal
    setRejectMessageVisible(false); // Hide rejection message
  };

  const handleReject = () => {
    setRejectMessageVisible(true); // Show the rejection message modal
    setAcceptMessageVisible(false); // Hide acceptance message
  };

  const handleCloseMessage = () => {
    setAcceptMessageVisible(false);
    setRejectMessageVisible(false);
    onClose(); // Close the modal when finished
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} // Ensure onClose is called when the modal is closed
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackPress}
          >
            <Text style={[styles.backButtonText, { fontFamily: 'Lilita' }]}>←</Text>
          </TouchableOpacity>

          <Image
            style={styles.profileImage}
            source={require('../../assets/Profile/dp.png')}
          />

          <Text style={[styles.name, { fontFamily: 'Lilita' }]}>Mary Jane</Text>
          <Text style={[styles.status, { fontFamily: 'Lilita' }]} >
            <Text style={styles.active}>Active</Text> ● Devoted Pet Owner
          </Text>

          <View style={styles.detailsContainer}>
            <Text style={[styles.detailItem, { fontFamily: 'Lilita' }]}>📧 maryjane@gmail.com</Text>
            <Text style={[styles.detailItem, { fontFamily: 'Lilita' }]}>📞 0984 174 2482</Text>
            <Text style={[styles.detailItem, { fontFamily: 'Lilita' }]} >
              📍 123 ABC Street, Barangay Carmen, Cagayan de Oro City, Misamis Oriental, 9000, Philippines
            </Text>
            <Text style={[styles.detailItem, { fontFamily: 'Lilita' }]}>🏠 House</Text>
            <Text style={[styles.detailItem, { fontFamily: 'Lilita' }]}>🐾 Has a pet</Text>
          </View>

          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
              <Text style={[styles.acceptText, { fontFamily: 'Lilita' }]}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
              <Text style={[styles.rejectText, { fontFamily: 'Lilita' }]}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Full-Screen Message Modal (Accept/Reject) */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={acceptMessageVisible || rejectMessageVisible}
        onRequestClose={handleCloseMessage} // Ensure onClose is called to close the message modal
      >
        <View style={styles.fullScreenOverlay}>
          <View style={styles.fullScreenMessageContainer}>
            {acceptMessageVisible ? (
              <>
                <Text style={[styles.header, { fontFamily: 'Lilita' }]}>
                  You accepted Mary Jane as Shiro's fur parent.
                </Text>
                <Text style={[styles.subText, { fontFamily: 'Lilita' }]}>
                  Shiro is one step closer to a loving home. Get ready to finalize the adoption process!
                </Text>
                <Text style={[styles.notificationText, { fontFamily: 'Lilita' }]}>
                  The adopter has been notified of your decision. You can proceed to the next steps.
                </Text>
              </>
            ) : (
              <>
                <Text style={[styles.header, { fontFamily: 'Lilita' }]}>
                  You rejected Mary Jane as Shiro's fur parent.
                </Text>
                <Text style={[styles.subText, { fontFamily: 'Lilita' }]}>
                  We understand your decision. Shiro's future fur parent is still out there!
                </Text>
                <Text style={[styles.notificationText, { fontFamily: 'Lilita' }]}>
                  The adopter has been informed about your decision. Thank you for taking the time to review their request.
                </Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseMessage} // Close the message modal
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30, // Increased padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 15, // Increased margin
  },
  backButtonText: {
    fontSize: 28, // Larger back button
    color: '#333',
  },
  profileImage: {
    width: 140, // Increased image size
    height: 140,
    borderRadius: 70,
    marginBottom: 20, // Increased margin
  },
  name: {
    fontSize: 24, // Larger text for name
    fontWeight: 'bold',
    marginBottom: 10, // Increased margin
  },
  status: {
    fontSize: 16, // Larger text for status
    color: '#666',
    marginBottom: 20, // Increased margin
  },
  active: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  detailsContainer: {
    alignSelf: 'flex-start',
    marginVertical: 25, // Increased vertical margin
  },
  detailItem: {
    fontSize: 16, // Larger text for details
    marginVertical: 8, // Increased vertical margin
    color: '#333',
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 25, // Increased top margin
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 20, // Increased padding
    borderRadius: 12,
    marginRight: 15, // Increased margin
    alignItems: 'center',
  },
  acceptText: {
    color: '#fff',
    fontSize: 18, // Larger text for button
    fontWeight: 'bold',
  },
  rejectButton: {
    flex: 1,
    backgroundColor: '#F44336',
    padding: 20, // Increased padding
    borderRadius: 12,
    marginLeft: 15, // Increased margin
    alignItems: 'center',
  },
  rejectText: {
    color: '#fff',
    fontSize: 18, // Larger text for button
    fontWeight: 'bold',
  },

  // Full-Screen Message Modal Styles
  fullScreenOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenMessageContainer: {
    width: '95%', // Increased width
    backgroundColor: '#68C2FF',
    borderRadius: 20,
    padding: 40, // Increased padding
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    fontSize: 28, // Larger header text
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30, // Increased margin
  },
  subText: {
    fontSize: 20, // Larger subtext
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30, // Increased margin
  },
  notificationText: {
    fontSize: 18, // Larger notification text
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30, // Increased margin
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18, // Larger close button text
    fontWeight: 'bold',
  },
});

export default Screening;
