import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const DoctorListsScreen = () => {
  const [searchText, setSearchText] = useState(""); // State for the search input
  

  const doctorsData = [
    {
      id: "1",
      name: "Dr. Aïcha Benchekroun",
      categories: ["Psychologist"], // Adjust specialty as needed (e.g., Child Psychologist, Clinical Psychologist)
      location: "Rabat",
      experience: "15 years",
      education: "PhD, Psychology",
      languages: ["French", "Arabic", "English"], // Adjust languages as needed
      bio: "Dr. Aïcha Benchekroun is a psychologist with extensive experience helping patients with a variety of mental health concerns. She provides a supportive and confidential environment for therapy.",
      rating: 4.9,
      reviews: 200,
      photo: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    {
      id: "2",
      name: "Dr. Omar El Alaoui",
      categories: ["Psychotherapist"], // Adjust specialty as needed
      location: "Salé",
      experience: "10 years",
      education: "MD, Psychiatry",
      languages: ["Arabic", "French"],
      bio: "Dr. Omar El Alaoui is a psychotherapist specializing in helping individuals and couples navigate emotional challenges. He utilizes various therapeutic approaches to meet each patient's unique needs.",
      rating: 4.8,
      reviews: 180,
      photo: "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    },
    {
      id: "3",
      name: "Dr. Layla Bahi",
      categories: ["Clinical Psychologist"], // Adjust specialty as needed
      location: "Rabat",
      experience: "8 years",
      education: "PhD, Clinical Psychology",
      languages: ["Arabic", "English"],
      bio: "Dr. Layla Bahi is a clinical psychologist specializing in the assessment, diagnosis, and treatment of mental health disorders. She utilizes evidence-based practices to help patients achieve their goals.",
      rating: 4.7,
      reviews: 150,
      photo: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg", 
    },
    {
      id: "4",
      name: "Dr. Youssef Bennani",
      categories: ["Counseling Psychologist"], // Adjust specialty as needed
      location: "Casablanca",
      experience: "12 years",
      education: "PhD, Counseling Psychology",
      languages: ["French", "Arabic"],
      bio: "Dr. Youssef Bennani is a counseling psychologist who provides individual and group therapy to help patients improve their well-being. He focuses on developing coping skills and promoting positive change.",
      rating: 4.9,
      reviews: 190,
      photo: "https://cdn.pixabay.com/photo/2015/05/26/09/05/doctor-784329_1280.png", 
    },
    {
      id: "5",
      name: "Dr. Sofia El Malki",
      categories: ["Neuropsychologist"], // Adjust specialty as needed
      location: "Marrakech",
      experience: "14 years",
      education: "PhD, Neuropsychology",
      languages: ["English", "French"],
      bio: "Dr. Sofia El Malki is a neuropsychologist who assesses and treats cognitive and behavioral changes caused by brain injury or neurological disorders. She utilizes evidence-based interventions to help patients improve their cognitive functioning.",
      rating: 4.8,
      reviews: 170,
      photo: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg", 
    },
    
    // Add more doctor data as needed
  ];

  // Generate categories from the unique categories found in doctorsData
  const categories = Array.from(
    new Set(doctorsData.flatMap((doctor) => doctor.categories))
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Search Input with Search Icon */}
        <View style={styles.searchInputContainer}>
          <Feather
            name="search"
            size={20}
            color="#00b894"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Doctors"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>

        {/* Category Menu (Horizontal Scroll) */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryMenu}
        >
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.title}>All Doctors</Text>
        <ScrollView
          contentContainerStyle={styles.doctorList}
          showsVerticalScrollIndicator={false}
        >
          {doctorsData.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DoctorListsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  doctorList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchIcon: {
    paddingLeft: 10,
    paddingRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  categoryMenu: {
    marginTop: 10,
    height: 60, // Increase the height of the category menu
  },
  categoryButton: {
    backgroundColor: "#9029C0",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    height: 40, // Increase the height of the category buttons
  },
  categoryButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
