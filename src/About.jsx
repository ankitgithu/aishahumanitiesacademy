import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
          <Link className="hover:text-gray-900" to="/">Home</Link>
          <Link className="hover:text-gray-900" to="/about">About</Link>
          <Link className="hover:text-gray-900" to="/courses">Courses</Link>
          <Link className="hover:text-gray-900" to="/results/item2">Mp Board Result</Link>
          <Link className="hover:text-gray-900" to="/results/item1">CBSE Board Result</Link>
          <Link className="hover:text-gray-900" to="/gallery">Gallery</Link>
          <Link className="hover:text-gray-900" to="/contact">Contact</Link>
          <a target='blank' href='https://ncert.nic.in/textbook.php?kegy2=0-14' className="hover:text-gray-900" to="/contact">Download NCERT Syllabus</a>
        </nav>

<div class="flex justify-center space-x-5">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    </a>
    <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    </a>
</div>
<p class="text-center text-gray-700 font-medium">&copy; 2024 Aisha Coaching Classes. All rights reservered.</p>
</footer>
    </div>
  )
}

export default About
