const searchInput = document.getElementById("searchInput");

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();

    const repoItems = document.querySelectorAll('.repo__item');

    repoItems.forEach(function(item) {
        const repoName = item.querySelector('.repo__link').textContent.toLowerCase();

        if (repoName.includes(filter)) {
            item.style.display = '';
        }
        else item.style.display = 'none'
    })
})

