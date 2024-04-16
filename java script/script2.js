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
          titl.textContent = "Paris"; // donner le titre
          text.textContent = //donner la description
            "Paris, la Ville Lumière, exerce une fascination intemporelle grâce à son mélange inimitable de glamour, d'histoire et d'art. Ses avenues bordées d'arbres, ses monuments emblématiques tels que la Tour Eiffel et Notre-Dame, et ses célèbres musées comme le Louvre attirent des millions de visiteurs chaque année. Paris, cité éternelle, continue de captiver et d'inspirer chacun de ses visiteurs, offrant une expérience aussi riche que variée";
          vid.src =
            "https://www.youtube.com/embed/8Sucd2UZHiM?si=rnrOyh9S7uykexoy"; // video youtube
          break;
        case 1:
          vid.src =
            "https://www.youtube.com/embed/KoFISpwjl1s?si=632H-gcjBGP269Of";
          titl.textContent = "Hawaï";
          text.textContent =
            "Hawaï, cet archipel paradisiaque au milieu de l'océan Pacifique, est une véritable invitation à l'émerveillement. Avec ses plages de sable blanc ourlées de palmiers, ses volcans majestueux et ses cascades rafraîchissantes. L'esprit aloha qui règne sur l'archipel, synonyme de chaleur humaine, d'hospitalité et de respect de la nature, imprègne chaque expérience, faisant de Hawaï bien plus qu'une destination de vacances";
          break;
        case 2:
          vid.src =
            "https://www.youtube.com/embed/eV6lTEY95yY?si=BDRDU7av1FsfEmoL";
          titl.textContent = "Istanbul";
          text.textContent =
            "Istanbul est une ville envoûtante où se mêlent histoire millénaire et modernité flamboyante. Ses monuments emblématiques, tels que la majestueuse mosquée bleue et la basilique Sainte-Sophie, témoignent de son riche passé impérial. Les ruelles animées du Grand Bazar, regorgeant de trésors artisanaux et d'épices exotiques, offrent une immersion sensorielle dans la vie quotidienne de la ville";
          break;
        case 3:
          vid.src =
            "https://www.youtube.com/embed/p3fm5ADktP4?si=9j3mUjoX7zkt4TAX";
          titl.textContent = "Dubai";
          text.textContent =
            "Dubai, joyau des Émirats arabes unis, éblouit par son audace architecturale et sa démesure. Entre les gratte-ciel vertigineux comme le Burj Khalifa, la plus haute tour du monde, et les îles artificielles en forme de palmiers, la ville défie les limites de l'imagination humaine. Dubai une atmosphère unique où se mêlent tradition et modernité, faisant de cette ville une destination incontournable pour les voyageurs en quête d'émerveillement";
          break;
        case 4:
          vid.src =
            "https://www.youtube.com/embed/11hdtmneAVE?si=Pnz3DZpPJV8SOLFe";
          titl.textContent = "New York";
          text.textContent =
            "New York, la ville qui ne dort jamais, est une métropole bouillonnante d'énergie et de diversité. Avec ses gratte-ciel emblématiques comme l'Empire State Building et le One World Trade Center, ses quartiers animés tels que Times Square et Greenwich Village, et ses institutions culturelles de renommée mondiale comme le Metropolitan Museum of Art et Broadway, la ville offre une multitude d'expériences uniques";
          break;
        case 5:
          vid.src =
            "https://www.youtube.com/embed/BFS9n4B_2xA?si=hypi-NZhoQEEQCuH";
          titl.textContent = "Bali";
          text.textContent =
            "Bali, joyau insulaire de l'Indonésie, évoque un paradis tropical où la nature luxuriante se mêle à une culture riche et colorée. Avec ses plages de sable blanc bordées de palmiers, ses rizières en terrasses d'un vert éclatant et ses temples mystiques nichés dans les collines. Cette île incarne l'équilibre parfait entre détente et découverte, faisant de chaque séjour une expérience inoubliable dans un véritable coin de paradis";
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
