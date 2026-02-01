// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Meggi",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Just something I made!",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🩵', '☁️', '🤍', '🐻‍❄️', '💙'],  // Heart emojis
        bears: ['🌻', '🦋', '🐳','🌻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Are we friends?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Hey sweetpea!~ Click on me 😏"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OML YOU WANT ME THAT BAD, YOU FLATTER ME",  // Shows when they go past 5000%
        high: "I Mean sure.. thats nice",              // Shows when they go past 1000%
        normal: "Really?..."                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ddf1ff",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#295e81",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#2989cb",     // Button color (should stand out against the background)
        buttonHover: "#5db1ea",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#5db1ea"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://still-teal-c4tw2sr8gj.edgeone.app/Clairo%20-%20Flamin%20Hot%20Cheetos%20(Lyrics).mp3", // Music streaming URL
        startText: "｡‧𝄞⨾𓍢ִ໋˚⋆.˚✮ʚ🎧ɞ✮˚.⋆𝄞⨾𓍢ִ໋ ",        // Button text to start music
        stopText: "STOP THE NOISE 🤕",         // Button text to stop music
        volume: 1.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
