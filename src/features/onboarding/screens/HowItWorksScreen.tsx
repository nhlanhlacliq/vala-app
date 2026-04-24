import { Text, View } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';

const STEPS = [
  'Add your extra money to your VALA Wallet',
  'Lock it until November or December',
  'Use it when it matters most',
];

type Props = {
  onNext: () => void;
};

export default function HowItWorksScreen({ onNext }: Props) {
  return (
    <OnboardingSlide
      photoColor="#0e7490"
      title="HOW IT WORKS"
      activeIndex={1}
      totalSlides={3}
      onNext={onNext}
    >
      <View className="gap-3">
        {STEPS.map((step, i) => (
          <View key={i} className="flex-row gap-3 items-start">
            <Text className="text-cyan-400 font-bold text-base">{i + 1}.</Text>
            <Text className="text-gray-700 text-base flex-1">{step}</Text>
          </View>
        ))}
      </View>
    </OnboardingSlide>
  );
}
