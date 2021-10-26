const LinksSocialMidia = {
    //objeto
    github: 'FelipheFaleiros',
    youtube: '',
    facebook: 'feliphefaleiros',
    instagram: 'feliphefaleiros',
    twitter: 'Feliphe001',
    apiGit: "FelipheFaleiros",
};
  /*const github = "FelipheFaleiros"
  const youtube = "FelipheFaleiros"
  const facebook = "FelipheFaleiros"
  const instagram = "FelipheFaleiros"
  const twitter = "FelipheFaleiros"*/

  /**
   * camelCase
   * PascalCase
   * snake_case
   */

  function changeSocialMediaLinks() {
    //document.getElementById("userName").textContent = "Olivia" //necessário ser feito dessa forma quando NÃO tem o id
    //userName.textContent = "Maria" //com id

    //lastro de repetição
    for (let li of socialLinks.children) { //id do ul e referenciando ao filho(as classe que foram setadas)
        const social =li.getAttribute("class");
      
      li.children[0].href=`https://${social}.com/${LinksSocialMidia[social]}`

    //   alert(li.children[0])
    }
  }

  changeSocialMediaLinks();

  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${LinksSocialMidia.apiGit}`

      fetch(url)
      .then(response => response.json())
    //   .then(data => alert(data.company))
      .then( data => {
        userName.textContent = data.name
        userBio.textContent = data.bio 
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login

      })
      //fetch -> pegara oque for respondido na url, nesse caso será um arq .json
      //then -> promessa de pegar algo 
  }    
  getGitHubProfileInfos()
