import { router } from 'expo-router';
import WelcomeToValaScreen from '@/features/onboarding/screens/WelcomeToValaScreen';

export default function WelcomeToValaRoute() {
  return <WelcomeToValaScreen onNext={() => router.push('/(onboarding)/how-it-works')} />;
}
