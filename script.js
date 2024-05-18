document.addEventListener("DOMContentLoaded", function() {
    // Get the job title element
    const jobTitle = document.getElementById("developer-text");

    // Define the text content and intervals
    const texts = ["frontend web developer", "rookie game developer"];
    const intervals = [200, 1000, 200]; // Time intervals for typing, pause, and deleting

    let textIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    // Function to control the typing and deleting animations
    function typeWriter() {
        const text = texts[textIndex];
        const interval = intervals[isTyping ? 0 : 2];

        if (isTyping) {
            jobTitle.textContent = "I am a ";
            jobTitle.textContent += text.substring(0, charIndex);
            charIndex++;

            if (charIndex > text.length) {
                isTyping = false;
                setTimeout(typeWriter, intervals[1]);
            } else {
                setTimeout(typeWriter, interval);
            }
        } else {
            jobTitle.textContent = "I am a ";
            jobTitle.textContent += text.substring(0, charIndex);
            charIndex--;

            if (charIndex === -1) {
                isTyping = true;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeWriter, interval);
        }
    }

    // Start the typing animation after a brief delay
    setTimeout(typeWriter, 500);
});
