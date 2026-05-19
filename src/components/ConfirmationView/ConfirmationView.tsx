import Button from '@/components/Button/Button';
import { Text, View } from 'react-native';

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
    <View className="gap-8">
      <View className="items-center justify-center p-8 gap-8 bg-white">
        <Text className="leading-6">{message}</Text>
        <View className="items-center justify-center">{icon}</View>
      </View>

      <View className="mt-2 flex-row gap-3 ml-auto">
        <Button label={primaryAction.label} onPress={primaryAction.onPress} className='gap-4' fullWidth={false}/>
        {secondaryAction && (
          <Button
            label={secondaryAction.label}
            onPress={secondaryAction.onPress}
            variant="ghost"
            showArrow={false}
            fullWidth={false}
          />
        )}
      </View>
    </View>
  );
}
