import { Redirect } from 'expo-router';
import { useUser } from '@/store/userStore';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { userId, isLoading } = useUser();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator color="#22d3ee" />
      </View>
    );
  }

  return <Redirect href={userId ? '/(main)/home' : '/(onboarding)/welcome'} />;
}
