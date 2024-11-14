const breakfastMenu = ['Pancakes- ₹100', 'Eggs Benedict - ₹80', 'Oatmeal - ₹50', 'Frittata - ₹120'];
const mainCourseMenu = ['Steak', 'Pasta','Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

const maincourseMenuItemsHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('mainCourseMenuItems').innerHTML = maincourseMenuItemsHTML;

const dessertMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;






// let mainCourseItem = '';
// mainCourseMenu.forEach((item, index) => {
// mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
// document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// let dessertItem = '';
// for (let i = 0; i < dessertMenu.length; i++) {
//     dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
// document.getElementById('dessertMenuItems').innerHTML = dessertItem;
