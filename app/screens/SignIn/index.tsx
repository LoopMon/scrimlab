import { useState } from "react";
import {
  SafeAreaView,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// Estilos
import styles from "./styles";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  signup: undefined,
  home: undefined
};

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signup",
  "home"
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

// Imagens  
const ScrimLab = require("@/assets/images/scrimlab-logo.png")
const Eye = require("@/assets/images/eye.png")
const EyeClosed = require("@/assets/images/eye-closed.png")

function SignIn({ navigation }: Props) {
  const [email, setEmail] = useState("victor@email");
  const [senha, setSenha] = useState("1");
  const [esconderSenha, setEsconderSenha] = useState(true);
  const [error, setError] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={ScrimLab} />

      <View>
        <Text style={styles.titulo}>Login:</Text>
        <View>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder={"Digite seu e-mail"}
            placeholderTextColor={"#999"}
            value={email}
            onChangeText={(value) => [setEmail(value), setError("")]}
          />
        </View>

        <View>
          <Text style={styles.label}>Senha:</Text>
          <View style={styles.inputPassword}>
            <TextInput
              secureTextEntry={esconderSenha}
              style={styles.input}
              placeholder={"Digite sua senha"}
              placeholderTextColor={"#999"}
              value={senha}
              onChangeText={(value) => [setSenha(value), setError('')]}
            />
            <TouchableOpacity
              onPress={() => {
                setEsconderSenha(!esconderSenha);
              }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={esconderSenha ? Eye : EyeClosed}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ color: "#f00" }}>{error}</Text>

        <TouchableOpacity style={styles.button} onPress={()=>{
          navigation.navigate("home")
        }}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      {/* SignUp */}
      <Text style={{ color: "#fff", textAlign: "center" }}>
        Não tem uma Conta?
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup")
          }}>
          <Text style={{ color: "#FF4654" }}>
            {" "}Cadastrar-se
          </Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
}

export default SignIn;
