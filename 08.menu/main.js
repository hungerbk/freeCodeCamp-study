// 배열
// 객체
// forEach()
// DOMContentLoaded
// map, reduce, filter
// innerHTML
// includes 메서드
const menu = [
  {
    id: 1,
    title: "buttermlik pancakes",
    category: "breakfast",
    price: 15.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ratione eos nemo ipsa adipisci porro, aperiam blanditiis sint repellendus tenetur est eligendi autem sit pariatur praesentium sunt iste nostrum ex?",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta a ad nobis vitae ipsa deleniti veritatis accusamus magni minus quae.",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eaque esse facilis vero fuga nostrum dolores velit, libero pariatur, sed voluptates animi, totam a architecto.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, minus? Cumque vitae voluptate saepe fugit numquam amet iste in soluta doloremque quam hic quia, tenetur corrupti dolorem quae. Nihil, distinctio.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 15.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat recusandae quisquam voluptates ut in cum dignissimos obcaecati doloremque fuga. Perferendis et placeat adipisci nihil, cumque, labore cupiditate ipsum sit repudiandae fugiat sequi perspiciatis incidunt veniam veritatis tempore eius sint reprehenderit.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam in quidem, saepe possimus cupiditate facilis nobis ea magnam! Saepe, vel est. Eaque provident suscipit voluptatibus, molestiae eum sapiente aliquid at magnam itaque nihil.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione rem similique laborum laudantium! Ut hic alias dolorum nostrum quisquam?",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis iusto voluptas voluptates culpa odio tenetur enim ipsa quidem modi quasi, dicta at nemo expedita laboriosam hic.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis iusto voluptas voluptates culpa odio tenetur enim ipsa quidem modi quasi, dicta at nemo expedita laboriosam hic.",
  },
  {
    id: 8,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "../03.reviewCarousel/profile1.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veritatis iusto voluptas voluptates culpa odio tenetur enim ipsa quidem modi quasi, dicta at nemo expedita laboriosam hic.",
  },
];

const menuContainer = document.querySelector(".menu-container");
const filterList = document.querySelector(".filter-list");
const filterBtns = document.querySelectorAll(".filter-button");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);

  const categories = menu.reduce(
    (acc, cur) => {
      !acc.includes(cur.category) ? acc.push(cur.category) : acc;
      return acc;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<li class="filter-item"><button class="filter-button" type="button" data-id=${category}>${category}</button></li>`;
    })
    .join("");

  filterList.innerHTML = categoryBtns;
});

// filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      const filteredMenu = menu.filter((menuItem) => menuItem.category === category);
      displayMenuItems(filteredMenu);
    }
  });
});

function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="menu-photo" alt=${item.title} />
    <div class="menu-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="menu-price">$${item.price}</h4>
      </header>
      <p class="menu-desc">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join(""); // 불필요한 공백 제거
  menuContainer.innerHTML = displayMenu;
}
