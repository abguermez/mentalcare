import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "react-native-vector-icons";

const ServicesList = () => {
  // Sample data for Our Services
  const servicesData = [
    {
      id: "1",
      title: "Therapy & Counseling",
      description: "Individual, couples, and family therapy",
      icon: "user-friends", 
      color: "#9370DB", // Medium Purple
    },
    {
      id: "2",
      title: "Psychological Assessment",
      description: "Cognitive and personality testing",
      icon: "clipboard-list",
      color: "#4169E1", // Royal Blue
    },
    {
      id: "3",
      title: "Stress Management",
      description: "Coping strategies and relaxation techniques",
      icon: "leaf",
      color: "#2E8B57", // Sea Green
    },
    {
      id: "4",
      title: "Child & Adolescent Therapy",
      description: "Support for children and teens",
      icon: "child",
      color: "#FFB6C1", // Light Pink
    },
    {
      id: "5",
      title: "Addiction Counseling",
      description: "Help with substance abuse issues",
      icon: "hand-holding-heart",
      color: "#FFA500", // Orange
    },
    {
      id: "6",
      title: "Neuropsychological Assessment",
      description: "Evaluation of cognitive function",
      icon: "brain",
      color: "#87CEEB", // Sky Blue
    },
    {
      id: "7",
      title: "Group Therapy",
      description: "Connect with others in a safe space",
      icon: "users",
      color: "#F08080", // Light Coral
    },
  ];

  // Render individual service item
  const renderServiceItem = (service) => (
    <View style={styles.serviceBox}>
      <FontAwesome5
        name={service.icon}
        size={30}
        color={service.color}
        style={styles.serviceIcon}
      />
      <Text style={styles.serviceTitle}>{service.title}</Text>
      <Text style={styles.serviceDescription}>{service.description}</Text>
    </View>
  );
  return (
    <View style={styles.servicesContainer}>
      <Text style={styles.servicesTitle}>Our Services</Text>
      <View style={styles.servicesList}>
        {servicesData.map((service) => renderServiceItem(service))}
      </View>
    </View>
  );
};

export default ServicesList;

const styles = StyleSheet.create({

    servicesContainer: {
        paddingHorizontal: 10,
        marginTop: 20,
      },
      servicesTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
      },
      servicesList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      },
      serviceBox: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        elevation: 3,
      },
      serviceIcon: {
        padding: 12,
        borderRadius: 30,
        backgroundColor: "#fff",
        elevation: 5,
      },
    
      serviceTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10, // Add this line
      },
      serviceDescription: {
        fontSize: 14,
        color: "#666",
      },
});
