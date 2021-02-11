import './directory.scss';

import MenuItem from '../menu-item/menu-item';
import React from 'react';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.pexels.com/photos/1078975/pexels-photo-1078975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'small',
          id: 1,
          linkUrl: 'hats'          
        },
        {
          title: 'jackets',
        //   imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl:'https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg',
          size: 'small',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'small',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
        //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          imageUrl: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          size: 'large',
          id: 5,
          linkUrl: ''

        }
      ]
    };
  }


  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
