import axios from 'axios';

const getLanguages = async (url) => {
  const languages = await axios.get(url, {
    headers: {
      Authorization: 'Basic V2luZG93bWFj',
    },
  }).catch(err => {console.log(err)});

  return languages.data;
}

const getAPI = async () => {
  const repos = await axios.get('https://api.github.com/users/Windowmac/repos', {
    headers: {
      Authorization: 'Basic V2luZG93bWFj',
    },
  }).catch(err => {console.log(err)});
  console.log('repos are: ', repos);

  const languages = {};
  repos.data.forEach(async (repo) => await getLanguages(repo.languages_url).then((obj) => {
    for (const key in obj){
      if(languages[key]){
        languages[key] += obj[key];
      } else {
        languages[key] = obj[key];
      }
    }
  }));
  console.log('languages are: ', languages);
  return languages;
};

export default getAPI;