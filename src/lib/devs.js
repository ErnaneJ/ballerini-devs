const defaultAvatar  = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg";
const endpointApi    = 'https://api-balle-dev.herokuapp.com'; // 'http://localhost:3001'
const endpointGithub = 'https://api.github.com';

export const devStructure = {
  "avatar": defaultAvatar,
  "name": "",
  "description": "",
  "office": "",
  "nick_github": "",
  "linkedin": "",
  "website": "",
}
export const getAllDevs = async (applyDevs, setLoading=null) => {
  if(setLoading) setLoading(true)
  return await fetch(`${endpointApi}/dev`)
  .then(response => response.json())
  .then(data => {
    applyDevs(data)
    if(setLoading) setLoading(false)
  }).catch(e => console.error(e))
};

export const addNewDev = async (dev, updateDevs) => {
  return await fetch(`${endpointApi}/dev`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dev)
  }).then(response => response.json())
  .then(data => {
    getAllDevs(updateDevs);
  }).catch(e => console.error(e))
};

export const deleteDev = async (dev, updateDevs) => {
  return await fetch(`${endpointApi}/dev/${dev.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    getAllDevs(updateDevs);
  }).catch(e => console.error(e))
};

export const updateDev = async (dev, updateDevs) => {
  return await fetch(`${endpointApi}/dev/${dev.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dev)
  }).then(response => response.json())
  .then(data => {
    getAllDevs(updateDevs);
  }).catch(e => console.error(e))
};

export const loadUserToGithub = async (dev, updateDev) => {
  const resp = await fetch(`${endpointGithub}/users/${dev.nick_github}`);
  const respData = await resp.json();
  updateDev({...dev, 
    avatar: respData.avatar_url ?? '',
    description: respData.bio ?? '',
    name: respData.name ?? '',
    website: respData.blog ?? ''
  });
}