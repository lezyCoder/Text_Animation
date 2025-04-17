// Select the element with the ID 'text' (likely inside an <h2> tag)
let text = document.querySelector("#text");

// Split the text content into an array of individual characters
let splittedText = text.textContent.split("");
let clutter = ""; // This will hold the modified HTML with span-wrapped characters

// When the window finishes loading, run this function
window.addEventListener("load", function () {
  
  // Loop through each character in the text
  splittedText.forEach((e, idx) => {
    // If the character is a space, insert a non-breaking space inside a span
    if (e === " ") {
      clutter += `<span id="${idx}">&nbsp</span>`;
    }

    // Wrap each character in a span with a unique ID
    clutter += `<span id="${idx}">${e}</span>`;
  });

  // Replace the original text content with the new HTML structure
  text.innerHTML = clutter;

  // Create a GSAP timeline for animating the characters
  let tl = gsap.timeline();

  // Step 1: Move each span upward and fade it out
  tl.to("h2 span", {
    y: -40,             // Move up 40 pixels
    opacity: 0,         // Fade out
    duration: 0.8,      // Duration of each animation
    stagger: 0.4,       // Delay between each span's animation
    ease: "power1.in"   // Easing function for a smooth start
  });
  
  // Step 2: Add a short delay (without animating anything)
  tl.to({}, { duration: 0.9 });

  // Step 3: Move each span back to its original position and fade it back in
  tl.to("h2 span", {
    y: 0,               // Return to original position
    opacity: 1,         // Fade in
    duration: 0.8,      // Duration of each animation
    stagger: 0.4,       // Delay between each span's animation
    ease: "power2.out"  // Easing function for a smooth finish
  });

});
