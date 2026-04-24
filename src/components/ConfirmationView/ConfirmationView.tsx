import { View, Text } from 'react-native';
import Button from '@/components/Button/Button';

type Action = {
  label: string;
  onPress: () => void;
};

type Props = {
  message: string;
  icon: React.ReactNode;
  primaryAction: Action;
  secondaryAction?: Action;
};

export default function ConfirmationView({ message, icon, primaryAction, secondaryAction }: Props) {
  return (
    <View className="flex-1 items-center justify-center px-8 gap-8">
      <View className="items-center gap-6">
        <View className="items-center justify-center">{icon}</View>
        <Text className="text-center text-base text-gray-700 leading-6">{message}</Text>
      </View>

      <View className="w-full gap-3">
        <Button label={primaryAction.label} onPress={primaryAction.onPress} />
        {secondaryAction && (
          <Button
            label={secondaryAction.label}
            onPress={secondaryAction.onPress}
            variant="ghost"
            showArrow={false}
          />
        )}
      </View>
    </View>
  );
}
