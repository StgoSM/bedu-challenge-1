const $ = jQuery = require("jquery");

import './sass/main.scss';

// Load the HTML
import header from './html/header.html';
import content from './html/content.html';
import description from './html/description.html';

// Show the content methods
window.showIndex = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + content;
    document.body.innerHTML = root.innerHTML;
};
window.showDescription = function() {
    // Create and append the HTML to body
    const root = document.createElement("div");
    root.className = 'content-fluid';
    root.innerHTML = header + description;
    document.body.innerHTML = root.innerHTML;
};

window.showIndex();
