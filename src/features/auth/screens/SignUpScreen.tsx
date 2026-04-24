import { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';

type Props = {
  onBack: () => void;
  onSignUp: (data: SignUpData) => void;
};

export type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  idPassport: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
};

export default function SignUpScreen({ onBack, onSignUp }: Props) {
  const [form, setForm] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    email: '',
    idPassport: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
  });

  const set = (key: keyof SignUpData) => (val: string | boolean) =>
    setForm(f => ({ ...f, [key]: val }));

  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.idPassport.trim() &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword &&
    form.agreedToTerms;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pb-10"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <TouchableOpacity onPress={onBack} hitSlop={8} className="py-5">
          <ArrowLeft size={22} color="#111" />
        </TouchableOpacity>

        <Text className="text-3xl font-bold text-gray-900 mb-2">
          Create your Vala account
        </Text>
        <Text className="text-gray-500 text-base mb-8">
          Create an account so you can manage your money even faster
        </Text>

        {/* Form fields */}
        <View className="gap-4">
          <Input
            placeholder="First Name"
            value={form.firstName}
            onChangeText={set('firstName') as (v: string) => void}
            autoCapitalize="words"
            autoComplete="name"
          />
          <Input
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={set('lastName') as (v: string) => void}
            autoCapitalize="words"
          />
          <Input
            placeholder="Email"
            value={form.email}
            onChangeText={set('email') as (v: string) => void}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <Input
            placeholder="ID/Passport Number"
            value={form.idPassport}
            onChangeText={set('idPassport') as (v: string) => void}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Input
            placeholder="Password"
            value={form.password}
            onChangeText={set('password') as (v: string) => void}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />
          <Input
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChangeText={set('confirmPassword') as (v: string) => void}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        {/* T&Cs */}
        <TouchableOpacity
          onPress={() => set('agreedToTerms')(!form.agreedToTerms)}
          className="flex-row items-start gap-3 mt-6 mb-8"
          activeOpacity={0.7}
        >
          <View
            className={`w-5 h-5 rounded border mt-0.5 items-center justify-center ${
              form.agreedToTerms ? 'bg-cyan-400 border-cyan-400' : 'border-gray-400'
            }`}
          >
            {form.agreedToTerms && <Text className="text-white text-xs font-bold">✓</Text>}
          </View>
          <View className="flex-1">
            <Text className="text-gray-700 text-sm leading-5">
              I'm at least 18 years old and agree to the following terms:
            </Text>
            <Text className="text-gray-700 text-sm leading-5 mt-1">
              By clicking here, I have read and agree to the{' '}
              <Text className="font-bold">Terms and Conditions</Text>
            </Text>
          </View>
        </TouchableOpacity>

        <Button
          label="Sign Up"
          onPress={() => onSignUp(form)}
          disabled={!canSubmit}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
