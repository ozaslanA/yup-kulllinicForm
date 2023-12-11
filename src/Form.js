import React, { useState } from "react";

const Form = () => {
  const initalFormData = {
    name: "Abdurrahim",
    email: "mail@mail.com",
    pass: "yalelli",
    terms: true,
  };

  const changeHandler = (e) => {
    console.log("Yazdıkça Değişir : ", e.target.name);
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const newFormData = {
      ...formData,
      [e.target.name]: value,
    };

    setFormData(newFormData);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit edildi", formData);
  };

  const [formData, setFormData] = useState(initalFormData);
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name"> İsim ve Soyisim</label>
        <input
          onChange={changeHandler}
          type="text"
          name="name"
          value={formData.name}
        ></input>
      </div>

      <div>
        <label htmlFor="email"> E posta</label>
        <input
          onChange={changeHandler}
          type="text"
          name="email"
          value={formData.email}
        ></input>
      </div>

      <div>
        <label htmlFor="pass">Şifre</label>
        <input
          onChange={changeHandler}
          type="password"
          name="pass"
          value={formData.pass}
        ></input>
      </div>

      <div>
        <label htmlFor="terms">Kullanım Şartları</label>
        <input
          onChange={changeHandler}
          type="checkbox"
          name="terms"
          checked={formData.terms}
        ></input>
      </div>
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Form;
