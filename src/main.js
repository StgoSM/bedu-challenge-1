const $ = jQuery = require("jquery");

import './sass/main.scss';

// Load the HTML
import header from './html/header.html';
import content from './html/content.html';
import description1 from './html/description1.html';
import description2 from './html/description2.html';
import description3 from './html/description3.html';
import footer from './html/footer.html';

// Show the content methods
window.showIndex = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + content + footer;
    document.body.innerHTML = root.innerHTML;
};
window.showDescription1 = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + description1 + footer;
    document.body.innerHTML = root.innerHTML;
};
window.showDescription2 = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + description2 + footer;
    document.body.innerHTML = root.innerHTML;
};
window.showDescription3 = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + description3+ footer;
    document.body.innerHTML = root.innerHTML;
};

window.showIndex();
