function hasChanges(oldData, newData) {
  if (Array.isArray(oldData) && Array.isArray(newData)) {
    if (oldData.length !== newData.length) return true;

    return oldData.some((item, index) => hasChanges(item, newData[index]));
  }

  if (
    typeof oldData === "object" &&
    oldData !== null &&
    typeof newData === "object" &&
    newData !== null
  ) {
    const oldKeys = Object.keys(oldData);
    const newKeys = Object.keys(newData);
    if (oldKeys.length !== newKeys.length) return true;

    return oldKeys.some((key) => oldData[key] !== newData[key]);
  }

  // Fallback: simple inequality
  return oldData !== newData;
}

export { hasChanges };
