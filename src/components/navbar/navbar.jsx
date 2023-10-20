import { Link } from "react-router-dom";


export default function ({href, src, alt, className}) {
    return (
        <>
            <Link to={href}>
                <img src={src} alt={alt} className={className}/>
            </Link>
        </>
    )
}