const defaultAvatar = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg";
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
  return await fetch('https://api-balle-dev.herokuapp.com/dev')
  .then(response => response.json())
  .then(data => {
    applyDevs(data)
    if(setLoading) setLoading(false)
  })
};

export const addNewDev = async (dev, updateDevs) => {
  return await fetch('https://api-balle-dev.herokuapp.com/dev', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dev)
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    getAllDevs(updateDevs);
  })
};

export const deleteDev = async (dev, updateDevs) => {
  return await fetch(`https://api-balle-dev.herokuapp.com/dev/${dev.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    getAllDevs(updateDevs);
  })
};

export const updateDev = async (dev, updateDevs) => {
  return await fetch(`https://api-balle-dev.herokuapp.com/dev/${dev.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dev)
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    getAllDevs(updateDevs);
  })
};

export const loadUserToGithub = async (dev, updateDev) => {
  const resp = await fetch(`https://api.github.com/users/${dev.nick_github}`);
  const respData = await resp.json();
  updateDev({...dev, 
    avatar: respData.avatar_url,
    description: respData.bio,
    name: respData.name,
    website: respData.blog
  });
}