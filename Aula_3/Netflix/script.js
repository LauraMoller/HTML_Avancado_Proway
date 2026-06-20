function changeTheme() {
    document.body.classList.toggle("light");
}

const movies = [];

for (let i = 1; i <= 20; i++) {
    movies.push({
        name: "Filme " + i,
        img: "https://picsum.photos/200/300?random=" + i
    });
}

function render(list) {
    const container = document.getElementById("movies");
    container.innerHTML = "";

    list.forEach(m => {
        container.innerHTML += `
            <div class="card">
                <img src="${m.img}" />
                <p>${m.name}</p>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener(
    "input", (e) => {
        const value = e.target.value.toLowerCase();

        const newList = movies.filter(m => 
            m.name.toLowerCase().includes(value)
        );

        render(newList);
    }
);

render(movies);