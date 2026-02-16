document.addEventListener('DOMContentLoaded', () => {

    const demoButtons = document.querySelectorAll('.btn-demo');
    const toolInput = document.getElementById('tool-name');
    const formSection = document.getElementById('demo-form');

    demoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // Get tool name from data attribute
            const toolName = button.getAttribute('data-tool');

            // Pre-fill the input
            if (toolInput) {
                toolInput.value = toolName;

                // Visual feedback of selection
                toolInput.style.backgroundColor = '#e0f2fe';
                setTimeout(() => {
                    toolInput.style.backgroundColor = '';
                }, 1000);
            }

            // Scroll to form
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
