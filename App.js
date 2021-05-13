import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Amplify, {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getProviderId } from './src/graphql/queries';
import { createProvider } from './src/graphql/mutations';


Amplify.configure(config);

function App (props)  {

  useEffect(() => {
    const updateUserProvider = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!authenticatedUser) {
        return;
      }

      // Check if the user has already a service
      const providerData = await API.graphql(
        graphqlOperation(
          getProviderId,
          { id: authenticatedUser.attributes.sub }
        )
      )

      if (!!providerData.data.getProvider) {
        console.log("User already has a service assigned");
        return;
      }

      // If not, create a new service for the user
      const newProvider = {
        id: authenticatedUser.attributes.sub,
        type: 'fuel',
        userId: authenticatedUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(
        createProvider, { input: newProvider }
      ))
    };

    updateUserProvider();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);