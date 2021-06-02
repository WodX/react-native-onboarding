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

export const getUnique = array => {
  return array.filter((elem, index) => {
    if (elem !== '') {
      return array.indexOf(elem) === index;
    }
  });
};

export const getUniqueLabels = data => {
  const all_labels = data.map(image => {
    return image.labels && image.labels.map(label_data => label_data);
  });

  return getUnique(all_labels.join().split(','));
};

export const getUniqueLocations = data => {
  return getUnique(data.map(image => image.location && image.location.status));
};

export const filterByLabels = (data, label) => {
  return data.filter(arr => {
    let ok = !label ? true : false;
    arr.labels &&
      arr.labels.forEach(element => {
        if (element === label) {
          ok = true;
        }
      });
    if (ok) {
      return arr;
    }
  });
};

export const filterByLocation = (data, location) => {
  return data.filter(loc => {
    if (location) {
      return loc.location.status === location;
    }
    return loc;
  });
};
