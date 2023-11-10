import { Link } from "react-router-dom";


export default function ({ src, alt, label, https }) {
  return (
    <Link 
    to={https} target="_blank"
    >
      <div className="box">
        <img src={src} alt={alt} className="elements"/>
        <p>{label}</p>
      </div>
    </Link>
  );
}
