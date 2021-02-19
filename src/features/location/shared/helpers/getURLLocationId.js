const getURLLocationId = (locationUrl) => {
  if (!locationUrl) return '';

  return locationUrl.split('location/')[1];
};

export default getURLLocationId;
