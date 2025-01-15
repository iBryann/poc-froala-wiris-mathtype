import { theme } from '../../styles/theme';
import { IconProps, ICON_ZOOM, ICONS, SIZE_ENUM } from './types';

export const Icon = ({
  color = theme.colors.icon.default,
  size = SIZE_ENUM.MEDIUM,
  name,
  style,
  ...props
}: IconProps) => {
  const IconChild = ICONS[name];

  return (
    <svg
      fill='none'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      style={{ zoom: ICON_ZOOM[size], ...style }}
      {...props}
    >
      <IconChild color={color} />
    </svg>
  );
};
