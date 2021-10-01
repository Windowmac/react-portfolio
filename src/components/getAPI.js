import axios from 'axios';

const getLanguages = async (url) => {
  const languages = await axios.get(url, {
    headers: {
      Authorization: 'Basic V2luZG93bWFj',
    },
  }).catch(err => {console.log(err)});

  return languages;
}

const getAPI = async () => {
  const repos = await axios.get('https://api.github.com/users/Windowmac/repos', {
    headers: {
      Authorization: 'Basic V2luZG93bWFj',
    },
  }).catch(err => {console.log(err)});


  console.log(repos);
  return repos;
};

export default getAPI;