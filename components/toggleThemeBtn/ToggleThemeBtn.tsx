const ToggleThemeBtn= ({ theme, toggleTheme }: {theme:any, toggleTheme:any}) => {
  const isLight = theme === 'light';

  return (
    <button className={isLight === true ? 'toggle-btn active' : 'toggle-btn'} onClick={toggleTheme}>
       토글 버튼
    </button>
  )
};

export default ToggleThemeBtn;