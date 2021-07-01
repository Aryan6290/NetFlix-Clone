export type CarouselModel = {
  imageUrl: NodeRequire;
  title: string;
  subtitle: string;
};

export const CarouselList: Array<CarouselModel> = [
  {
    imageUrl: require('../../assets/background.jpg'),
    title: 'Everything on Netflix , starting at just ₹ 199',
    subtitle: 'Unlimited entertainment one low price.',
  },
  {
    imageUrl: require('../../assets/caraousel_a.png'),
    title: 'Download and watch offline',
    subtitle: 'Always have something to watch offline.',
  },
  {
    imageUrl: require('../../assets/caraousel_b.png'),
    title: 'No pesky contracts',
    subtitle: 'Join today, cancel anytime.',
  },
  {
    imageUrl: require('../../assets/caraousel_c.png'),
    title: 'Watch everywhere',
    subtitle: 'Stream on your phone, tablet, TV and more.',
  },
];
