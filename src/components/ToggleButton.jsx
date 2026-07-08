

function ToggleButton({ unit, onToggle }) {
  return (
    <button type="button" className="toggle_button" onClick={onToggle}>
      {unit === "celsius" ? "Switch to Fahrenheit" : "Switch to Celsius"}
    </button>
  );
}

export default ToggleButton;