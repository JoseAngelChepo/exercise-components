import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from '../providers/ThemeProvider';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>  
      <div className="flex items-center gap-2 justify-end mb-2">
        <p>Tema: {theme}</p>
        {theme === 'light' 
          ? (
            <button className="button-theme" onClick={() => setTheme('dark')}>
              <MdOutlineLightMode />
            </button>
          ) : (
            <button className="button-theme" onClick={() => setTheme('light')}>
              <MdDarkMode />
            </button>
          )}
      </div>
      <style jsx>
          {`
            .button-theme {
              border: 1px solid #000;
              padding: 5px;
              border-radius: 9px;
              cursor: pointer;
            }
          `}
      </style>
    </>
  )
}

export default ThemeSelector;