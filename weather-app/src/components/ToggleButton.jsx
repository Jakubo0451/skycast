

function ToggleButton({unit, onToggle}) {
  return (
    <div>
        <button onClick={onToggle}>Switch to {unit}</button>
    </div>
  )
}

export default ToggleButton