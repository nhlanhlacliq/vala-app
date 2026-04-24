import { Text } from 'react-native';
import OnboardingSlide from '../components/OnboardingSlide';

const image = require('../../../../assets/onb-3.png');

type Props = {
  onNext: () => void;
};

export default function FutureSelfScreen({ onNext }: Props) {
  return (
    <OnboardingSlide
      image={image}
      title="YOUR FUTURE SELF WILL THANK YOU"
      activeIndex={2}
      totalSlides={3}
      onNext={onNext}
      nextLabel="Next"></OnboardingSlide>
  );
}
