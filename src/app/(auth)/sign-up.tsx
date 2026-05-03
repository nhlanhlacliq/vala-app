import SignUpScreen, { type SignUpData } from '@/features/auth/screens/SignUpScreen';
import { useRegister } from '@/hooks/api/useAuth';
import { useUser } from '@/store/userStore';
import { router } from 'expo-router';
import { Alert } from 'react-native';

export default function SignUpRoute() {
  const { mutate: register, isPending } = useRegister();
  const { setUser } = useUser();

  const handleSignUp = (data: SignUpData) => {
    register(
      {
        idOrPassport: data.idPassport,
        username: data.email,
        email: data.email,
        termsAccepted: data.agreedToTerms,
      },
      {
        onSuccess: async (res) => {
          await setUser({
            userId: res.userId,
            userName: `${data.firstName} ${data.lastName}`.trim(),
            accountNumber: res.userId,
          });
          router.replace('/(main)/home');
        },
        onError: (err) => {
          const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
          Alert.alert('Sign up failed', message);
        },
      }
    );
  };

  return (
    <SignUpScreen
      onBack={() => router.back()}
      onSignUp={handleSignUp}
      isLoading={isPending}
    />
  );
}
