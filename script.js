document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatar');
    const placeholder = document.getElementById('placeholder');
    const username = 'Alexandr_Divizion';

    // Function to load Telegram profile picture
    function loadTelegramProfilePicture() {
        // Using telegram's direct CDN URL for the avatar
        const avatarUrl = `https://cdn4.cdn-telegram.org/file/kYNZBFzJIvrQgMoeS0jUh9-qxZY_6BcB0YMWUNQbP7Zhl9zRjYt8rFqHwFLUGBJRGE4cYC30hqSnCU8W6lptY1iltweMwdM5vbj7NAldTsgZz3a1lOozMPXfHaLmZIMsrSPaK1SJPdxdN3ZylQz0Ex492l3l1KPONrHCzWakfXZmjRgAPQGFlnGiximuYxn1WPVc6anAHVChvvDpXYesQzLknUUfsvjQk56PViwaI_2Nz0lNw3d3cMRtAaXVkJ3ETV3TLmk0uZP4fdCMkxqvAxINJVXLPhvt6m5WmDWmNY24skVd-bsp9HXCb-4QCxCbuk_lbUUs09Pqus0CB7t6Sw.jpg`;

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
