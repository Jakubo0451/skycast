

function ToggleButton({unit, onToggle}) {
  return (
    <div className="toggle_button">
        <button onClick={onToggle}>Switch to {unit}</button>
    </div>
  )
}

export default ToggleButton