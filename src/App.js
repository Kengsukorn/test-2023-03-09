import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (inputValue.length !== 12) {
      alert("กรุณากรอกข้อมูลให้ครบ 12 ตัวอักษร");
      return;
    }
    const firstTwoChars = inputValue.substr(0, 2).toUpperCase();
    if (!/^[A-Z]+$/.test(firstTwoChars)) {
      alert("ตัวอักษร 2 ตัวแรกต้องเป็นภาษาอังกฤษพิมพ์ใหญ่");
      return;
    }
    const restChars = inputValue.substr(2);
    if (!/^[1-9][0-9]{9}$/.test(restChars)) {
      alert("ตัวเลขแรกต้องไม่ขึ้นต้นด้วย 0");
      return;
    }
    
    const newValue = firstTwoChars + restChars;
    
    alert(`ข้อมูลที่รับได้คือ ${newValue}`);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const firstTwoChars = value.substring(0, 2);

    if (/^[a-z]{2}/.test(firstTwoChars)) {
      setInputValue(firstTwoChars.toUpperCase() + value.substring(2));
    } else {
      setInputValue(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        กรุณากรอกข้อมูล:
        <input type="text" value={inputValue} onChange={handleChange} placeholder={"ABXXXXXXXXXX"}/>
      </label>
      <br />
      <button type="submit">ส่งข้อมูล</button>
    </form>
  );
}

export default App;
