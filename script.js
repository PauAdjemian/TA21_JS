const textInput = document.getElementById('texto');

        textInput.addEventListener('focus', function() {
            textInput.style.borderColor = '#555';
        });

        textInput.addEventListener('blur', function() {
            textInput.style.borderColor = '#ccc';
        });