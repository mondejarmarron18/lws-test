const animes: TAnime[] = [
  {
    id: 1,
    title: "Kimetsu no yaiba",
    image:
      "https://i.pinimg.com/originals/e2/68/8f/e2688fd2a3bdbd04bb90a29e120a4af7.png",
    description:
      "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtere and his younger sister Nezuko turned into a demon.",
    categories: ["Adventure fiction", "Dark Fantasy", "Martial Arts"],
    episodes: 12,
    likes: 100,
    dislikes: 20,
    released: 2020,
  },
  {
    id: 2,
    title: "Attack on Titan",
    description:
      "Several hundred years ago, humans were nearly exterminated by giants. Giants are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of giants. Flash forward to the present and the city has not seen a giant in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a super giant that appears out of thin air. As the smaller giants flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single giant and take revenge for all of mankind.",
    image:
      "https://storage.googleapis.com/tuna-sounds-images/53af4d31-ec9f-4a67-86e2-9fcb076798cc.jpg",
    categories: ["Adventure fiction", "Dark fantasy", "Martial Arts"],
    episodes: 12,
    likes: 230,
    dislikes: 13,
    released: 2018,
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    description:
      "In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoumen Sukuna were lost and scattered about. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the undead! Yuuji Itadori is high schooler who spends his days visiting his bedridden grandfather. Although he looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Club. One day, the club manages to get their hands on a sealed cursed object, but little do they know the terror they'll unleash when they break the seal.",
    image:
      "https://cdn.oneesports.gg/cdn-data/2021/06/JujutsuKaisenPhantomParade_GojoSatoru-min-300x167.jpeg",
    categories: ["Adventure fiction", "Martial Arts"],
    episodes: 12,
    likes: 180,
    dislikes: 78,
    released: 2019,
  },
  {
    id: 4,
    title: "One Piece",
    description:
      "One Piece is a story about  Monkey D. Luffy, who wants to become a sea-robber. In a world mystical, there have a mystical fruit whom eat will have a special power but also have greatest weakness. Monkey ate Gum-Gum Fruit which gave him a strange power but he can NEVER swim. And this weakness made his dream become a sea – robber to find ultimate treasure is difficult. One Piece is a story about  Monkey D. Luffy, who wants to become a sea-robber. In a world mystical, there have a mystical fruit whom eat will have a special power but also have greatest weakness. Monkey ate Gum-Gum Fruit which gave him a strange power but he can NEVER swim. And this weakness made his dream become a sea – robber to find ultimate treasure is difficult. But along his ways, he meet himself many members to help. Together, they sail the Seven Seas of adventure in search of the elusive treasure “One Piece.”",
    image:
      "https://www.nacionflix.com/__export/1613250517886/sites/debate/img/2021/02/13/cuxndo-se-estrena-la-temporada-2-de-one-piece-en-netflix_crop1613250302621.jpg_1655324209.jpg",
    categories: ["Adventure fiction", "Comedy", "Family"],
    episodes: 12,
    likes: 302,
    dislikes: 65,
    released: 2017,
  },
  {
    id: 5,
    title: "Flame of Reca",
    description:
      "Recca is a boy living in the modern world, only he seems drawn to following the ways of the ninja. On the day he befriends a girl named Yanagi who has a mysterious power of healing, he is confronted and challenged by a Dark Priestess. This battle leads Recca to discover a strange power within himself. Afterwards, he finds that not only is his past and destiny not as crystal clear as he had thought, but there are others with powers practicing the way of the ninja who challenge him one after another.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eOViT2d4M7OjBu4Yz0n5e8VXyePikvNLsE1QpuLPLSuxz_E7_CXC0vyGnizFHYItQ0I&usqp=CAU",
    categories: ["Adventure fiction", "Magic", "Family"],
    episodes: 12,
    likes: 123,
    dislikes: 12,
    released: 1999,
  },
  {
    id: 6,
    title: "Slam Dunk",
    description:
      "Sakuragi Hanamichi is a junior high punk used to getting into fights and being rejected by girls but upon entering high school he meets the girl of his dreams, Haruko Akagi. He will do anything in order to win her heart including joining the school basketball team that is aiming to conquer the nation lead by Haruko’s brother. The problem is that Sakuragi has never played basketball before and a freshman sensation is stealing the spotlight and Haruko’s affection from him.",
    image:
      "https://imgsrv2.voi.id/0C_hxeicg06FoIlr6L6GIpTmJLsn2qQSCLwK6Bc_qnc/auto/1280/853/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83NjAxMi8yMDIxMDgxNTA2MzUtbWFpbi5jcm9wcGVkXzE2Mjg5ODQxNDkuanBn.jpg",
    categories: ["Sports", "Family"],
    episodes: 12,
    likes: 1236,
    dislikes: 123,
    released: 2000,
  },
  {
    id: 7,
    title: "Ghost Fighter",
    description:
      'YuYu Hakusho follows Yusuke Urameshi, a 14-year-old street-brawling delinquent who, in an uncharacteristic act of altruism, is hit by a car and killed in an attempt to save a young boy by pushing him out of the way.[2][3][4] His ghost is greeted by Botan, a woman who introduces herself as the pilot of the River Styx, who ferries souls to the Underworld (霊界, Reikai, "Spirit World" in the English dub) where they may be judged for the afterlife. Botan informs Yusuke that his act had caught even the Underworld by surprise and that there was not yet a place made for him in either heaven or hell.',
    image:
      "https://www.scoutmag.ph/wp-content/uploads/2020/06/yuyu-hakusho-1106273-1280x0-1.jpeg",
    categories: ["Sports", "Family"],
    episodes: 12,
    likes: 2123,
    dislikes: 183,
    released: 1997,
  },
];

export default animes;
