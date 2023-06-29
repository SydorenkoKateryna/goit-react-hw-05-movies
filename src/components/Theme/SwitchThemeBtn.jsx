import { useTheme } from 'components/Theme/ThemeProvider';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { Button } from './SwitchThemeBtn.styled';

export const SwitchThemeBtn = () => {
  const { theme, setThemeLight, setThemeDark } = useTheme();

  return (
    <div>
      <Button
        onClick={setThemeLight}
        disabled={theme.name === 'light-theme'}
        aria-label="light-theme"
      >
        <BsSunFill size={20} />
      </Button>
      <Button
        onClick={setThemeDark}
        disabled={theme.name === 'dark-theme'}
        aria-label="dark-theme"
      >
        <BsMoonFill size={20} />
      </Button>
    </div>
  );
};
