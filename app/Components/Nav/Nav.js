import React from 'react'

function Nav() {
  return (
    <div className="p-5 relative">
        <ul className="flex flex-row text-lg gap-5">
            <li><button><a href="#Aboutme"><h3>About me</h3></a></button></li>
            <li><button><a href="#Aboutme"><h3>Skills</h3></a></button></li>
            <li><button><a href="#Aboutme"><h3>Certificates</h3></a></button></li>
            <li><button><a href="#Projects"><h3>Projects</h3></a></button></li>
            <li><button><a href="#Aboutme"><h3>Contact me</h3></a></button></li>
        </ul>
    </div>
  )
}

export default Nav