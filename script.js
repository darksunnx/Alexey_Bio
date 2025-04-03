document.addEventListener('DOMContentLoaded', function() {
    const avatarImg = document.getElementById('avatar');
    const placeholder = document.getElementById('placeholder');
    const username = 'Alexandr_Divizion';

    // Function to load Telegram profile picture
    function loadTelegramProfilePicture() {
        // Using telegram's direct CDN URL for the avatar
        const avatarUrl = `https://cdn4.cdn-telegram.org/file/sv62j6F8U2TIEXxMNj460_OoS6rKxn4QOxfpdkz7q_gmRfR-BiAN54cIdWmjL_CDA87sjdjlEJTibyUptE5zveDjeOX4K4f1v8sMo5OKX2lkJeoCZVOgG9-DCqPAds_UnkC5gWeByIW1FI5bpuweWZ5eY2fACyihvRkSqDCpcs3pGshS-r_7NvZzw7fW9vWMFa-Zm9JV3n9mZPEb8p6obCgD5uWOIMjTNHuRTODWPD-TS4kpTkjz3HoqPEMEUJCW2roNTXioigvKSHCsj95u5GuKsEi447M0iMbSQhZD2JlS1FMwLLKJJ61zGuhBuGkxzZNvOZlb_s2pcjpaIbGK6A.jpg`;

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
