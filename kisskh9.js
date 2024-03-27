// Find elements with 'family' attribute as 'font consolas' and wrap their content
function wrapElements() {
    var elements = document.querySelectorAll('[style*="font-family: Consolas"]');
    elements.forEach(function(element) {
        var content = element.innerHTML;
        var varElement = document.createElement('var');
        varElement.style.fontFamily = 'Consolas';
        varElement.innerHTML = content;
        element.innerHTML = '';
        element.appendChild(varElement);
    });
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    wrapElements(); // Call the function to wrap elements
});
