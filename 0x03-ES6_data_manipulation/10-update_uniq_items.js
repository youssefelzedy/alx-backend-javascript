const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [x, y] of items.entries()) {
    if (y === 1) {
      items.set(x, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
