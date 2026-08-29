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
        showsVerticalScrollIndicator={false}
      >
        <View style={stylesComponents.container}>
          <Image
            source={require("@/assets/wordPhoneLogin.png")}
            style={stylesComponents.illustration}
          />
          <View style={stylesComponents.containerTitle}>
            <Text style={stylesComponents.title}>Cadastrar</Text>
            <Text style={stylesComponents.subTitulo}>
              Crie sua conta para acessar.
            </Text>
          </View>
          <View style={stylesComponents.containerForm}>
            <Input placeholder="Nome" keyboardType="email-address" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar Senha" secureTextEntry />
            <Button label={"Cadastrar"} />
          </View>

          <Text style={stylesComponents.footerText}>
            Já tem uma conta?{"  "}
            <Link style={stylesComponents.footerLink} href={"/"}>
              Entre aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
