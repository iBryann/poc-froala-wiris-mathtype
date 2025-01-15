import { Icon } from '../icons';
import { ILabel } from './types';
import { Container } from './styles';

export const Label = ({ fieldId, label, required, disabled }: ILabel) =>
  label ? (
    <Container htmlFor={fieldId} className='t-richtext-label' $disabled={disabled}>
      <div>
        {label}
        {required && <Icon name='Required' size='sm' color='#EA0F29' />}
      </div>
    </Container>
  ) : (
    <></>
  );
