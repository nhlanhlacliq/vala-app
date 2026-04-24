import { Text, View } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';

const image = require('../../../../assets/onb-2.png');

const textClassName = 'flex-1 text-[20px] text-gray-700';

const STEPS = [
  <Text key="1" className={textClassName}>
    Add your extra money to your <Text className="font-bold">VALA</Text> Wallet
  </Text>,
  <Text key="2" className={textClassName}>
    <Text className="font-bold">Lock it until November or December</Text>
  </Text>,
  <Text key="3" className={textClassName}>
    Use it when it matters most
  </Text>,
];

type Props = {
  onNext: () => void;
};

export default function HowItWorksScreen({ onNext }: Props) {
  return (
    <OnboardingSlide
      image={image}
      title="HOW IT WORKS"
      activeIndex={1}
      totalSlides={3}
      onNext={onNext}>
      <View className="gap-2">
        {STEPS.map((step, i) => (
          <View key={i} className="flex-row items-start gap-2">
            <Text className="text-[20px]">{i + 1}.</Text>
            {step}
          </View>
        ))}
      </View>
    </OnboardingSlide>
  );
}
