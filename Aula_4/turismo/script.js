function favoritar(local) {
    localStorage.setItem("favoritos", local);
}

if("seviceWorker" in navigator){
    navigator.serviceWorker
        .register("sw.js")
        .then(() => console.log("SW registrado com sucesso"))
        .catch(err => console.log("Erro: ", err))
}