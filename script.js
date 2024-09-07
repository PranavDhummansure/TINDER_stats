let users = [
  {
    profilepic:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    displaypic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 4,
    location: "DELHI,INDIA",
    name: "Niharika",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-spotify-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dolorum odio nobis libero incidunt ea officia nulla tempore mollitia aliquam, distinctio delectus eligendi commodi. Fugit officia vitae iste? Dolores, expedita.",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1586695263032-5a93ed0f6e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3J0JTIwaGFpcmVkJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
    displaypic:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 14,
    location: "MUMBAI,INDIA",
    name: "Sunidhi",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-spotify-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-volume-up-fill"></i>`,
        interest: "singing",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dolorum odio nobis libero incidunt ea officia nulla tempore mollitia aliquam, distinctio delectus eligendi commodi. Fugit officia vitae iste? Dolores, expedita.",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBnaXJsfGVufDB8fDB8fHww",
    displaypic:
      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 6,
    location: "PUNJAB,INDIA",
    name: "Nishia",
    age: 27,
    interests: [
      {
        icon: `<i class="ri-vidicon-2-fill"></i>`,
        interest: "camera",
      },
      {
        icon: `<i class="ri-spotify-fill"></i>`,
        interest: "painting",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dolorum odio nobis libero incidunt ea officia nulla tempore mollitia aliquam, distinctio delectus eligendi commodi. Fugit officia vitae iste? Dolores, expedita.",
    isFriend: null,
  },
  {
    profilepic:
      "https://plus.unsplash.com/premium_photo-1661964412228-d4c51596f09a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBnaXJsfGVufDB8fDB8fHww",
    displaypic:
      "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    pendingMessage: 9,
    location: "HARYANA,INDIA",
    name: "Phogat",
    age: 33,
    interests: [
      {
        icon: `<i class="ri-spotify-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-vidicon-2-fill"></i>`,
        interest: "camera",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dolorum odio nobis libero incidunt ea officia nulla tempore mollitia aliquam, distinctio delectus eligendi commodi. Fugit officia vitae iste? Dolores, expedita.",
    isFriend: null,
  },
  {
    profilepic:
      "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBnaXJsfGVufDB8fDB8fHww",
    displaypic:
      "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBnaXJsfGVufDB8fDB8fHww",
    pendingMessage: 1,
    location: "GOA,INDIA",
    name: "Shivani",
    age: 29,
    interests: [
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
      {
        icon: `<i class="ri-hand-heart-fill"></i>`,
        interest: "art",
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, dolorum odio nobis libero incidunt ea officia nulla tempore mollitia aliquam, distinctio delectus eligendi commodi. Fugit officia vitae iste? Dolores, expedita.",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

let curr = 0;
function setData(index){
    select(".prfimg img").src = users[index].profilepic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;
  
    let clutter = "";
  
    users[index].interests.forEach(function (interest) {
      clutter += `<div class="tag items-center bg-white/30 flex justify-center gap-2 rounded-full px-2 py-2">
                      ${interest.icon}
                      <h3 class="text-white text-xl tracking-tighther">${interest.interest}</h3>
                      </div>`;
    });
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}
(function setInitial() {
  select(".maincard img").src = users[curr].displaypic;
  select(".incomingcard img").src = users[curr + 1]?.displaypic;
  setData(curr);
  curr = 2;
})();

let isAnimating = false;

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard"); 

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displaypic;
        curr++;

        main.classList.remove("maincard");

        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: "circ",
        duration: 0.7,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        scale: 1.1,
        opacity: 0,
        ease: "circ",
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
  gsap.from(".details .element", {
    y: "100%",

    opacity: 0,

    stagger: 0.1,

    ease: "Power4.easeInOut",

    duration: 1,
  });
});
accept.addEventListener("click", function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element", {
      y: "100%",
  
      opacity: 0,
  
      stagger: 0.1,
  
      ease: "Power4.easeInOut",
  
      duration: 1,
    });
});
(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]} container`, 'overflow-hidden');
    div.appendChild(element);
    select(".details").appendChild(div);
  })
})();