function createElement() {
  // Something we can't trivially eliminate.
  console.log('go go');
}

export {createElement};

// These are also broken:
// exports.createElement = createElement;
// module.exports = {createElement};
