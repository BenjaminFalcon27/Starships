import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import LoginScreen from './src/screens/LoginScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}> 
      <SafeAreaProvider>
        <StarshipFeedScreen />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;