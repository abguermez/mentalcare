import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/signIn";
import HomeScreen from "../screens/HomeScreen";
import DoctorListsScreen from "../screens/DoctorListsScreen";
import DoctorDetailsScreen from "../screens/DoctorDetailsScreen";
import AppointmentBookingScreen from "../screens/AppointmentBookingScreen";
import { useAuth } from "../AuthContext"; // Import the useAuth hook

const Stack = createStackNavigator();

const OnboardingNavigation = () => {
  const { updateAuthentication } = useAuth(); // Access the updateAuthentication function from the AuthContext

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }} // Pass the updateAuthentication function as a parameter
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen} // Add HomeScreen to the stack
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }}
      />
      <Stack.Screen
        name="Doctor Lists"
        component={DoctorListsScreen} // Add HomeScreen to the stack
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }}
      />
      <Stack.Screen
        name="DoctorDetails"
        component={DoctorDetailsScreen} // Add HomeScreen to the stack
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }}
      />
      <Stack.Screen
        name="Appointmenet Screen"
        component={AppointmentBookingScreen} // Add HomeScreen to the stack
        options={{ headerShown: false }}
        initialParams={{ updateAuthentication }}
      />
      
    </Stack.Navigator>
  );
};

export default OnboardingNavigation;
