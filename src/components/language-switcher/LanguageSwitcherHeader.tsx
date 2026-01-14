const LanguageSwitcherHeader = () => {
  return (
    <div className="language-switcher">
      <div className="translate-input-field">
        <div className="title-wrapper">
          <button className="language-option ge-font active">მეგრული</button>
          <button className="language-option ge-font inactive">ქართული</button>
          <button className="language-option inactive">English</button>
        </div>
        <div className="input-field">
          <textarea
            placeholder="Enter word..."
            className="language-translation-field"
            id="translation-field-id"
            autoFocus={true}
            rows={4}
          ></textarea>
          <div className="clear-field">X</div>
          <div className="additional-letters-selector">
            <label htmlFor="addionalCharacters">+ megrelian character</label>
            <select name="addionalCharacters" id="addionalCharacters">
              <option value="" disabled></option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <div className="keyboard-icon"></div>
          </div>
        </div>
      </div>
      <div className="translate-results">
        <div className="title-wrapper">
          <button className="language-option ge-font active">მეგრული</button>
          <button className="language-option ge-font inactive">ქართული</button>
          <button className="language-option inactive">English</button>
        </div>
        <div className="result-field">
          <div className="result-text">მეგრული</div>
          <div className="result-text">
            მეგრული მეგრული მეგრული მეგრული მეგრული მეგრული
          </div>
          <div className="result-text">მეგრული</div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcherHeader;
