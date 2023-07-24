const exploreBrisbaneContainer = document.querySelector('.explore-brisbane-container');

const topTenPlacesToVisit = ["South Bank Parklands", "Lone Pine Koala Sanctuary", "Story Bridge",
  "Queensland Museum and Sciencentre", "City Botanic Gardens", "Gallery of Modern Art (GOMA)",
  "Mount Coot-tha", "Streets Beach", "Brisbane Powerhouse"
];

const paragraphTexts = {
  "south-bank-parklands": "The South Bank Parklands is a mesmerizing destination located on the southern banks of the Brisbane River in the vibrant city of Brisbane, Australia. With its picturesque parklands, stunning riverfront views, and a wealth of recreational and cultural offerings, South Bank Parklands is a must-visit for both locals and tourists alike. \
  Step into a world of natural beauty as you wander through the parklands and gardens.Lush green spaces, vibrant flowers, and towering trees create a serene and inviting atmosphere.Find your slice of paradise at Streets Beach, a stunning man- made beach and lagoon surrounded by golden sand and swaying palm trees.Relax under the sun, take a refreshing dip, or simply unwind with a picnic by the water's edge.",

  "lone-pine-koala-sanctuary": "As you enter the sanctuary, you'll be greeted by the gentle rustling of eucalyptus trees and the sweet scent of the Australian bush. The sanctuary is home to a diverse range of native wildlife, including cuddly koalas, curious kangaroos, playful dingoes, and fascinating reptiles. Wander through the tranquil pathways and observe these magnificent creatures in their natural habitats, \
   learning about their behaviors, conservation efforts, and the importance of preserving their fragile ecosystems. One of the highlights of Pine Koala Sanctuary is the opportunity to get up close and personal with the adorable koalas. Experience the joy of cuddling a koala, feeling its soft fur against your skin, and marveling at its gentle nature. Learn about the conservation efforts in place to protect these iconic marsupials and the important role they play in Australia's ecosystem.",

  "story-bridge": "The Story Bridge in Brisbane is an architectural marvel that spans the picturesque Brisbane River. It offers stunning panoramic views of the city's skyline, river, and surrounding landscape. Built during the Great Depression, the bridge carries a rich history of resilience and community unity. Visitors can embark on an exhilarating climb to the bridge's summit, conquering their fears and enjoying breathtaking vistas.\
   At night, the bridge comes alive with a captivating Symphony of Lights, illuminating the surroundings with a magical display. Guided tours offer insights into the bridge's construction and its significance in shaping the city's development. The Story Bridge is a must-visit landmark that promises adventure, scenic beauty, and a glimpse into Brisbane's past.",

  "queensland-museum-and-sciencentre": "The Queensland Museum and Sciencentre in Brisbane is a captivating destination that combines history, culture, and science. It offers lifelike displays, interactive exhibits, and multimedia presentations to explore Queensland's diverse heritage. The Sciencentre provides hands-on activities and experiments to ignite curiosity and uncover the secrets of the natural world. Special exhibitions, events, and educational programs cater to different interests, \
  offering opportunities to expand knowledge. With modern facilities and a commitment to education, the museum provides a stimulating and enriching experience for visitors of all ages. It is a must-visit destination for history buffs, science enthusiasts, and anyone curious about the world.",

  "city-botanic-gardens": "The City Botanic Gardens in Brisbane is a serene urban oasis with lush green spaces, stunning floral displays, and meandering pathways. It offers a peaceful escape from the city's hustle and bustle, providing breathtaking views of the Brisbane River and city skyline. The gardens showcase a diverse range of plant species from around the world,\
   including unique Australian flora. Visitors can enjoy leisurely walks, picnics, and moments of relaxation amidst the tranquil surroundings. The gardens also offer recreational activities and serve as a cultural hub with sculptures and historical monuments. It's a must-visit destination for nature lovers and those seeking a rejuvenating experience in the heart of the city.",

  "gallery-of-modern-art-(goma)": "The Gallery of Modern Art (GOMA) is a must-visit destination for art enthusiasts in Brisbane. Located in the heart of the city, GOMA showcases a diverse range of contemporary art from both Australian and international artists. The gallery features an impressive collection of paintings, sculptures, installations, and multimedia artworks that will captivate your imagination.\
    With its modern and spacious architecture, GOMA provides a vibrant and immersive environment for art appreciation. Don't miss the opportunity to explore thought-provoking exhibitions, attend engaging events, and participate in interactive workshops. Whether you're an art lover or simply curious about contemporary creativity, GOMA offers a unique and inspiring experience that should not be missed during your visit to Brisbane.",
  "mount-coot-tha": "Mount Coot-tha, located in Brisbane, Australia, is a popular tourist destination offering stunning panoramic views of the city and surrounding areas. The mountain is home to the beautiful Brisbane Botanic Gardens, showcasing a diverse range of plant species. Visitors can explore the numerous walking trails and enjoy picnics in the lush greenery. \
  For astronomy enthusiasts, the Sir Thomas Brisbane Planetarium provides a fascinating journey through the universe with immersive shows and interactive exhibits. Mount Coot-tha is a perfect spot to relax, unwind, and appreciate the natural beauty of Brisbane while enjoying outdoor activities and attractions.",

  "streets-beach": "Streets Beach is a stunning man-made beach located in the heart of Brisbane, offering a unique urban oasis for locals and visitors alike. This inviting beach is nestled along the picturesque South Bank Parklands, providing a delightful escape from the city's hustle and bustle. With its sparkling lagoon-style pool, soft white sand, and palm trees, Streets Beach creates a tropical paradise in the heart of the city.\
   Visitors can relax on the beach, take a refreshing swim in the crystal-clear water, or simply bask in the sun while enjoying the beautiful views of the Brisbane River. It's the perfect spot to unwind, soak up the sun, and enjoy a beach experience right in the heart of Brisbane.",

  "brisbane-powerhouse": "Brisbane Powerhouse is a vibrant cultural hub located in the heart of Brisbane, Australia. Housed in a historic power station, this iconic venue has been transformed into a dynamic arts and entertainment precinct. It offers a diverse program of live performances, including theater, music, comedy, dance, and more. The intimate theaters and unique performance spaces provide a captivating setting for artists to showcase their talents. \
   In addition to the exciting lineup of shows, Brisbane Powerhouse also features art galleries, workshops, and a bustling riverside bar and restaurant. With its blend of creativity, history, and stunning river views, Brisbane Powerhouse is a must-visit destination for art lovers and culture enthusiasts."
};

let places = [];
topTenPlacesToVisit.forEach(place => {
  const locationDiv = document.createElement('div');
  locationDiv.classList.add("location-div");

  const headingText = document.createElement("h1");
  headingText.classList.add("heading-text");
  headingText.textContent = place;

  const img_name = place.toLowerCase().replace(/\s+/g, "-");
  places.push(img_name);
  const image = document.createElement("img");
  const paragraph = document.createElement("p");

  image.src = `../images/explore_brisbane_images/${img_name}.jpg`;
  paragraph.textContent = paragraphTexts[img_name];

  locationDiv.appendChild(headingText);
  locationDiv.appendChild(image);
  locationDiv.appendChild(paragraph);

  exploreBrisbaneContainer.appendChild(locationDiv);
});