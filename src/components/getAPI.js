import axios from 'axios';

const getLanguages = async (url) => {
  const languages = await axios
    .get(url, {
      headers: {
        Authorization: 'Basic V2luZG93bWFj',
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return languages.data;
};

const getAPI = async () => {
  const repos = await axios
    .get('https://api.github.com/users/Windowmac/repos', {
      headers: {
        Authorization: 'Basic V2luZG93bWFj',
      },
    })
    .catch(console.log);

  console.log('repos are: ', repos);
  const languages = {};
  const langArray = repos.data.map((repo) => getLanguages(repo.languages_url));
  console.log('langArr: ', langArray);

  await Promise.all(langArray).then((langArray) => {
    langArray.forEach((lang) => {
      for (const key in lang) {
        if (languages[key]) {
          languages[key] += lang[key];
        } else {
          languages[key] = lang[key];
        }
      }
    });
  });

  console.log('languages are: ', languages);
  return languages;
};

export default getAPI;
