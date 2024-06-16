document.getElementById('revealBtn').addEventListener('click', function() {
    document.getElementById('proposalMessage').classList.remove('hidden');
    this.style.display = 'none';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert('You said Yes! My heart is yours forever, Kavitha!');
    // Additional actions for "Yes" can be added here, such as redirecting to another page or playing a special animation.
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Oh no! But I respect your decision, Kavitha.');
    // Additional actions for "No" can also be added here if needed.
});
