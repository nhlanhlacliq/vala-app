import SplashScreen from '@/features/onboarding/screens/SplashScreen';
import { router } from 'expo-router';

export default function WelcomeRoute() {
  return <SplashScreen onGetStarted={() => router.push('/(onboarding)/how-it-works')} />;
}
