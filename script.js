// --- Scroll Reveal Animation ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100; // Trigger point

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Trigger once on load
window.addEventListener("load", reveal);
// Trigger on scroll
window.addEventListener("scroll", reveal);

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Modal Logic for Certificates ---
function openModal(imageUrl) {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('certModalContent');
    const certImage = document.getElementById('certImage');
    const placeholderText = document.getElementById('certPlaceholderText');

    // Show modal
    modal.classList.remove('hidden');
    
    // Trigger transition
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10);

    // If it's the placeholder text, show the warning box and a dummy image, otherwise hide the warning box
    if (imageUrl.includes('YOUR_')) {
        certImage.src = 'https://placehold.co/800x600/111827/3b82f6?text=Certificate+Image+Placeholder';
        placeholderText.style.display = 'block';
    } else {
        certImage.src = imageUrl;
        placeholderText.style.display = 'none';
    }
}

function closeModal() {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('certModalContent');
    
    // Reverse transition
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');

    // Hide after transition
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('certImage').src = '';
    }, 300);
}

// Close modal when clicking outside the image
document.getElementById('certModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
