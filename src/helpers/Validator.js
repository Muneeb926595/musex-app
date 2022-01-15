
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_FILE = "FILE";
const VALIDATOR_TYPE_NUMBER = "NUMBER";
const VALIDATOR_TYPE_CONFIRM_PASSWORD = "CONFIRM_PASSWORD";
const VALIDATOR_TYPE_NO_SPACE = "NO_SPACE";
const VALIDATOR_TYPE_NONE = "NONE";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val: val,
});
export const VALIDATOR_MAXLENGTH = (val) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val,
});
export const VALIDATOR_MIN = (val) => ({ type: VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val) => ({ type: VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_NUMBER = () => ({ type: VALIDATOR_TYPE_NUMBER });
export const VALIDATOR_CONFIRM_PASSWORD = (val) => ({
  type: VALIDATOR_TYPE_CONFIRM_PASSWORD,
  val: val,
});
export const VALIDATOR_NO_SPACE = () => ({ type: VALIDATOR_TYPE_NO_SPACE });
export const VALIDATOR_NONE = () => ({ type: VALIDATOR_TYPE_NONE });

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_NUMBER) {
      isValid = isValid && /^\+?[0-9]{1}[0-9]{3,14}$/.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_CONFIRM_PASSWORD) {
      isValid = isValid && value === validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_NO_SPACE) {
      var CharArray = value.split(" ");
      if (CharArray.length > 1) {
        isValid = isValid && false;
      } else {
        isValid = isValid && true;
      }
    }
    if (validator.type === VALIDATOR_TYPE_NONE) {
      if (value === "") {
        isValid = true;
      }
    }
  }
  return isValid;
};
