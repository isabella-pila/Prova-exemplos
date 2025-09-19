import React from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Platform } from 'react-native';

import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from '../../navigations/LoginStackNavigation';
import { useAuth } from '../../context/auth';

export function LoginScreen({ navigation }: LoginTypes) {
  const {setLogin} = useAuth()
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formRow}>
          <MaterialIcons name="email" style={styles.icon} />
          <TextInput
            placeholderTextColor={colors.third}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.formRow}>
          <Entypo name="key" style={styles.icon} />
          <TextInput
            placeholderTextColor={colors.third}
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            autoCapitalize="none"
          />
        </View>
        <ComponentButtonInterface title='Login' type='primary' onPress={()=> setLogin(true)} />
        <ComponentButtonInterface title='Cadastre-se' type='secondary' onPress={() => navigation.navigate("Register")} />
      </KeyboardAvoidingView>
    </View>
  );
}
