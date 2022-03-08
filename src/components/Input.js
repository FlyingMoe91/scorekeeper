import './Input.css';

export default function Input({ label, placeholder }) {
  return (
    <div className="Input-container">
      <label>{label}</label>
      <input className="Input-field" placeholder={placeholder}></input>
    </div>
  );
}
