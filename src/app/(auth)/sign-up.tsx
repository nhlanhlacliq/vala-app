import { router } from 'expo-router';
import SignUpScreen from '@/features/auth/screens/SignUpScreen';

export default function SignUpRoute() {
  return (
    <SignUpScreen
      onBack={() => router.back()}
      onSignUp={() => router.replace('/(main)/home')}
    />
  );
}
