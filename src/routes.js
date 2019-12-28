import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

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
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        // Configuração de rota padrão
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
