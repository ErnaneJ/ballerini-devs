const defaultAvatar = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg";
const devs =  [
  {
    id: 0,
    name: "Ernane Ferreira", 
    description: "Descrição teste", 
    avatar: defaultAvatar, 
    office: 'Desenvolvedor',
    nickGithub: 'ErnaneJ',
    linkedin: '',
    website: '',
  },
  {
    id: 1,
    name: "José Ferreira", 
    description: "Descrição teste", 
    avatar: defaultAvatar, 
    office: 'Desenvolvedor',
    nickGithub: 'ErnaneJ',
    linkedin: '',
    website: '',
  },{
    id: 2,
    name: "José da silva", 
    description: "Descrição teste", 
    avatar: defaultAvatar, 
    office: 'Desenvolvedor',
    nickGithub: 'ErnaneJ',
    linkedin: '',
    website: '',
  }
];

const devStructure = {
  name: "", 
  description: "", 
  avatar: defaultAvatar, 
  office: '',
  nickGithub: '',
  linkedin: '',
  website: '',
}

module.exports = {devs, devStructure}