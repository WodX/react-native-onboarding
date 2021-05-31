const get_memes = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes');
  if (response.ok) {
    const json_response = await response.json();
    return json_response;
  }
  return null;
};

export {get_memes};
