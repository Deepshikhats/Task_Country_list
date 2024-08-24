import Fb from '@/assets/_fb';
import LinkedIn from '@/assets/_linkedIn';
import Twitter from '@/assets/_twitter';
import Yt from '@/assets/_yt';
import React from 'react';

const SocialIcons = () => {
  const _icons = [Fb, Twitter, LinkedIn, Yt];
  return (
    <div className="social">
      {_icons.map((_icon: () => React.JSX.Element, index: number) => (
        <span className="icon_wrapper" key={index}>
          <_icon />
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
