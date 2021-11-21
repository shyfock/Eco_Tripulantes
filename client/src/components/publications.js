import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom"
import {getPublications} from '../data'
import { Link } from 'react-router-dom'

function Publications() {
    let publications = getPublications();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex"}}>
            <div>
                <Link to='/home'>Go to Home</Link>
            </div>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                <input
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {publications
                    .filter(publication => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = publication.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    })
                    .map(publication => (
                    <QueryNavLink
                        style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            };
                        }}
                        to={`/publications/${publication.number}`}
                        key={publication.number}
                    >
                        {publication.name}
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet/>
        </div>
    );
}

export default Publications;

function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />
}