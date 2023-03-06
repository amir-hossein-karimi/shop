const bcrypt = require("bcrypt");
const saltRounds = 10;

const hashString = async (string) => {
  try {
    const hashedString = await bcrypt.hash(string, saltRounds);
    return { error: false, value: hashedString };
  } catch (e) {
    return { error: true, value: undefined };
  }
};

const compareStringWithHash = async (string, hash) => {
  try {
    const compareResult = await bcrypt.compare(string, hash);
    return { error: false, isEqual: compareResult };
  } catch (e) {
    return { error: true, isEqual: false };
  }
};

module.exports = {
  hashString,
  compareStringWithHash,
};
