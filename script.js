document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatar');
    const placeholder = document.getElementById('placeholder');
    const username = 'Al3x_osint';

    // Function to load Telegram profile picture
    function loadTelegramProfilePicture() {
        // Using telegram's direct CDN URL for the avatar
        const avatarUrl = `https://t.me/i/userpic/320/${username}.jpg`;

        avatarImg.src = avatarUrl;

        avatarImg.onload = function() {
            // Add a small delay to ensure smooth transition
            setTimeout(() => {
                avatarImg.classList.add('loaded');
                placeholder.classList.add('hidden');
            }, 100);
        };

        avatarImg.onerror = function() {
            console.error('Error loading Telegram profile picture');
            // Keep the placeholder visible in case of error
            placeholder.classList.remove('hidden');
            avatarImg.classList.remove('loaded');
        };
    }

    loadTelegramProfilePicture();
});
