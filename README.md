<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/josuegimenes/rocketseat-bootcamp-gostack-gobarber-web-module09?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

# Módulo 10: Aplicação Mobile – GoBarber

Frontend Client GoBarber - Sistema de barbearia para agendamento de serviços.

## Passo a passo das instalações de todas as bibliotecas e plugins:

### 1º Passo: Instalação Global – Instale apenas uma vez no pc.

Esse pacote instala as estruturas básicas e iniciais para React Native.

Nesse pacote não será instalado expo devido suas limitações - O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo.

```
yarn global add react-native-cli
```

### 2º Passo: Criar projeto.

```
npx create-react-app init my-app
```

ou

```
yarn create-app my-app
```

### 3º Passo: Criar Bundle do Projeto no emulador.

Foi usado emulador nativo do Android Studio. Abra o emulador nativo desejado e execute o comando para a criação e instalação do app no emulador.

Use esse comando na raiz do projeto para a construção do bundle no emulador. Execute esse comando no início do projeto ou todas as vezes que tiver feito uma grande atualização no app e queira gerar o bundle novamente do zero.

```
react-native run-android
```

Caso contrário, uma vez criado o bundle e quiser apenas executá-lo no emulador, execute esse comando para iniciá-lo.

```
react-native start
```

### 4º Passo: Configurar EditorConfig

Crie o arquivo **.editorconfig** pelo menu de contexto do vscode.

```js
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### 5º Passo: Instalar e Configurar Eslint em ambiente de dev.

Usado para informar erros no código

```
yarn add eslint -D
```

#### Iniciar Configurações:

```
yarn add eslint –init
```

```
	To check syntax, find problems, and enforce code style
	JavaScript modules (import/export)
	React
	Does your project use TypeScript? (y/N) N
	( ) Browser ou ( ) Node – Desmarque ambos (utilize o espaço do teclado)
	Use a popular style guide
	Airbnb (https://github.com/airbnb/javascript)
	JavaScript
	Would you like to install them now with npm? (Y/n) Y
```

#### Configurações Finais:

Excluir arquivo **package-lock.json**.

### 6º Passo: Executar yarn.

O Eslint foi instalado com `npm`, então, rode `yarn` na raiz do projeto para resolver e atualizar as dependências.

```
yarn
```

### 7º Passo: Instalar e Configurar Eslint/Prettier em Ambiente Dev.

Prettier é usado para formatar e deixar visualmente melhor o código. E todas as bibliotecas abaixo são para que todos se comuniquem e sejam relacionados, até mesmo o babel-eslint que integra a versão mais atualizada do JavaScript.

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

### 8º Passo: Configuração Eslint.

Usar a mesma configuração do App Web.

```js
module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
};

// eslint-disable-line :: para desabilitar o eslint em uma linha
// eslint-disable-next-line prefer-object-spread // desabilitar linha seguinte
```

### 9º Passo: Instalar Root Import em ambiente dev.

Usado para simplificar os caminhos das importações dos arquivos no app.

```
yarn add babel-plugin-root-import eslint-import-resolver-babel-plugin-root-import -D
```

Inserir essas configurações após as rules do `.eslintrc.js`:

```js
settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
```

Para o vscode encontrar o arquivo, crie o arquivo `jsconfig.json` na raiz do projeto:

```js
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"],
    }
  }
}
```

Para usar esse recurso, a importação é aplicada assim:

```js
import AuthLayout from '~/pages/_layouts/auth';
```

### 10º Passo: Instalar React Navigation.

Biblioteca para roteamento e navegação para aplicativos React Native.

```
yarn add react-navigation
```

Instalando dependências:

```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens@^1.0.0-alpha.23
```

Para finalizar a instalação do `react-native-screens` para Android, adicione as duas linhas a seguir na seção dependências em `android/app/build.gradle`:

```js
implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
```

Para finalizar a instalação do `react-native-gesture-handler` para Android, faça as seguintes modificações no `MainActivity.java`:

**import com.facebook.react.ReactActivity;**
```js
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
```

Depois execute no terminal:

```
react-native run-android
```

Documentação: https://reactnavigation.org/docs/en/getting-started.html


### 11º Passo: Instalar React Native Linear Gradiente.

Componente para aplicar gradiente em React Native.

```
yarn add react-native-linear-gradient
```

**Configurações manuais:**

`android/app/build.gradle:`

```js
implementation project(':react-native-linear-gradient')
```
implementation fileTree(dir: "libs", include: ["*.jar"])
implementation "com.facebook.react:react-native:+"  // From node_modules


`android/app/src/main/java/com/gobarbermobile/MainApplication.java:`

import com.facebook.react.ReactApplication;
```js
import com.BV.LinearGradient.LinearGradientPackage;
```
import com.facebook.react.ReactNativeHost;

`android/settings.gradle:`

rootProject.name = 'modulo10'
```js
include ':react-native-linear-gradient'
project(':react-native-linear-gradient').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-linear-gradient/android')
```
apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
include ':app'

`ios/Podfile:`

pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'
```js
pod 'BVLinearGradient', :path => '../node_modules/react-native-linear-gradient'
```

### 12º Passo: Instalar Styled Components.

```
yarn add styled-components
```

### 13º Passo: Instalar PropTypes.

```
yarn add prop-types
```

### 14º Passo: Instalar React Native Vector Icons.

```
yarn add react-native-vector-icons
```

### 15º Passo: Instalar Bibliotecas para usar Reactotron.

```
yarn add reactotron-react-native reactotron-redux reactotron-redux-saga redux redux-saga react-redux
```

### 16º Passo: Instalar Redux Perist e Immer.

```
yarn add redux-persist immer
```

### 17º Passo: Instalar a lib Async Storage.

```
yarn add @react-native-community/async-storage
```

### 18º Passo: Instalar Axios.

```
yarn add axios
```

### 19º Passo: Instalar React Navigation Tabs.

```
yarn add react-navigation-tabs
```
