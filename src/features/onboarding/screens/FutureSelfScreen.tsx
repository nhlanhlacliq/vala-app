import { Text } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';

type Props = {
  onNext: () => void;
};

export default function FutureSelfScreen({ onNext }: Props) {
  return (
    <OnboardingSlide
      photoColor="#164e63"
      title="YOUR FUTURE SELF WILL THANK YOU"
      activeIndex={2}
      totalSlides={3}
      onNext={onNext}
      nextLabel="Next"
    >
      <Text className="text-gray-600 text-base leading-6">
        Start saving today and unlock your funds when you need them most — in November or December.
      </Text>
    </OnboardingSlide>
  );
}
