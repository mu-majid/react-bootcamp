import React from 'react';
import MenuItem from '../Menu-Item/menu-item.component';
import './directory.styles.scss';
import SECTIONS_DATA from "./sections.data.js";

class Directory extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render () {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(
            ({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}/>
            )
          )
        }
      </div>
    );
  }
};

export default Directory;