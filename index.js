// import { Octokit } from "@octokit/core";
import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
    auth: 'YOUR TOKEN'
})

const btn = document.getElementById('btn');
const repoList = document.querySelector('.repo__list');
const usernameInput = document.getElementById('usernameInput');

async function createRepoList() {
    const username = usernameInput.value.trim();

    repoList.innerHTML = '';

    const response = await octokit.request(`GET /users/${username}/repos`, {
        username: username,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    response.data.forEach(repo => {

        const newRepo = document.createElement('li');
        newRepo.classList.add('repo__item');

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = `${repo.full_name}`;
        repoLink.classList.add('repo__username');

        const repoDescription = document.createElement('p');
        repoDescription.classList.add('repo__description');
        repoDescription.textContent = `${repo.description}`;
        if (!repo.description) {
            repoDescription.textContent = '';
        }

        const repoLanguage = document.createElement('span');
        repoLanguage.classList.add('repo__language');
        repoLanguage.textContent = `${repo.language}`;
        if (!repo.language) {
            repoLanguage.style.display = 'none';
        }

        const repoStars = document.createElement('span');
        repoStars.classList.add('repo__stars');
        repoStars.textContent = `⭐ ${repo.stargazers_count}`;

        const repoForks = document.createElement('span');
        repoForks.classList.add('repo__forks');
        repoForks.textContent = `🍴 ${repo.forks_count}`;

        const repoDate = document.createElement('span');
        repoDate.classList.add('repo__date');
        const date = new Date(repo.updated_at);
        repoDate.textContent = `Изменено ${date.toLocaleDateString('ru', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })}`;


        newRepo.appendChild(repoLink);
        newRepo.appendChild(repoDescription);
        newRepo.appendChild(repoLanguage);
        newRepo.appendChild(repoStars);
        newRepo.appendChild(repoForks);
        newRepo.appendChild(repoDate);
        repoList.appendChild(newRepo);

    })

}

btn.addEventListener('click', createRepoList)