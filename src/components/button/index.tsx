import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { style } from "./style";

type ButtonProps = TouchableOpacityProps & {
  label: string;
};

export function Button({ label, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={style.container} {...rest} activeOpacity={0.8}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
}
