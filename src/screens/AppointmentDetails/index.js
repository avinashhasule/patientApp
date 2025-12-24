import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

/**
 * AppointmentDetailsScreen - Skeleton screen for appointment details
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source file: app/patient/details/page.js
 * 
 * This screen displays detailed information about a specific appointment
 * including doctor info, time, location, and actions (cancel, reschedule).
 */
const AppointmentDetailsScreen = ({route}) => {
  // TODO: Get appointment ID from route params
  // TODO: Fetch appointment details from API
  // TODO: Add cancel appointment functionality
  // TODO: Add reschedule functionality
  // TODO: Port appointment detail structure from Next.js source
  
  const appointmentId = route?.params?.appointmentId || 'N/A';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Appointment Details</Text>
        
        {/* TODO: Add doctor information card */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Doctor Information</Text>
          <View style={styles.card}>
            <Text style={styles.placeholderText}>Doctor name and details</Text>
          </View>
        </View>
        
        {/* TODO: Add appointment date and time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Date & Time</Text>
          <View style={styles.card}>
            <Text style={styles.placeholderText}>Appointment date and time</Text>
          </View>
        </View>
        
        {/* TODO: Add location/clinic information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.card}>
            <Text style={styles.placeholderText}>Clinic address and contact</Text>
          </View>
        </View>
        
        {/* TODO: Add patient notes or special instructions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <View style={styles.card}>
            <Text style={styles.placeholderText}>Patient notes or instructions</Text>
          </View>
        </View>
        
        {/* TODO: Add action buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]}>
            <Text style={styles.buttonText}>Cancel Appointment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.rescheduleButton]}>
            <Text style={styles.buttonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
  },
  actionButtons: {
    marginTop: 20,
    gap: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  rescheduleButton: {
    backgroundColor: '#2196f3',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AppointmentDetailsScreen;
