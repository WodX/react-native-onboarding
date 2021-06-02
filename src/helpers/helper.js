const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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

export const getUniqueYears = data => {
  const all_years = data.map(img => {
    const date = new Date(img.created_at);
    return date.getFullYear().toString();
  });

  return getUnique(all_years);
};

export const getUniqueMonths = data => {
  const all_months = data.map(img => {
    const date = new Date(img.created_at);
    return MONTHS[date.getMonth()];
  });

  return getUnique(all_months);
};

export const getUniqueDays = data => {
  const all_days = data.map(img => {
    const date = new Date(img.created_at);
    return date.getDay().toString();
  });

  return getUnique(all_days);
};

export const getUniqueHours = data => {
  const all_hours = data.map(img => {
    const date = new Date(img.created_at);
    return date.getHours().toString();
  });

  return getUnique(all_hours);
};

export const filterByLabel = (data, label) => {
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

export const filterByYear = (data, year) => {
  return data.filter(yea => {
    if (year) {
      const date = new Date(yea.created_at);
      return date.getFullYear().toString() === year;
    }
    return yea;
  });
};

export const filterByMonth = (data, month) => {
  return data.filter(mon => {
    if (month) {
      const date = new Date(mon.created_at);
      return MONTHS[date.getMonth()] === month;
    }
    return mon;
  });
};

export const filterByDay = (data, day) => {
  return data.filter(obj => {
    if (day) {
      const date = new Date(obj.created_at);
      return date.getDay().toString() === day;
    }
    return obj;
  });
};

export const filterByHour = (data, hour) => {
  return data.filter(obj => {
    if (hour) {
      const date = new Date(obj.created_at);
      return date.getHours().toString() === hour;
    }
    return obj;
  });
};
