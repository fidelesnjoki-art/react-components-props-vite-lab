import React from "react";

// About component displays the blog's logo and description
// It accepts 'image' and 'about' as props, with a default placeholder image
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {/* Display the blog logo with alt text for accessibility */}
      <img src={image} alt="blog logo" />
      {/* Conditionally render the about text if provided */}
      {about && <p>{about}</p>}
    </aside>
  );
}

export default About;
