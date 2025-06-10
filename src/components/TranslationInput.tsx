const TranslationInput = () => {
  return (
    <div className="translation-input">
      <form action="">
        <div className="form-group">
          <textarea
            name="description"
            id="systemDesc"
            value=""
            className="input-field"
            placeholder="Enter word to translate..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default TranslationInput;
