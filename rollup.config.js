const commonjs = require('rollup-plugin-commonjs');

const BROKEN = !!process.env.BROKEN;

module.exports = {
  input: 'src/first.js',
  output: {
    format: 'es',
    // exports: 'none',
  },
  plugins: [
    {
      // A super simple resolution plugin to demonstrate this isn't a problem with rollup-plugin-node-resolve.
      resolveId(importee) {
        if (importee === 'second') {
          return `${__dirname}/src/second.js`;
        }
      },
    },
    commonjs({
      include: BROKEN ? ['src/first.js'] : ['src/first.js', 'src/second.js'],
    }),
  ],
};
