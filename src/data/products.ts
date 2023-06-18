const PRODUCTS = [
  {
    id: 1,
    title: 'Spathiphyllum',
    description:
      'With its elegant and timeless appearance, the peace lily (Spathiphyllum) blends into any room. It is ideal for inexperienced hobby gardeners and comes in a variety of different heights and leaf colours.',
    price: 20.0,
    discountPercentage: 10,
    rating: 4.75,
    stock: 15,
    brand: 'Greenish',
    latinName: 'Spathiphyllum',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/spathiphyllum/spathiphyllum-thumb.webp',
    images: [
      '../assets/images/spathiphyllum/spathiphyllum-1.webp',
      '../assets/images/spathiphyllum/spathiphyllum-2.webp',
      '../assets/images/spathiphyllum/spathiphyllum-3.webp',
    ],
  },
  {
    id: 2,
    title: 'Zamioculcas zamielifolia',
    description:
      'In recent years, the Zamioculcas zamielifolia plant has become a must-have designer plant. Since it was offered on the market almost 20 years ago, it has become a firm favourite in offices, medical practices and designer apartments. It is the epitome of modern design as far as houseplants are concerned.',
    price: 18.97,
    discountPercentage: 10,
    rating: 4.85,
    stock: 24,
    brand: 'Little Green',
    latinName: 'Zamioculcas zamiifolia',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/zamioculcas/zamioculcas-thumb.webp',
    images: [
      '../assets/images/zamioculcas/zamioculcas-1.webp',
      '../assets/images/zamioculcas/zamioculcas-2.webp',
      '../assets/images/zamioculcas/zamioculcas-3.webp',
    ],
  },
  {
    id: 3,
    title: 'Chlorophytum',
    description:
      'Chlorophytum comosum is the most common spider plant species to be kept as a houseplant. While there are other spider plant species as well, they are harder to come by and more difficult to care for.',
    price: 5.46,
    discountPercentage: 5,
    rating: 4.34,
    stock: 16,
    brand: 'Garden World',
    latinName: 'Chlorophytum',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/chlorophytum/chlorophytum-thumb.webp',
    images: [
      '../assets/images/chlorophytum/chlorophytum-1.webp',
      '../assets/images/chlorophytum/chlorophytum-2.webp',
      '../assets/images/chlorophytum/chlorophytum-3.webp',
    ],
  },
  {
    id: 4,
    title: 'Calathea crocata',
    description:
      'Eternal Flame plants, also known as saffron-coloured calatheas, have a reputation for being difficult to care for. That said, simply understanding a few of this plant’s requirements will help you to create the perfect conditions in which it will flourish.',
    price: 17.75,
    discountPercentage: 7,
    rating: 4.48,
    stock: 6,
    brand: 'Spring Rose Souq',
    latinName: 'Calathea crocata',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/calathea/calathea-thumb.webp',
    images: [
      '../assets/images/calathea/calathea-1.webp',
      '../assets/images/calathea/calathea-2.webp',
      '../assets/images/calathea/calathea-3.webp',
    ],
  },
  {
    id: 5,
    title: 'Sansevieria',
    description:
      'The snake plant (Sansevieria) is an air purifier and style object in offices, bedrooms and homes. The versatile survival artist shows himself in the most beautiful shades.',
    price: 11.0,
    discountPercentage: 5,
    rating: 4.15,
    stock: 11,
    brand: 'Willoway Nurseries',
    latinName: 'Sansevieria',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/sansevieria/sansevieria-thumb.webp',
    images: [
      '../assets/images/sansevieria/sansevieria-1.webp',
      '../assets/images/sansevieria/sansevieria-2.webp',
      '../assets/images/sansevieria/sansevieria-3.webp',
    ],
  },
  {
    id: 6,
    title: 'Mini monstera',
    description:
      'The mini monstera dons impressively glossy green, fenestrated leaves and can be grown as a climbing or hanging plant.',
    price: 20.32,
    discountPercentage: 10,
    rating: 4.45,
    stock: 19,
    brand: 'Plant Depot',
    latinName: 'Rhaphidophora tetrasperma',
    category: 'Decorative leafy plants',
    thumbnail: '../assets/images/monstera/monstera-thumb.webp',
    images: [
      '../assets/images/monstera/monstera-1.webp',
      '../assets/images/monstera/monstera-2.webp',
      '../assets/images/monstera/monstera-3.webp',
    ],
  },
  {
    id: 7,
    title: 'Anthurium',
    description:
      'With strikingly vivid flowers and eye-catching leaves, the flamingo plant is extremely popular. Both Anthurium scherzerianum and Anthurium andreanum, as well as their hybrids, are known as the flamingo plant, flamingo flower and anthurium lily.',
    price: 13.0,
    discountPercentage: 10,
    rating: 4.54,
    stock: 12,
    brand: 'Greenish',
    latinName: 'Anthurium',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/anthurium/anthurium-thumb.webp',
    images: [
      '../assets/images/anthurium/anthurium-1.webp',
      '../assets/images/anthurium/anthurium-2.webp',
      '../assets/images/anthurium/anthurium-3.webp',
    ],
  },
  {
    id: 8,
    title: 'Cyclamen',
    description:
      'Cyclamen delights us both in the garden and in a cool spot indoors with its characteristic downward hanging flowers, whose petals rise upward almost like the delicate wings of a colourful butterfly.',
    price: 8.4,
    discountPercentage: 5,
    rating: 4.83,
    stock: 5,
    brand: 'Little Green',
    latinName: 'Cyclamen',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/cyclamen/cyclamen-thumb.webp',
    images: [
      '../assets/images/cyclamen/cyclamen-1.webp',
      '../assets/images/cyclamen/cyclamen-2.webp',
      '../assets/images/cyclamen/cyclamen-3.webp',
    ],
  },
  {
    id: 9,
    title: 'Dendrobium',
    description:
      'Dendrobium species are mostly epiphytic, or lithophytic although a few species are terrestrial. They are sympodial herbs with cylindrical roots usually arising from the base of a pseudobulb.',
    price: 16.15,
    discountPercentage: 7,
    rating: 4.06,
    stock: 14,
    brand: 'Garden World',
    latinName: 'Dendrobium',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/dendrobium/dendrobium-thumb.webp',
    images: [
      '../assets/images/dendrobium/dendrobium-1.webp',
      '../assets/images/dendrobium/dendrobium-2.webp',
      '../assets/images/dendrobium/dendrobium-3.webp',
    ],
  },
  {
    id: 10,
    title: 'Hanging begonia',
    description:
      'A tender, tuberous, trailing perennial with narrow, pointed bright green leaves with jagged edges. Large, fully-double, rich red flowers are produced from late spring until the first frosts.',
    price: 11.3,
    discountPercentage: 10,
    rating: 4.72,
    stock: 17,
    brand: 'Spring Rose Souq',
    latinName: 'Begonia tuberhybrida',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/begonia/begonia-thumb.webp',
    images: [
      '../assets/images/begonia/begonia-1.webp',
      '../assets/images/begonia/begonia-2.webp',
      '../assets/images/begonia/begonia-3.webp',
    ],
  },
  {
    id: 11,
    title: 'Medinilla',
    description:
      'The tropical plant Medinilla magnifica has a particularly long flowering period, where its magnificent flowers are on full display.',
    price: 17.75,
    discountPercentage: 5,
    rating: 4.86,
    stock: 4,
    brand: 'Willoway Nurseries',
    latinName: 'Medinilla',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/medinilla/medinilla-thumb.webp',
    images: [
      '../assets/images/medinilla/medinilla-1.webp',
      '../assets/images/medinilla/medinilla-2.webp',
      '../assets/images/medinilla/medinilla-3.webp',
    ],
  },
  {
    id: 12,
    title: 'Phalaenopsis',
    description:
      'Commonly called moth orchids, they are popular house plants that, with proper care, will flower repeatedly once per year (sometimes more often) with the flowers lasting for four months or more.',
    price: 10.65,
    discountPercentage: 5,
    rating: 4.75,
    stock: 8,
    brand: 'Plant Depot',
    latinName: 'Phalaenopsis amabilis',
    category: 'Blooming indoor flowers',
    thumbnail: '../assets/images/phalaenopsis/phalaenopsis-thumb.webp',
    images: [
      '../assets/images/phalaenopsis/phalaenopsis-1.webp',
      '../assets/images/phalaenopsis/phalaenopsis-2.webp',
      '../assets/images/phalaenopsis/phalaenopsis-3.webp',
    ],
  },
  {
    id: 13,
    title: 'Dracaena reflexa',
    description:
      'It is probably the most popular species. The appearance of Dracaena reflexa is synonymous with the dragon tree genus with its long, tapered, usually bicoloured leaves. Until some time ago the species was called Dracaena marginata.',
    price: 41.3,
    discountPercentage: 7,
    rating: 4.07,
    stock: 3,
    brand: 'Greenish',
    latinName: 'Dracaena reflexa',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/dracaena/dracaena-thumb.webp',
    images: [
      '../assets/images/dracaena/dracaena-1.webp',
      '../assets/images/dracaena/dracaena-2.webp',
      '../assets/images/dracaena/dracaena-3.webp',
    ],
  },
  {
    id: 14,
    title: 'Ficus elastica "Robusta"',
    description:
      'Beloved as houseplant, Ficus elastica "Robusta" is a cultivar of Ficus elastica Roxb. ex Hornem. Better known as the Rubber plant, this reliable house plant is unswervingly popular!',
    price: 19.35,
    discountPercentage: 10,
    rating: 4.28,
    stock: 6,
    brand: 'Little Green',
    latinName: 'Ficus elastica "Robusta"',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/ficus/ficus-thumb.webp',
    images: [
      '../assets/images/ficus/ficus-1.webp',
      '../assets/images/ficus/ficus-2.webp',
      '../assets/images/ficus/ficus-3.webp',
    ],
  },
  {
    id: 15,
    title: 'Howea forsteriana',
    description:
      'Howea forsteriana - or the famous Kentia Palm from Lord Howe Island, off the east coast of Australia, hardly needs any introduction. It is considered by many to be the best house plant in the world.',
    price: 166.12,
    discountPercentage: 10,
    rating: 4.18,
    stock: 2,
    brand: 'Garden World',
    latinName: 'Howea forsteriana',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/howea/howea-thumb.webp',
    images: [
      '../assets/images/howea/howea-1.webp',
      '../assets/images/howea/howea-2.webp',
      '../assets/images/howea/howea-3.webp',
    ],
  },
  {
    id: 16,
    title: 'Strelitzia nicolai',
    description:
      'Strelitzia nicolai is the plant to own if you can offer it a lot of space and bright light. White Bird-of-Paradise is very banana-like: its leaves grow  upright on clumping stalks which give an exotic feel to any interior.',
    price: 27.4,
    discountPercentage: 5,
    rating: 4.22,
    stock: 5,
    brand: 'Spring Rose Souq',
    latinName: 'Strelitzia nicolai',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/strelitzia/strelitzia-thumb.webp',
    images: [
      '../assets/images/strelitzia/strelitzia-1.webp',
      '../assets/images/strelitzia/strelitzia-2.webp',
      '../assets/images/strelitzia/strelitzia-3.webp',
    ],
  },
  {
    id: 17,
    title: 'Pachira aquatica',
    description:
      'Pachira aquatica Aubl. is known by a large number of common names including water chestnut, Guiana chestnut and Malabar chestnut. In addition, it is often commercially sold as a houseplant or bonsai under the name of money tree or money plant.',
    price: 54.84,
    discountPercentage: 10,
    rating: 4.76,
    stock: 10,
    brand: 'Willoway Nurseries',
    latinName: 'Pachira aquatica',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/pachira/pachira-thumb.webp',
    images: [
      '../assets/images/pachira/pachira-1.webp',
      '../assets/images/pachira/pachira-2.webp',
      '../assets/images/pachira/pachira-3.webp',
    ],
  },
  {
    id: 18,
    title: 'Yucca gigantea',
    description:
      'Yucca gigantea Lem. commonly called spineless yucca or giant yucca, is native to Mexico where it may grow somewhat tree-like to 9 m tall with a trunk that thickens and roughens with age. This is considered to be the tallest of the yuccas, hence the name.',
    price: 69.35,
    discountPercentage: 10,
    rating: 4.51,
    stock: 6,
    brand: 'Plant Depot',
    latinName: 'Yucca gigantea',
    category: 'Palm trees and large houseplants',
    thumbnail: '../assets/images/yucca/yucca-thumb.webp',
    images: [
      '../assets/images/yucca/yucca-1.webp',
      '../assets/images/yucca/yucca-2.webp',
      '../assets/images/yucca/yucca-3.webp',
    ],
  },
  {
    id: 19,
    title: 'Phlebodium aureum "Blue Star"',
    description:
      'Phlebodium aureum "Blue Star" is a cultivar of Phlebodium aureum commonly known as blue star fern, is an interesting fern with elongated fronds and a pleasant green-blue color.',
    price: 25.16,
    discountPercentage: 5,
    rating: 4.48,
    stock: 7,
    brand: 'Greenish',
    latinName: 'Phlebodium aureum Blue Star',
    category: 'Ferns',
    thumbnail: '../assets/images/phlebodium/phlebodium-thumb.webp',
    images: [
      '../assets/images/phlebodium/phlebodium-1.webp',
      '../assets/images/phlebodium/phlebodium-2.webp',
      '../assets/images/phlebodium/phlebodium-3.webp',
    ],
  },
  {
    id: 20,
    title: 'Asparagus setaceus',
    description:
      'Asparagus setaceus (Kunth) Jessop, commonly called asparagus fern, is not in fact a fern. It is a bushy, evergreen, twining vine with wiry, spiny, scrambling or climbing stems that typically grow to 6m long.',
    price: 9.68,
    discountPercentage: 7,
    rating: 4.61,
    stock: 8,
    brand: 'Little Green',
    latinName: 'Asparagus setaceus',
    category: 'Ferns',
    thumbnail: '../assets/images/asparagus/asparagus-thumb.webp',
    images: [
      '../assets/images/asparagus/asparagus-1.webp',
      '../assets/images/asparagus/asparagus-2.webp',
      '../assets/images/asparagus/asparagus-3.webp',
    ],
  },
  {
    id: 21,
    title: 'Nephrolepis exaltata "Green Lady"',
    description:
      'Nephrolepis exaltata "Green Lady" is a cultivar of Nephrolepis exaltata (L.) Schott, commonly called sword fern or Boston fern, is an evergreen fern that grows with an upright spreading habit. In its native habitat, it may grow to as much as 2 m tall.',
    price: 25.99,
    discountPercentage: 10,
    rating: 4.77,
    stock: 15,
    brand: 'Garden World',
    latinName: 'Nephrolepis exaltata Green Lady',
    category: 'Ferns',
    thumbnail: '../assets/images/nephrolepis/nephrolepis-thumb.webp',
    images: [
      '../assets/images/nephrolepis/nephrolepis-1.webp',
      '../assets/images/nephrolepis/nephrolepis-2.webp',
      '../assets/images/nephrolepis/nephrolepis-3.webp',
    ],
  },
  {
    id: 22,
    title: 'Adiantum',
    description:
      'Giving off a jungle-like ambience, maidenhair ferns (Adiantum) have become popular as indoor plants. Their graceful appearance makes for an enticing indoor showpiece.',
    price: 10.89,
    discountPercentage: 5,
    rating: 3.95,
    stock: 5,
    brand: 'Spring Rose Souq',
    latinName: 'Adiantum',
    category: 'Ferns',
    thumbnail: '../assets/images/adiantum/adiantum-thumb.webp',
    images: [
      '../assets/images/adiantum/adiantum-1.webp',
      '../assets/images/adiantum/adiantum-2.webp',
      '../assets/images/adiantum/adiantum-3.webp',
    ],
  },
  {
    id: 23,
    title: 'Platycerium bifurcatum',
    description:
      'Platycerium bifurcatum is a species of fern with heart-shaped sterile fronds and arching grey-green fertile fronds which are forked and strap-shaped, and grow up to 90 cm. Makes a wonderful, eye-catching house-plant.',
    price: 49.99,
    discountPercentage: 5,
    rating: 4.12,
    stock: 3,
    brand: 'Willoway Nurseries',
    latinName: 'Platycerium Bifurcatum',
    category: 'Ferns',
    thumbnail: '../assets/images/platycerium/platycerium-thumb.webp',
    images: [
      '../assets/images/platycerium/platycerium-1.webp',
      '../assets/images/platycerium/platycerium-2.webp',
      '../assets/images/platycerium/platycerium-3.webp',
    ],
  },
  {
    id: 24,
    title: 'Pteris tricolor',
    description:
      'Pteris quadriaurita "Tricolor" is a beautiful tropical fern with shiny fronds in shades of bronze, red and green. A compact, full-body habit makes it a showoff in containers.',
    price: 15.99,
    discountPercentage: 7,
    rating: 4.23,
    stock: 10,
    brand: 'Plant Depot',
    latinName: 'Pteris quadriaurita Tricolor',
    category: 'Ferns',
    thumbnail: '../assets/images/pteris/pteris-thumb.webp',
    images: [
      '../assets/images/pteris/pteris-1.webp',
      '../assets/images/pteris/pteris-2.webp',
      '../assets/images/pteris/pteris-3.webp',
    ],
  },
  {
    id: 25,
    title: 'Aloe vera',
    description:
      'Aloe vera is used by many as a medicinal or decorative plant. And no wonder. It doesn’t need much to grow strong and healthy.',
    price: 12.99,
    discountPercentage: 5,
    rating: 4.41,
    stock: 16,
    brand: 'Greenish',
    latinName: 'Aloe vera',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/aloe/aloe-thumb.webp',
    images: [
      '../assets/images/aloe/aloe-1.webp',
      '../assets/images/aloe/aloe-2.webp',
      '../assets/images/aloe/aloe-3.webp',
    ],
  },
  {
    id: 26,
    title: 'Crassula pyramidal',
    description:
      'Crassula pyramidalis is an amazing succulent with columns of stacked, grey green leaves in a distinct, geometric pattern that really draws in the eye.',
    price: 7.99,
    discountPercentage: 5,
    rating: 4.03,
    stock: 7,
    brand: 'Little Green',
    latinName: 'Crassula pyramidalis',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/crassula/crassula-thumb.webp',
    images: [
      '../assets/images/crassula/crassula-1.webp',
      '../assets/images/crassula/crassula-2.webp',
      '../assets/images/crassula/crassula-3.webp',
    ],
  },
  {
    id: 27,
    title: 'Gymnocalycium Mikhanovich',
    description:
      'Gymnocalycium is a small, globular cactus that tends to cluster at the base. It has well marked ribs with evident horizontal grooves and short, white spines.',
    price: 19.99,
    discountPercentage: 10,
    rating: 3.86,
    stock: 12,
    brand: 'Garden World',
    latinName: 'Gymnocalycium Mihanovichii Japan',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/gymnocalycium/gymnocalycium-thumb.webp',
    images: [
      '../assets/images/gymnocalycium/gymnocalycium-1.webp',
      '../assets/images/gymnocalycium/gymnocalycium-2.webp',
      '../assets/images/gymnocalycium/gymnocalycium-3.webp',
    ],
  },
  {
    id: 28,
    title: 'Euphorbia trigona',
    description:
      'Euphorbia trigona is a tender, evergreen, succulent plant occasionally known (especially in older literature) as Euphorbia hermentiana. The stems have three wing-like angles and carry short, sharp spines as well as leaves.',
    price: 19.99,
    discountPercentage: 5,
    rating: 4.44,
    stock: 8,
    brand: 'Spring Rose Souq',
    latinName: 'Euphorbia trigona',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/euphorbia/euphorbia-thumb.webp',
    images: [
      '../assets/images/euphorbia/euphorbia-1.webp',
      '../assets/images/euphorbia/euphorbia-2.webp',
      '../assets/images/euphorbia/euphorbia-3.webp',
    ],
  },
  {
    id: 29,
    title: 'Kalanchoe beharensis',
    description:
      'Kalanchoe beharensis is a very large succulent shrub with a unique grotesque shape. Its leaves are soft as velvet and covered with a protective bloom. Under the right conditions it can attain the proportions of a small tree, reaching 3 m in height.',
    price: 76.99,
    discountPercentage: 7,
    rating: 4.16,
    stock: 2,
    brand: 'Willoway Nurseries',
    latinName: 'Kalanchoe beharensis',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/kalanchoe/kalanchoe-thumb.webp',
    images: [
      '../assets/images/kalanchoe/kalanchoe-1.webp',
      '../assets/images/kalanchoe/kalanchoe-2.webp',
      '../assets/images/kalanchoe/kalanchoe-3.webp',
    ],
  },
  {
    id: 30,
    title: 'Parodia leninghausii',
    description:
      'It is a very popular cactus species appreciated because glistens under a haze of harmless golden spines and will produce silky yellow flowers, with a lovely reflection in the petals only when mature (5 years or so), but the blossom in summer is worth the wait.',
    price: 61.99,
    discountPercentage: 10,
    rating: 4.52,
    stock: 6,
    brand: 'Plant Depot',
    latinName: 'Parodia leninghausii',
    category: 'Cacti and succulents',
    thumbnail: '../assets/images/parodia/parodia-thumb.webp',
    images: [
      '../assets/images/parodia/parodia-1.webp',
      '../assets/images/parodia/parodia-2.webp',
      '../assets/images/parodia/parodia-3.webp',
    ],
  },
  {
    id: 31,
    title: 'Syngonium podophyllum "Christmas"',
    description:
      'Syngonium podophyllum "Christmas" is a stunning Syngonium with beautiful foliage, coloured reddish-pink around the midrib. It is a cultivar of Syngonium podophyllum Schott.',
    price: 12.99,
    discountPercentage: 5,
    rating: 4.77,
    stock: 9,
    brand: 'Greenish',
    latinName: 'Syngonium podophyllum',
    category: 'Lianas',
    thumbnail: '../assets/images/syngonium/syngonium-thumb.webp',
    images: [
      '../assets/images/syngonium/syngonium-1.webp',
      '../assets/images/syngonium/syngonium-2.webp',
      '../assets/images/syngonium/syngonium-3.webp',
    ],
  },
  {
    id: 32,
    title: 'Epipremnum aureum',
    description:
      'Epipremnum aureum has strongly variegated foliage, with well defined borders between yellow and green colours of the leaf blades. It is a very easy-to-grow climber and can grow to very long lengths in no time.',
    price: 7.99,
    discountPercentage: 5,
    rating: 4.59,
    stock: 12,
    brand: 'Little Green',
    latinName: 'Epipremnum aureum',
    category: 'Lianas',
    thumbnail: '../assets/images/epipremnum/epipremnum-thumb.webp',
    images: [
      '../assets/images/epipremnum/epipremnum-1.webp',
      '../assets/images/epipremnum/epipremnum-2.webp',
      '../assets/images/epipremnum/epipremnum-3.webp',
    ],
  },
  {
    id: 33,
    title: 'Pfeiffera boliviana',
    description:
      'Pfeiffera boliviana also known as Lepismium bolivianum or Rhipsalis boliviana, is an epiphytic cactus that grows as a hanging mass of many-branched, somewhat 4-angled, up to 90 cm long stems.',
    price: 19.99,
    discountPercentage: 7,
    rating: 4.25,
    stock: 5,
    brand: 'Garden World',
    latinName: 'Lepismium bolivianum',
    category: 'Lianas',
    thumbnail: '../assets/images/pfeiffera/pfeiffera-thumb.webp',
    images: [
      '../assets/images/pfeiffera/pfeiffera-1.webp',
      '../assets/images/pfeiffera/pfeiffera-2.webp',
      '../assets/images/pfeiffera/pfeiffera-3.webp',
    ],
  },
  {
    id: 34,
    title: 'Scindapsus pictus',
    description:
      'Scindapsus pictus is an evergreen herb with shingling leaves when juvenile. Leaf blades are dark green and sub-velvety, marked with lime green splodges of colour and a bright margin.',
    price: 7.99,
    discountPercentage: 7,
    rating: 4.72,
    stock: 11,
    brand: 'Spring Rose Souq',
    latinName: 'Scindapsus pictus',
    category: 'Lianas',
    thumbnail: '../assets/images/scindapsus/scindapsus-thumb.webp',
    images: [
      '../assets/images/scindapsus/scindapsus-1.webp',
      '../assets/images/scindapsus/scindapsus-2.webp',
      '../assets/images/scindapsus/scindapsus-3.webp',
    ],
  },
  {
    id: 35,
    title: 'Hedera helix',
    description:
      'Ivy tends to conjure up images of overgrown ancient walls or romantic seating areas in the countryside, but the plant also has a lot to offer indoors too.',
    price: 37.99,
    discountPercentage: 7,
    rating: 4.72,
    stock: 11,
    brand: 'Willoway Nurseries',
    latinName: 'Hedera helix',
    category: 'Lianas',
    thumbnail: '../assets/images/hedera/hedera-thumb.webp',
    images: [
      '../assets/images/hedera/hedera-1.webp',
      '../assets/images/hedera/hedera-2.webp',
      '../assets/images/hedera/hedera-3.webp',
    ],
  },
  {
    id: 36,
    title: 'Philodendron giganteum',
    description:
      'Philodendron giganteum is one of the largest scandent philodendrons, in optimal conditions its foliage becomes massive. Petioles are robust, smooth, rather terete, or somewhat flattened above.',
    price: 23.99,
    discountPercentage: 10,
    rating: 4.29,
    stock: 7,
    brand: 'Plant Depot',
    latinName: 'Philodendron giganteum',
    category: 'Lianas',
    thumbnail: '../assets/images/philodendron/philodendron-thumb.webp',
    images: [
      '../assets/images/philodendron/philodendron-1.webp',
      '../assets/images/philodendron/philodendron-2.webp',
      '../assets/images/philodendron/philodendron-3.webp',
    ],
  },
];

export default PRODUCTS;
