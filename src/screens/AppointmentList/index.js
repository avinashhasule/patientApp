import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

/**
 * AppointmentListScreen - Skeleton screen for patient appointments list
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source file: app/patient/appointment/page.js
 * 
 * This screen displays a list of patient appointments with filtering
 * options (upcoming, past, cancelled) and allows navigation to appointment details.
 */
const AppointmentListScreen = () => {
  // TODO: Fetch appointments from API
  // TODO: Add filtering by status (upcoming, past, cancelled)
  // TODO: Add pull-to-refresh functionality
  // TODO: Port appointment data structure from Next.js source
  
  const mockAppointments = [
    {id: '1', doctor: 'Dr. Smith', date: '2024-01-15', time: '10:00 AM', status: 'upcoming'},
    {id: '2', doctor: 'Dr. Johnson', date: '2024-01-10', time: '2:00 PM', status: 'completed'},
  ];

  const renderAppointmentItem = ({item}) => (
    <View style={styles.appointmentCard}>
      {/* TODO: Replace with DoctorCard component */}
      <Text style={styles.doctorName}>{item.doctor}</Text>
      <Text style={styles.appointmentDate}>{item.date} at {item.time}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Appointments</Text>
      </View>
      
      {/* TODO: Add filter tabs (All, Upcoming, Past, Cancelled) */}
      
      <FlatList
        data={mockAppointments}
        renderItem={renderAppointmentItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No appointments found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    padding: 15,
  },
  appointmentCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  appointmentDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  status: {
    fontSize: 14,
    color: '#4caf50',
    textTransform: 'capitalize',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default AppointmentListScreen;
