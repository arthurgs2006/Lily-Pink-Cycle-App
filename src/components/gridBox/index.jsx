import { Link } from "react-router-dom";


export default function ({ src, alt, label }) {
  return (
    <Link 
    // to={}
    >
      <div className="box">
        <img src={src} alt={alt} className="elements"/>
        <p>{label}</p>
      </div>
    </Link>
  );
}
