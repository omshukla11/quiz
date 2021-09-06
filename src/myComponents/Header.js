import React from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {


    return (
        <>
            {props.darkmode ? <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href=".">{props.title}</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.link1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">{props.link2}</a>
                        </li>
                    </ul>
                    {props.searchbar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: ""}
                </div>
            </nav> :
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href=".">{props.title}</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.link1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.link2}</a>
                            </li>
                        </ul>
                        {props.searchbar ? <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>: ""}
                    </div>
                </nav>}
        </>
    )
}

Header.defaultProps = {
    darkmode: false
}

Header.protoTypes = {
    darkmode: PropTypes.bool.isRequired,
    title: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string
}