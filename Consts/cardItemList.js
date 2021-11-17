const storeItems = [
    {
      id: 1,
      name: 'Pre Plucked Virgin Hair Body Wave HD Lace Closure Wig',
      price: '200.99',
      favorite: true,
    images:
    {
      imageMain: require('../assets/1.png'),
      black: require('../assets/1.png'),
      sienna: require('../assets/1_Bown.png'),
      // violet: require('../assets/1_Bown.png'),
    },
      productNumber:'CT78102927',
      stock: 10,
      partSize: ['12x2','12x4','15x2'],
      density: ['100','200','150'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
  },
   {
      id: 2,
      name: 'T-Shirts for Men | Round Neck with graphic front',
      price: '235.99',
      favorite: false,
     images: {
       imageMain: require('../assets/11.png'),
       black: require('../assets/11.png'),
       darkslategray: require('../assets/straightBlack.jpg')
     },
      productNumber:'DS2891800',
      stock: 10,
      partSize: ['12x4','15x2'],
      density: ['150','90'],
      stretchedLength: ['14','16','20'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: 'T-Shirts for Men | Round Neck with graphic front',
      price: '235.99',
      favorite: false,
      images: {
        imageMain: require('../assets/lightBrownShirt.webp'),
        wheat: require('../assets/lightBrownShirt.webp'),
        lightsalmon: require('../assets/lightsalmon.webp'),
      },
      productNumber:'GY728920',
      stock: 80,
      partSize: ['M','L','XXL','XS'],
      density: ['OS'],
      stretchedLength: ['OS'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
    {
      id: 4,
      name: 'Pre Plucked | brazillian body curls - bundles',
      price: '235.99',
      favorite: false,
      images: {
        imageMain: require('../assets/12.png'),
        darkgray: require('../assets/12.png'),
        black: require('../assets/4.png'),
      },
      productNumber:'6209827378',
      stock: 120,
      partSize: ['12x4','15x2'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  
    {
      id: 5,
      name: 'Hand-made frontal wig | Human virgin hair',
      price: '125.99',
      favorite: false,
      images: {
        imageMain: require('../assets/4.png'),
        black: require('../assets/4.png'),
        wheat:require('../assets/blonde.png'),
      },
      productNumber:'XP8727891',
      stock: 40,
      partSize: ['12x4','15x2'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      name: 'Brazillian fringe - Pure Virgin Hair',
      price: '500.99',
      favorite: true,
      images: {
        imageMain: require('../assets/5.png'),
        black: require('../assets/5.png'),
        darkgreen: require('../assets/green.jpg')
        
      },
      productNumber:'QP1927993',
      stock: 10,
      partSize: ['12x4','15x2'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
    {
      id: 7,
      name: 'Classic T-Shirt For men - Black buttons',
      price: '150.99',
      favorite: true,
      images: {
        imageMain: require('../assets/blueShirt.webp'),
        blue: require('../assets/blueShirt.webp'),
        pink: require('../assets/pinkShirt.webp'),

      },
      productNumber:'WV7097537',
      stock: 20,
      partSize: ['S','M','XL'],
      density: ['OS'],
      stretchedLength: ['OS'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
    {
      id: 8,
      name: 'Virgin Fringe - Tanious Hair wig',
      price: '150.99',
      favorite: false,
      images: {
        imageMain: require('../assets/6.png'),
        black: require('../assets/6.png'),
        saddlebrown: require('../assets/fringebrown.png')
      },
    productNumber:'AS2828883',
    stock: 19,
    partSize: ['12x4','15x2'],
    density: ['150','90','300'],
    stretchedLength: ['14','16','18','20','22'],
    description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
    {
      id: 9,
      name: 'Silky Straight Human Hair Full Lace Wig',
      price: '290.99',
      favorite: false,
      images: {
        imageMain: require('../assets/8_Black.png'),
        black: require('../assets/8_Black.png'),
        sienna: require('../assets/1_Bown.png')
      },
      productNumber:'GS1990112',
      stock: 32,
      partSize: ['12x4','15x2'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
  },
    {
      id: 10,
      name: 'Silky Straight Human Hair Full Lace Wig',
      price: '290.99',
      favorite: true,
      images: {
        imageMain: require('../assets/8_Black.png'),
        black: require('../assets/8_Black.png'),
        darkred: require('../assets/straight_wig_nadula.png')
      },
      productNumber:'AC100199',
      stock: 50,
      partSize: ['12x4','15x2'],
      density: ['150','90','300'],
      stretchedLength: ['14','16','18','20','22'],
      description:
        "Lorem Ipsum is simply dummy text \n of the printing and typesetting industry. \n Lorem Ipsum has been the industry's \n standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type \n and scrambled it to make a type specimen book.",
    },
];
  
export const bag = [];

export const users = [];

  
  export default storeItems;