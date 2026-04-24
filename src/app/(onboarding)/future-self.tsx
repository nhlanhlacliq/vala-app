import { router } from 'expo-router';
import FutureSelfScreen from '@/features/onboarding/screens/FutureSelfScreen';

export default function FutureSelfRoute() {
  return <FutureSelfScreen onNext={() => router.replace('/(auth)/sign-up')} />;
}
