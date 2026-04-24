import { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardTypeOptions } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: 'off' | 'email' | 'name' | 'password' | 'username';
};

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  autoComplete = 'off',
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <View className="flex-row items-center rounded-xl border border-gray-200 bg-white px-4 py-1">
      <TextInput
        className="flex-1 text-[15px] text-gray-900"
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !visible}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setVisible((v) => !v)} hitSlop={8}>
          {visible ? <Eye size={18} color="#9CA3AF" /> : <EyeOff size={18} color="#9CA3AF" />}
        </TouchableOpacity>
      )}
    </View>
  );
}
