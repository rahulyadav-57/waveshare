const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/app/components'),
    },
  },
  style: {
    css: {
      loaderOptions: (options) => {
        return { ...options, url: false };
      },
    },
  },
};
