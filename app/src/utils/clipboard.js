
const copyElemText = elem => {
  const { tagName } = elem;
  if (tagName === 'INPUT') {
    elem.select();
    document.execCommand("copy");
  }
}

module.exports = {
  copyElemText: copyElemText
}