import SectionTitle from "./SectionTitle.tsx";
import TranslationInput from "./TranslationInput.tsx";
import TranslationOutput from "./TranslationOutput.tsx";
import SwitchIcon from "../icons/controls/SwitchIcon.tsx";

const TranslationSection = () => {
  return (
    <div className="section">
      <div className="translation-section">
        <div className="translate-from">
          <SectionTitle />
          <TranslationInput />
        </div>
        <div>
          <SwitchIcon className={"height: 35px"} />
        </div>
        <div className="translate-to">
          <SectionTitle />
          <TranslationOutput />
        </div>
      </div>
    </div>
  );
};

export default TranslationSection;
