const LanguageSwitcherHeader = () => {
  return (
    <div className="language-switcher">
        <div className="header">
            <button className="lang-title ge-font active">მეგრული</button>
            <button className="lang-title ge-font inactive">ქართული</button>
            <button className="lang-title inactive">English</button>
        </div>

        <div className="body-field">
            <textarea className="language-translation-field">

            </textarea>
        </div>
    </div>
  );
};

export default LanguageSwitcherHeader;
