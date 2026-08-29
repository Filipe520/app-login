import { Button } from "@/components/button";
import { Input } from "@/components/input/Input";
import { stylesComponents } from "@/styles/globals";
import { Link } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={stylesComponents.containerFather}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps={"handled"}
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
            <Input placeholder="E-mail." keyboardType="email-address" />
            <Input placeholder="Senha" secureTextEntry />
            <Button label={"Entrar"} />
          </View>

          <Text style={stylesComponents.footerText}>
            Não tem uma conta?{"  "}
            <Link style={stylesComponents.footerLink} href={"/signup"}>
              Cadastre-se aqui.
            </Link>
          </Text>
        </View>
        <TextInput
          placeholder="teste"
          style={{ borderWidth: 1, padding: 10 }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
