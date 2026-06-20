const TOTAL_SONGS = 20;

const songs = buildSongs(TOTAL_SONGS);

let currentTheme = "dark";

document.addEventListener("DOMContentLoaded", () => {
    render(songs);
    bindSearch();
    bindThemeToggle();
});

function buildSongs(total) {
    const list = [];

    for (let i = 1; i <= total; i++) {
        list.push({
            id: i,
            name: "Música " + i,
            artist: "Artista " + i,
            img: "https://picsum.photos/200?random=" + i
        });
    }

    return list;
}

function render(list) {
    const container = document.getElementById("songs");
    container.innerHTML = "";

    list.forEach(song => container.appendChild(createSongCard(song)));
}

function createSongCard(song) {
    const card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => play(song));

    card.innerHTML = `
        <img src="${song.img}" alt="Capa de ${song.name}"/>
        <h3>${song.name}</h3>
        <p>${song.artist}</p>
    `;

    return card;
}

function play(song) {
    document.getElementById("nowPlaying").innerText = "Tocando: " + song.name + " - " + song.artist;
}

function bindSearch() {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", (event) => {
        const term = event.target.value.trim().toLowerCase();
        const filtered = filterSongs(songs, term);
        render(filtered);
    });
}

function filterSongs(list, term) {
    if (!term) {
        return list;
    }

    return list.filter(song =>
        song.name.toLowerCase().includes(term) ||
        song.artist.toLowerCase().includes(term)
    );
}

function bindThemeToggle() {
    const themeButton = document.querySelector(".topbar button");
    themeButton.addEventListener("click", changeTheme);
}

function changeTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.classList.toggle("light-theme", currentTheme === "light");

    const themeButton = document.querySelector(".topbar button");
    themeButton.textContent = currentTheme === "dark" ? "🌕" : "☀️";
}
