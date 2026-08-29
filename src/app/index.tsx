import { Button } from "@/components/button";
import { Input } from "@/components/input/Input";
import { stylesComponents } from "@/styles/globals";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Entrar", "Preencha e-mail e senha para entrar.");
    }

    Alert.alert("Bem-vindo", `Login realizado com: ${email}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={stylesComponents.containerFather}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"handled"}
        showsVerticalScrollIndicator={false}
      >
        <View style={stylesComponents.container}>
          <Image
            source={require("@/assets/SignUpAmicoLogin.png")}
            style={stylesComponents.illustration}
          />
          <View style={stylesComponents.containerTitle}>
            <Text style={stylesComponents.title}>Entrar</Text>
            <Text style={stylesComponents.subTitulo}>
              Acesse sua conta com e-mail e senha.
            </Text>
          </View>
          <View style={stylesComponents.containerForm}>
            <Input
              placeholder="E-mail."
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            />
            <Input
              placeholder="Senha"
              onChangeText={(passwordParam) => setPassword(passwordParam)}
              secureTextEntry
            />
            <Button label={"Entrar"} onPress={handleSignIn} />
          </View>

          <Text style={stylesComponents.footerText}>
            Não tem uma conta?{"  "}
            <Link style={stylesComponents.footerLink} href={"/signup"}>
              Cadastre-se aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
