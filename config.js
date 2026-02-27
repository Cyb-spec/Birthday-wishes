// ============================================
// 🎉 CUSTOMIZE YOUR BIRTHDAY WEBSITE HERE 🎉
// ============================================

const CONFIG = {
    // Birthday person's name that will appear in the title
    // Example: "John", "Alex", "Michael"
    birthdayName: "Dad",

    // The title that appears in the browser tab
    // You can use emojis! 🎉 🎂 🎁 🎊
    pageTitle: "Happy Birthday! 🎉",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        party: ['🎉', '🎊', '🎈', '🎁', '⭐'],    // Party/celebration emojis
        balloons: ['🎈', '🎀', '✨', '🌟', '💫']    // Balloons and decorations
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Ready to celebrate?",                                // First interaction
            yesBtn: "Yes!",                                            // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Come on, it's your special day! 🎂"         // Secret hover message
        },
        second: {
            text: "How excited are you for today?",                    // For the fun meter
            startText: "This excited!",                                // Text before the percentage
            nextBtn: "Next 🎉"                                         // Text for the next button
        },
        third: {
            text: "Will you have an amazing birthday today?",          // The big question!
            yesBtn: "Absolutely!",                                     // Text for "Yes" button
            noBtn: "Nope"                                              // Text for "No" button
        }
    },

    // Fun meter messages
    // They show up depending on how far they slide the meter
    funMessages: {
        extreme: "THAT'S THE SPIRIT! Let's party! 🚀🎉🎊",            // Shows when they go past 5000%
        high: "Now that's a birthday attitude! 🎈🎁",                 // Shows when they go past 1000%
        normal: "Getting more excited! 🎉"                            // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "🎂 Happy Birthday! 🎂",
        message: "Hope your day is filled with joy, laughter, and amazing moments!",
        emojis: "🎉🎊🎁🎈🍰🌟⭐✨"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#1a3a52",      // Deep blue (masculine theme)
        backgroundEnd: "#2d5a7b",        // Medium blue
        buttonBackground: "#3498db",     // Bright blue
        buttonHover: "#5dade2",          // Light blue hover
        textColor: "#ecf0f1"             // Light gray text for contrast
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes decorations to float up (10-20s recommended)
        floatDistance: "50px",          // How far decorations move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        explosionSize: 1.5              // Size of explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://www.chosic.com/download-audio/25941/
", // Birthday music URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.BIRTHDAY_CONFIG = CONFIG;
