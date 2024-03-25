// JavaScript for typing effect
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.title');
    const text = titleElement.textContent;
    titleElement.textContent = '';
    let charIndex = 0;
    const interval = setInterval(() => {
        if (charIndex < text.length) {
            titleElement.textContent += text[charIndex];
            charIndex++;
        } else {
            clearInterval(interval);
        }
    }, 100); // Adjust typing speed as needed
});
