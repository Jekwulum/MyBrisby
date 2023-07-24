const communitiesContainer = document.getElementById("communities");
communitiesContainer.classList.add("communities");

const communitiesTexts = {
  "African Communities": "Brisbane is home to various African communities from countries such as Sudan, Ethiopia, Somalia, and Nigeria. These communities bring their unique cultural traditions, music, and cuisines to the city.",
  "Asian Communities": "The Asian community in Brisbane is quite diverse, with significant populations from countries like China, India, Japan, Korea, Vietnam, and the Philippines. Each community contributes its own cultural events, festivals, and culinary delights.",
  "Latin American Communities": "Brisbane has a growing Latin American community with people from countries like Brazil, Colombia, Argentina, and Chile. This community brings its vibrant music, dance, and lively festivals to the city.",
  "Middle Eastern Communities": "There are several Middle Eastern communities in Brisbane, including those from Lebanon, Iraq, Iran, and Syria. These communities add their rich traditions, art, and cuisine to the city's cultural landscape.",
  "European Communities": "Brisbane is home to a diverse range of European communities, including those from the United Kingdom, Germany, Italy, Greece, and the Netherlands. Each community contributes its unique customs, celebrations, and culinary delights.",
  "Pacific Islander Communities": "Brisbane has a significant Pacific Islander population, including people from countries such as Fiji, Samoa, Tonga, and Papua New Guinea. These communities bring their colorful traditions, dance, and music to the city.",
};

let cardCounter = 0;
let groupElement;

for (const key in communitiesTexts) {
  // Create a new groupElement every two cards
  if (cardCounter % 2 === 0) {
    groupElement = document.createElement("div");
    groupElement.classList.add("group-element");
    communitiesContainer.appendChild(groupElement);
  }

  const cardElement = document.createElement("div");
  cardElement.classList.add("card-element");

  const heading = document.createElement("h2");
  heading.textContent = key;

  const image = document.createElement("img");
  image.src = `../images/communities_img/${key}.jpg`;

  const content = document.createElement("p");
  content.classList.add('event-paragraph');
  content.textContent = communitiesTexts[key];

  cardElement.appendChild(heading);
  cardElement.appendChild(image);
  cardElement.appendChild(content);

  groupElement.appendChild(cardElement);

  cardCounter++;
}