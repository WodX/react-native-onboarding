export const handleSort = (type, order) => {
  return (a, b) => {
    const lesserThen = a[type] > b[type];
    const greaterThen = b[type] > a[type];
    if (order) {
      return lesserThen ? 1 : greaterThen ? -1 : 0;
    }
    return greaterThen ? 1 : lesserThen ? -1 : 0;
  };
};
