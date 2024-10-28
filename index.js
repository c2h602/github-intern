const btn = document.getElementById('btn');
const repoList = document.querySelector('.repo__list');
const usernameInput = document.getElementById('usernameInput');

const exampleRepos = ['repo1', 'repo2', 'repo3'];

function createRepoList() {
    const username = usernameInput.value.trim();

    repoList.innerHTML = '';

    exampleRepos.forEach(repo => {

        const newRepo = document.createElement('li');
        newRepo.classList.add('repo__item');

        const repoLink = document.createElement('a');
        repoLink.href = `https://github.com/${username}/${repo}`;
        repoLink.textContent = `${username} / ${repo}`;
        repoLink.classList.add('repo__username');

        const repoName = document.createElement('span');
        repoName.classList.add('repo__name');

        repoLink.appendChild(repoName);
        newRepo.appendChild(repoLink);
        repoList.appendChild(newRepo);
    })

}

btn.addEventListener('click', createRepoList)