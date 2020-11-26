export function desserts() {
  const tabsDiv = document.getElementById('tabsDiv');
  const dessertDiv = document.createElement('div');
  const dessertImg = document.createElement('img');
  const contentDessert = document.createElement('div');
  const dessertParagraphs = document.createElement('p');
  const appetizers = ['Cheesecake with Cranberry Glaze and Sugared Cranberries', 'Caramel Bars', 'Cranberry-Orange Bundt® Cake', 'Almond Milk Chocolate Pudding', "Russian Honey Cake", 'Pumpkin Spice Latte Coffee Cake'];
  appetizers.forEach(element => {
    dessertParagraphs.innerHTML += "-" + " " + element + ";<br>";
  });
  tabsDiv.appendChild(dessertDiv);
  dessertDiv.appendChild(dessertImg);
  dessertDiv.appendChild(contentDessert);
  dessertDiv.setAttribute('id', 'Desserts');
  contentDessert.appendChild(dessertParagraphs);
  dessertDiv.className = 'mx-10 tab-pane';
  dessertParagraphs.className = 'font-bold text-lg text-yellow-900';
  dessertImg.setAttribute('src', '/src/assets/imgs/dessert.png');
  dessertImg.className = 'w-full rounded';
}