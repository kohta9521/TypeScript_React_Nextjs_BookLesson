import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }

  return (
    <div style={{padding: '16px', backgroundColor: 'grey' }}>
      <label htmlFor="name">名前</label>
      <input type="text" id="name" className="input-name" onChange={onChange} />
    </div>
  )
}

export default Name;