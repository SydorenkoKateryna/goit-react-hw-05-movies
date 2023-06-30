import PropTypes from 'prop-types';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { Button } from './SwitchThemeBtn.styled';

export const SwitchThemeBtn = ({ themeName, setThemeLight, setThemeDark }) => {
  return (
    <div>
      <Button
        onClick={setThemeLight}
        disabled={themeName === 'light-theme'}
        aria-label="light-theme"
      >
        <BsSunFill size={20} />
      </Button>
      <Button
        onClick={setThemeDark}
        disabled={themeName === 'dark-theme'}
        aria-label="dark-theme"
      >
        <BsMoonFill size={20} />
      </Button>
    </div>
  );
};

SwitchThemeBtn.propTypes = {
  themeName: PropTypes.string.isRequired,
  setThemeLight: PropTypes.func.isRequired,
  setThemeDark: PropTypes.func.isRequired,
};
