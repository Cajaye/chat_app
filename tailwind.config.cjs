const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        purple: {
          btn: '#EADEF5',
          btnHover: '#E0CEF0'
        }

      },

    },
  },

  plugins: [],
};

module.exports = config;
