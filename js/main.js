// Lista de mapas — adicione entradas aqui para novos mapas
const maps = [
  { id: "map1", title: "Mapa de Exemplo 1", description: "Mapa com alguns marcadores de exemplo.", file: "maps/map1.html" },
  { id: "map2", title: "Mapa de Exemplo 2", description: "Outro mapa — duplique e edite para novos projetos.", file: "maps/map2.html" }
];

function renderMapsList() {
  const ul = document.getElementById('maps');
  maps.forEach(m => {
    const li = document.createElement('li');
    li.innerHTML = `<a class="map-link" href="${m.file}">${m.title}</a><div class="map-desc">${m.description}</div>`;
    ul.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', renderMapsList);
