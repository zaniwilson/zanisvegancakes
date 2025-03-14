document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.md\\:hidden');
    const nav = document.querySelector('.md\\:flex');
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('hidden');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        if (email) {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 right-4 bg-primary text-gray-800 px-6 py-3 rounded-lg shadow-lg';
            toast.textContent = 'Thank you for subscribing!';
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
            form.reset();
        }
    });
}); 