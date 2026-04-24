import { router } from 'expo-router';
import HowItWorksScreen from '@/features/onboarding/screens/HowItWorksScreen';

export default function HowItWorksRoute() {
  return <HowItWorksScreen onNext={() => router.push('/(onboarding)/future-self')} />;
}
