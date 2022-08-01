const randomRecipe = document.querySelector('#recipe-random');

randomRecipe.addEventListener('submit', async (event) => {
    event.preventDefault();


const response = await fetch('/api/random', {
    method: 'GET',
    body: JSON.stringify({query:document.querySelecto().value}),
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
