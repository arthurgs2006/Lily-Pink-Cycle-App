

export default function ({id, labelInfo}) {
  return (
    <div className="form-check form-switch switch-area">
      <input
        className="form-check-input input"
        type="checkbox"
        role="switch"
        id={id}
      />
      <label className="form-check-label" for={id}>
        {labelInfo}
      </label>
    </div>
  );
}
