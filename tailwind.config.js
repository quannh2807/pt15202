module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                banner: "url('../assets/images/banner.jpg')",
            }),
        },

        fontFamily: {
            logo: ["Pacifico"],
        },

        backgroundColor: (theme) => ({
            ...theme("colors"),
            primary: "#f6755e",
            secondary: "#25a2c3",
        }),

        textColor: (theme) => ({
            ...theme("colors"),
            primary: "#f6755e",
            secondary: "#25a2c3",
        }),

        minWidth: {
            '0': "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            'full': "100%",
        },

        maxWidth: {
            '0': "0",
            "1/4": "25%",
            "1/2": "50%",
            "3/4": "75%",
            'full': "100%",
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
