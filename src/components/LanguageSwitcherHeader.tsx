import PlayIcon from '@public/icons/play-icon.svg?url';
import MicIcon from '@public/icons/mic-icon.svg?url';
import EditIcon from '@public/icons/edit-icon.svg?url';
import ShareIcon from '@public/icons/share-icon.svg?url';

const LanguageSwitcherHeader = () => {
  return (
    <div className="language-switcher-main-container">
      <div className="language-container">
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
            rows={2}
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
      <div className="language-container">
        <div className="title-wrapper">
          <button className="language-option ge-font active">მეგრული</button>
          <button className="language-option ge-font inactive">ქართული</button>
          <button className="language-option inactive">English</button>
        </div>
        <div className="result-field">
          <div className="result">
            <span className="result-text">მეგრული</span>
            <div className="action-items">
              <img src={PlayIcon} className="action-icons" alt="play icon" />
              <img src={MicIcon} className="action-icons" alt="mic icon" />
              <img src={EditIcon} className="action-icons" alt="edit icon" />
              <img src={ShareIcon} className="action-icons" alt="share icon" />
            </div>
          </div>
          <div className="result">
            <span className="result-text">
              მეგრულიმეგრული მეგრულიმეგრული მეგრული
            </span>
            <div className="action-items">
              <img src={PlayIcon} className="action-icons" alt="play icon" />
              <img src={MicIcon} className="action-icons" alt="mic icon" />
              <img src={EditIcon} className="action-icons" alt="edit icon" />
              <img src={ShareIcon} className="action-icons" alt="share icon" />
            </div>
          </div>
          <div className="result">
            <span className="result-text">მეგრული</span>
            <div className="action-items">
              <img src={PlayIcon} className="action-icons" alt="play icon" />
              <img src={MicIcon} className="action-icons" alt="mic icon" />
              <img src={EditIcon} className="action-icons" alt="edit icon" />
              <img src={ShareIcon} className="action-icons" alt="share icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcherHeader;
