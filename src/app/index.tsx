import { Redirect } from 'expo-router';

export default function Index() {
  // TODO: check auth state — redirect to onboarding or main
  return <Redirect href="/(onboarding)/welcome" />;
}
