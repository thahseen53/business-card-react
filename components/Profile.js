import React from "react"

export default function Profile() {
    return(
        <div className="hero">
            <img className="hero--img" src="../photo.jpg" alt="profile photo"/>
            <div className ="details">
                <h1 className="hero--name">Mohammed Thahseen</h1>
                <small className="hero--role">Frontend Developer</small>
                <small className="hero--location">India</small>
                <div className="hero--contact">
                    <a className="email" href="mailto:mthahseen620@gamil.com"><i className="fa-solid fa-envelope"></i>Email</a>
                    <a className="linkedin" href="https://www.linkedin.com/in/mohammed-thahseen-0541961a0/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>
        </div>
    )
}