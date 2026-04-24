import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button/Button';

type Props = {
  image: any;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  activeIndex: number;
  totalSlides: number;
  onNext: () => void;
  nextLabel?: string;
};

export default function OnboardingSlide({
  image,
  title,
  subtitle,
  children,
  activeIndex,
  totalSlides,
  onNext,
  nextLabel = 'Next',
}: Props) {
  return (
    <View className="flex-1 bg-white">
      {/* Photo area placeholder */}
      <View className="h-[56%] overflow-hidden rounded-b-3xl bg-[#0891b2]">
        <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </View>

      {/* Content card */}
      <SafeAreaView edges={['bottom']} className="flex-1 bg-white px-10 pt-12">
        <View className="flex-1 gap-8">
          <Text className="text-[24px] font-extrabold tracking-wide text-gray-900">{title}</Text>
          {subtitle && (
            <View className="flex-1">
              <Text className="text-[20px] leading-7 opacity-90">{subtitle}</Text>
            </View>
          )}
          {children && <View className="flex-1">{children}</View>}

          {/* Footer: dots + button */}
          <View className="mt-auto flex-row items-center justify-between pb-2">
            <View className="flex-row gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <View
                  key={i}
                  className={`h-1.5 rounded-full ${i === activeIndex ? 'w-16 bg-cyan-400' : 'w-6 bg-gray-300'}`}
                />
              ))}
            </View>
            <Button label={nextLabel} onPress={onNext} fullWidth={false} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
