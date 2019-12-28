import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Aplica um navigator dentro de outro.
// Exporta uma função que retorna o componente acessando a rota por condição.
export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        // Rotas para autenticação de cadastro
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        // Rotas para usuário logado
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          },
        ),
      },
      {
        // Configuração de rota padrão
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
