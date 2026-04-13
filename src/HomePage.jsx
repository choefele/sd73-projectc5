import EntryList from './components/EntryList';

const defaultEntries = [
  {
    id: '1',
    title: 'The Blue Coat at the Gate',
    date: new Date(2026, 1, 10),
    imageUrl:
      'https://images.pexels.com/photos/8715954/pexels-photo-8715954.jpeg',
    content:
      'Dear Diary, Today I saw the little dog again at the school gate. She wore her tiny blue coat and looked at everyone like she was the principal. I waved, and she wagged so hard she almost tipped over. I named her “Button” in my head.',
  },
  {
    id: '2',
    title: 'The Paw on My Shoe',
    date: new Date(2026, 1, 9),
    imageUrl:
      'https://images.pexels.com/photos/8715954/pexels-photo-8715954.jpeg',
    content:
      "Dear Diary, I had a bad day in math, but then I saw Button waiting by the gate, and everything felt better. She put one paw on my shoe like she understood. I shared a tiny piece of my plain cracker (don't tell Mom). She approved.",
  },
  {
    id: '3',
    title: 'Queen Poppy of Art Class',
    date: new Date(2026, 1, 8),
    imageUrl:
      'https://images.pexels.com/photos/8715954/pexels-photo-8715954.jpeg',
    content:
      'Dear Diary, In art class, I painted Button in her blue coat, only I added a gold crown because she deserves one. Ms. Rivera put my painting on the wall. After school, I showed the real Button, and she sneezed on my sock. That counts as a compliment.',
  },
];

export default function HomePage({ entries = defaultEntries }) {
  return <EntryList entries={entries} />;
}
