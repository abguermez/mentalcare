import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { useNavigation, useRoute } from "@react-navigation/native";

const generateRandomTimes = () => {
  const times = [];
  for (let i = 0; i < 6; i++) {
    const hour = Math.floor(Math.random() * 8) + 8; // Random hour between 8 and 15
    const minute = Math.random() < 0.5 ? '00' : '30'; // Either '00' or '30'
    const nextHour = hour + 1;
    times.push(`${hour}:${minute} to ${nextHour}:${minute}`);
  }
  return times;
};

const AppointmentBookingScreen = () => {
  const route = useRoute();
  const { doctor, patientName } = route.params ?? {};
  const navigation = useNavigation();
  
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    setAvailableTimes(generateRandomTimes());
  }, []);

  const handlePayNow = async () => {
    if (selectedTime) {
      try {
        await axios.post('http://10.99.10.187:8000/api/appointments/book-appointment', {
          doctorName: doctor.name,
          patientName: patientName,
          time: selectedTime,
        });
        
      } catch (error) {
        console.error(error);
        alert("Failed to book appointment.");
      }
    } else {
      alert("Please select a time slot before proceeding to payment.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.header}>Book Appointment with {doctor.name}</Text>
        <FlatList
          data={availableTimes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.timeSlot,
                item === selectedTime && styles.selectedTimeSlot,
              ]}
              onPress={() => setSelectedTime(item)}
            >
              <Text style={styles.timeText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.payNowButton} onPress={handlePayNow}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timeSlot: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    alignItems: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: "#9029C0",
  },
  timeText: {
    fontSize: 18,
  },
  payNowButton: {
    backgroundColor: "#9029C0",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  payNowText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default AppointmentBookingScreen;
