function popup() {
  //la fonction principale
  function affiche() {
    // une fonction que permet d'afficher la section #info qui est cachée
    const section = document.getElementById("info");
    section.style.display = "block";
  }

  function hide() {
    // une fonction qui permet de recacher la section #info
    const section = document.getElementById("info");
    section.style.display = "none";
  }
  let list = document.querySelectorAll("li");
  const exit = document.getElementById("exit");
  let vid = document.querySelector(".video");
  let titl = document.querySelector("#info div h1");
  let text = document.querySelector("#info div p");
  list.forEach(function (item, index) {
    // indexer les li
    item.addEventListener("click", () => {
      // ecouter le click de li
      affiche();
      switch (
        index // on ajoute a chaque li ces propres modifications
      ) {
        case 0: // la premiere li
          titl.textContent = "Oran"; // donner le titre
          text.textContent = //donner la description
            "Oran est une ville portuaire fascinante située sur la côte méditerranéenne de l'Algérie. Cette ville offre une expérience touristique riche et diversifiée. Les visiteurs peuvent se perdre dans les ruelles animées de la vieille ville, où l'architecture coloniale française se mêle aux influences arabes et andalouses . Avec son histoire riche, sa beauté naturelle et son ambiance vibrante, Oran est une destination incontournable pour les voyageurs en quête d'authenticité et de découverte.";
          vid.src = // video youtube
            "https://www.youtube.com/embed/66JUxZ5CczM?si=kiNqahn_HvTf4pSi";
          break;
        case 1:
          vid.src =
            "https://www.youtube.com/embed/6yXFUs8A0rc?si=5H67PFcHyvbDfqQa";
          titl.textContent = "Djanet";
          text.textContent =
            "Djanet, oasis ensorcelante au cœur du Sahara algérien, évoque un monde de mystère et de beauté désertique. Nichée entre d'immenses dunes de sable doré et des formations rocheuses sculptées par le vent. Djanet, porte d'entrée vers le fabuleux massif du Tassili n'Ajjer, séduit les voyageurs avec ses trésors préhistoriques, ses peintures rupestres millénaires et son atmosphère envoûtante, faisant de chaque exploration une aventure inoubliable dans le désert";
          break;
        case 2:
          vid.src =
            "https://www.youtube.com/embed/nmwvLSi3KP8?si=KcfnFWVbvYjeU7b6";
          titl.textContent = "Alger";
          text.textContent =
            "Alger, la fascinante capitale algérienne, éblouit par sa diversité culturelle, son histoire riche et son dynamisme effervescent. Nichée entre la mer Méditerranée et les montagnes de l'Atlas, la ville offre des panoramas à couper le souffle . Alger  séduit les visiteurs par son charme intemporel, son art de vivre méditerranéen et son effervescence culturelle, faisant d'elle une destination incontournable pour les voyageurs en quête d'authenticité et de découvertes";
          break;
        case 3:
          vid.src = "//www.youtube.com/embed/pHmZtSnySgE?si=3dtqWeUHNcezeTAd";
          titl.textContent = "Tlemcen";
          text.textContent =
            "Telemcen, cette ville historique nichée dans les contreforts des montagnes de l'Atlas . Connue comme la 'Perle du Maghreb', elle séduit par ses ruelles étroites où se mêlent l'architecture mauresque et les influences ottomanes. Les jardins luxuriants et les fontaines ornées de carreaux de faïence offrent des oasis de fraîcheur . Tlemcen est un  véritable joyau du patrimoine algérien, invite à un voyage dans le temps où le charme oriental opère à chaque instant";
          break;
        case 4:
          vid.src =
            "https://www.youtube.com/embed/nMVpkdI6tb8?si=TnMz01keBfL4vUqF";
          titl.textContent = "Brezina";
          text.textContent =
            "Plongez au cœur de l'Algérie et découvrez Brezina, une ville nichée entre les montagnes et les plaines. Brezina c'est bien plus qu'une destination de voyage, c'est une invitation à l'émerveillement et à la découverte. Laissez-vous séduire par le charme envoûtant de cette ville authentique, où chaque instant réserve son lot de surprises et d'émotions";
          break;
        case 5:
          vid.src =
            "https://www.youtube.com/embed/wGRy6pt_XsI?si=YXg0kkLVsba2o21y";
          titl.textContent = "Béjaïa";
          text.textContent =
            "Béjaïa, ville côtière d'Algérie, berceau d'une riche histoire méditerranéenne. Entre ses ruelles animées et ses plages scintillantes, elle charme par son ambiance unique. Port antique où se mêlent les cultures, elle incarne la diversité et la beauté de son pays. Nichée entre mer et montagne, Béjaïa offre un cadre enchanteur, symbole de l'héritage millénaire de l'Algérie";
          break;
      }
    });
    exit.addEventListener("click", () => {
      // au moment du click sur le button la fonction hide ce declanche
      hide();
    });
  });
}
popup(); //appel de la fonction principale
