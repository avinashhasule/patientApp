import React from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * ConfirmSubmitModal - Skeleton component for appointment booking confirmation
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source files: Modal components in appointment booking flow
 * 
 * This modal confirms appointment booking details before final submission.
 */
const ConfirmSubmitModal = ({
  visible,
  onConfirm,
  onCancel,
  appointmentDetails,
}) => {
  // TODO: Display appointment details (doctor, date, time)
  // TODO: Add booking terms and conditions
  // TODO: Port modal styling from Next.js source
  // TODO: Add loading state during submission

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Confirm Appointment</Text>
          
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsTitle}>Appointment Details:</Text>
            {/* TODO: Display actual appointment details */}
            <Text style={styles.detailsText}>
              Doctor: {appointmentDetails?.doctor || 'N/A'}
            </Text>
            <Text style={styles.detailsText}>
              Date: {appointmentDetails?.date || 'N/A'}
            </Text>
            <Text style={styles.detailsText}>
              Time: {appointmentDetails?.time || 'N/A'}
            </Text>
          </View>
          
          <Text style={styles.confirmationText}>
            Are you sure you want to book this appointment?
          </Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
  modalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  detailsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  confirmationText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#999',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ConfirmSubmitModal;
