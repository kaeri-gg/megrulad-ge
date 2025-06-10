import SectionTitle from "./SectionTitle.tsx";

const TranslationSection = () => {
  return (
    <div className="section">
      <div className="translation-section">
        <div className="translate-from">
          <SectionTitle />
        </div>
        <div className="translate-to">
          <SectionTitle />
        </div>
      </div>
    </div>
  );
};

export default TranslationSection;
