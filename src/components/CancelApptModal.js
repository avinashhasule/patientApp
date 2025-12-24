import React, {useState} from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

/**
 * CancelApptModal - Skeleton component for appointment cancellation
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source files: Modal components in appointment management flow
 * 
 * This modal handles appointment cancellation with reason input.
 */
const CancelApptModal = ({
  visible,
  onConfirm,
  onCancel,
  appointmentId,
}) => {
  const [reason, setReason] = useState('');
  
  // TODO: Add cancellation policy text
  // TODO: Add reason validation
  // TODO: Port API integration from Next.js source
  // TODO: Add loading state during cancellation

  const handleConfirm = () => {
    // TODO: Validate reason
    // TODO: Call cancellation API
    if (onConfirm) {
      onConfirm(appointmentId, reason);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Cancel Appointment</Text>
          
          <Text style={styles.warningText}>
            ⚠️ Are you sure you want to cancel this appointment?
          </Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Reason for cancellation:</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter reason (optional)"
              value={reason}
              onChangeText={setReason}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          
          <View style={styles.policyContainer}>
            <Text style={styles.policyText}>
              Cancellation Policy: Please cancel at least 24 hours before your appointment.
            </Text>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.backButton]}
              onPress={onCancel}
            >
              <Text style={styles.backButtonText}>Go Back</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.button, styles.confirmButton]}
              onPress={handleConfirm}
            >
              <Text style={styles.confirmButtonText}>Confirm Cancel</Text>
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
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  warningText: {
    fontSize: 14,
    color: '#ff9800',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#333',
    minHeight: 80,
  },
  policyContainer: {
    backgroundColor: '#fff3e0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  policyText: {
    fontSize: 12,
    color: '#f57c00',
    lineHeight: 18,
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
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#999',
  },
  backButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmButton: {
    backgroundColor: '#f44336',
  },
  confirmButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CancelApptModal;
