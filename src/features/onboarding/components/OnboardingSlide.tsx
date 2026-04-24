import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button/Button';

type Props = {
  photoColor?: string;
  title: string;
  children: React.ReactNode;
  activeIndex: number;
  totalSlides: number;
  onNext: () => void;
  nextLabel?: string;
};

export default function OnboardingSlide({
  photoColor = '#0891b2',
  title,
  children,
  activeIndex,
  totalSlides,
  onNext,
  nextLabel = 'Next',
}: Props) {
  return (
    <View className="flex-1">
      {/* Photo area placeholder */}
      <View className="h-[55%]" style={{ backgroundColor: photoColor }} />

      {/* Content card */}
      <SafeAreaView edges={['bottom']} className="flex-1 bg-white px-6 pt-6">
        <View className="flex-1 gap-4">
          <Text className="text-2xl font-bold text-gray-900">{title}</Text>
          <View className="flex-1">{children}</View>

          {/* Footer: dots + button */}
          <View className="flex-row items-center justify-between pb-2">
            <View className="flex-row gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <View
                  key={i}
                  className={`h-2 rounded-full ${i === activeIndex ? 'w-6 bg-cyan-400' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </View>
            <Button
              label={nextLabel}
              onPress={onNext}
              fullWidth={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
