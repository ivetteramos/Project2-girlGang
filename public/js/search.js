const recipeSearch = document.querySelector('#recipe-search');

recipeSearch.addEventListener('submit', async (event) => {
    event.preventDefault();


const response = await fetch('/api/search', {
    method: 'POST',
    body: JSON.stringify({query:document.querySelector('#search-value').value}),
    headers: {
        'Content-Type': 'application/json'
    }
});
if (response.ok) {
    const data = await response.json();
    document.write(JSON.stringify(data));
} else {
  alert('Failed to search item.');
};
});
