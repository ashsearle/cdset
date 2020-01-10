const cdset = (oldState, path, value) => {
  // path can be an array or dot-separated string:
  path.split && (path = path.split("."));

  if (path.length === 0) {
    return value;
  }

  const key = path[0];

  if (oldState == null) {
    const looksLikeArrayIndex = String(key) === String(~~key);
    oldState = looksLikeArrayIndex ? [] : {};
  }

  // Use Object.assign to handle arrays with extra non-numeric properties:
  const newState = Object.assign(Array.isArray(oldState) ? [] : {}, oldState);
  newState[key] = cdset(oldState[key], path.slice(1), value);
  return newState;
};

export default cdset;
