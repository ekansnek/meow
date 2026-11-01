'use client';

import { Button } from 'tamagui';

const tileImages: Record<string, string> = {
  'tile-a': '/images/nov3.png',
  'tile-b': '/images/nov3 2.png',
  'tile-c': '/images/nov13 1.png',
  'tile-d': '/images/nov13 2.png',
  'tile-e': '/images/nov13 3.png',
  'tile-f': '/images/nov15.png',
  'tile-g': '/images/nov15 2.png',
  'tile-h': '/images/nov16.png',
  'tile-i': '/images/nov18.png',
  'tile-j': '/images/nov19.png',
  'tile-k': '/images/jun26.png',
  'tile-l': '/images/nov23.png',
  'tile-m': '/images/dec12.png',
  'tile-n': '/images/jan27.png',
  'tile-q': '/images/feb7.png',
  'tile-r': '/images/feb7 2.png',
  'tile-s': '/images/mar11.png',
  'tile-t': '/images/mar11 2.png',
  'tile-u': '/images/apr2.png',
  'tile-v': '/images/apr9.png',
  'tile-w': '/images/apr11.png',
  'tile-x': '/images/apr12.png',
  'tile-y': '/images/may9.png',
  'tile-z': '/images/jun12.png',
  'tile-aa': '/images/jun25.png',
  'tile-ab': '/images/jul8.png',
  'tile-ac': '/images/jul16.png',
  'tile-ad': '/images/aug1.png',
  'tile-ae': '/images/aug2.png',
};
const tileColors: Record<string, string> = {
  'tile-a': '#8d978b',
  'tile-b': '#234a74',
  'tile-c': '#c3b19d',
  'tile-d': '#705b4d',
  'tile-e': '#d3b0a1',
  'tile-f': '#d2d7d0',
  'tile-g': '#222b30',
  'tile-h': '#b27854',
  'tile-i': '#535b4f',
  'tile-j': '#c87858',
  'tile-k': '#d2b9a2',
  'tile-l': '#485b63',
  'tile-m': '#8d978b',
  'tile-n': '#c3b19d',
  'tile-q': '#234a74',
  'tile-r': '#705b4d',
  'tile-s': '#d2b9a2',
  'tile-t': '#d3b0a1',
  'tile-u': '#d2d7d0',
  'tile-v': '#222b30',
  'tile-w': '#b27854',
  'tile-x': '#c3b19d',
  'tile-y': '#8d978b',
  'tile-z': '#535b4f',
  'tile-aa': '#705b4d',
  'tile-ab': '#c87858',
  'tile-ac': '#485b63',
  'tile-ad': '#234a74',
  'tile-ae': '#222b30',
};

export function TileButton(props: { className: string }) {
  const tileName = props.className.split(' ')[1] ?? '';
  const image = tileImages[tileName];

  return (
    <Button
      type="button"
      aria-hidden
      onPress={() => {
        console.log(`${tileName} clicked`);
      }}
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio: 128 / 171,
        padding: 0,
        borderWidth: 0,
        backgroundColor: tileColors[tileName] ?? '#3b4141',
        backgroundImage: image
          ? `url("${image}")`
          : 'linear-gradient(145deg, rgb(255 255 255 / 20%), transparent 42%), linear-gradient(35deg, rgb(0 0 0 / 35%), transparent 60%)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    />
  );
}

export function RectangularButton() {
  return (
    <Button width={128} height={171} borderRadius={0} backgroundColor="$blue10" color="white">
      Press me
    </Button>
  );
}
