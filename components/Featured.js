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

const Featured = () => {
  // Sample data for the card slider
  const featureData = [
    {
      id: "1",
      image: "https://www.chu-bordeaux.fr/media/image/199/hypnosemeditation-1568646979.jpg", // Replace with an image of meditation
      title: "Mindfulness Techniques",
      description: "Learn relaxation and stress management skills.",
      icon: "yoga", // Font Awesome icon for yoga
      color: "lightgreen",
    },
    {
      id: "2",
      image: "https://www.brainandlife.org/siteassets/current-issue/20-febmarch/cbt-main.jpg", // Replace with an image of therapy session
      title: "Therapy Sessions",
      description: "Connect with a licensed therapist for personalized care.",
      icon: "brain", // Font Awesome icon for brain
      color: "purple",
    },
    {
      id: "3",
      image: "https://www.chmouscron.be/sites/default/files/styles/banner_page/public/2021-12/Chambre%20HJC%20%2833%29.JPG?h=7685ba0d&itok=tH1lldXb", // Replace with an image of a journal
      title: "Journaling Prompts",
      description: "Express yourself and track your mood with guided prompts.",
      icon: "edit", // Font Awesome icon for edit (pencil)
      color: "orange",
    },
    {
      id: "4",
      image: "https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/08/GettyImages-dv2181056-1024x681.jpg", // Replace with an image of someone sleeping
      title: "Sleep Improvement Resources",
      description: "Develop healthy sleep habits and overcome insomnia.",
      icon: "moon", // Font Awesome icon for moon
      color: "blue",
    },
    {
      id: "5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6WgMp9uyJCSITUkX3_4beuj8jusVY_HK4g&s", // Replace with an image of a support group
      title: "Support Groups",
      description: "Connect with others who share similar experiences.",
      icon: "users", // Font Awesome icon for users
      color: "teal",
    },
    // Add more features as needed
  ];

  // Render individual card item
  const renderCardItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardTextField}>
        <View style={styles.cardTextFields}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSpecialty}>{item.description}</Text>
        </View>
        <View style={styles.cardButton}>
          <TouchableOpacity style={styles.iconContainer}>
            <FontAwesome5
              name={item.icon}
              size={22}
              color={item.color}
              style={styles.iconStyle}
            />
            {/* Display the specified icon and color for each card */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.cardSlider}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featureData.map((item) => renderCardItem({ item }))}
      </ScrollView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  cardSlider: {
    marginTop: 10,
  },
  card: {
    width: 300,
    marginRight: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  cardTextField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconStyle: {
    padding: 12,
    borderRadius: 30,
    backgroundColor: "#fff",
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardSpecialty: {
    fontSize: 14,
    color: "#666",
  },
  cardButton: {
    alignItems: "center",
  },
});
