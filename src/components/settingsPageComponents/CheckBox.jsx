

export default function ({id, labelInfo}) {
    return (
      <div className="form-check switch-area">
        <input
          className="form-check-input input"
          type="checkbox"
          role="switch"
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {labelInfo}
        </label>
      </div>
    );
}