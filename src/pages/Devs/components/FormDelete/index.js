const FormDelete = ({invalidFields, keyForDelete, setKeyForDelete}) => {
  return <>
    <div className="form__input_group secret_key__form">
      <label className={`form__label ${
          invalidFields['key_for_delete'] ?
          'invalid__input' :
          ''
        }`} htmlFor="delete">Chave Secreta</label>
      <input autoComplete='none' autofill='none'
        className={`form__input ${
          invalidFields['key_for_delete'] ?
          'invalid__input' :
          ''
        }`} 
          id="delete"
          type="text" 
          value={keyForDelete} 
          onChange={(e) => setKeyForDelete(e.target.value)}
          autoComplete="off"
        />
        <small className="doc_secret_key"> Passe a chave exata definida no momento da criação do card para poder deleta-lo.</small>
    </div>
  </>;
};

export default FormDelete;