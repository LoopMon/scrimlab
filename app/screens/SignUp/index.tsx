import { useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// Estilos
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  signin: undefined
};

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signin"
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

// Images
const ScrimLab = require('@/assets/images/scrimlab.png');
const LeftArrow = require('@/assets/images/left-arrow.png');


function SignUp({ navigation }: Props) {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');


  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("signin")
      }}>
        <Image source={LeftArrow} />
      </TouchableOpacity>

      <Image style={styles.image} source={ScrimLab} />

      <View>
        <Text style={styles.titulo}>Cadastro:</Text>

        <View>
          <Text style={styles.label}>Usuário:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Escolha um nome de usuário"}
            placeholderTextColor={"#999"}
            value={usuario}
            onChangeText={(value) => {
              setUsuario(value);
            }}
          />
        </View>

        <View>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite seu e-mail"}
            placeholderTextColor={"#999"}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Crie sua senha"}
            placeholderTextColor={"#999"}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View>
          <Text style={styles.label}>Confirmar Senha:</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite sua senha novamente"}
            placeholderTextColor={"#999"}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </View>

        <Text style={{ color: "#f00" }}>{error}</Text>

        <TouchableOpacity
          style={
            senha === confirmarSenha
              ? styles.buttonActive
              : styles.buttonDesactive
          }
          disabled={senha !== confirmarSenha}
          onPress={() => {}}>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default SignUp;
