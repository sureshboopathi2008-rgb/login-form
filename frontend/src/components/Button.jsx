function Button({ children, type = "button", disabled = false }) {
  return (
    <button type={type} disabled={disabled} className="primary-button">
      {children}
    </button>
  );
}

export default Button;