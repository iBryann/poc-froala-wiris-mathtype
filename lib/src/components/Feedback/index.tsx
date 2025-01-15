import { Icon } from '../icons';
import { COLORS, FeedbackProps, ICONS } from './types';
import { Container } from './styles';

export const Feedback = ({
  feedbackShow,
  feedbackType = 'default',
  feedbackMessage,
  disabled
}: FeedbackProps) => {
  return (
    <>
      {feedbackShow && feedbackMessage && (
        <Container color={COLORS[feedbackType]} aria-disabled={disabled}>
          {feedbackType !== 'default' && (
            <Icon name={ICONS[feedbackType]} color={COLORS[feedbackType]} style={{ zoom: 0.6 }} />
          )}

          {feedbackMessage}
        </Container>
      )}
    </>
  );
};
