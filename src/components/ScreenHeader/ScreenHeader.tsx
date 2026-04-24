import { View, TouchableOpacity, Text } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

type Props = {
  onBack: () => void;
  title?: string;
  rightElement?: React.ReactNode;
};

export default function ScreenHeader({ onBack, title, rightElement }: Props) {
  return (
    <View className="flex-row items-center px-5 py-4">
      <TouchableOpacity onPress={onBack} hitSlop={8} className="p-1">
        <ArrowLeft size={22} color="#111" />
      </TouchableOpacity>
      {title ? (
        <Text className="flex-1 text-center text-lg font-bold text-gray-900 mr-8">{title}</Text>
      ) : (
        <View className="flex-1" />
      )}
      {rightElement && <View>{rightElement}</View>}
    </View>
  );
}
