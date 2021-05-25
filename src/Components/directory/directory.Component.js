import React from 'react';
import MenuItems from '../menu-items/menu-items.Component';
import './directory.style.scss';
import { connect } from 'react-redux';

class Directory extends React.Component{

  

    renderItems = () =>{
      //console.log(this.props);
       const items =  this.props.sections.map(section =>{
            return <MenuItems title={section.title} imageUrl={section.imageUrl} key={section.id} size={section.size} linkUrl={section.linkUrl}/>
        });
        return items;
    }

    render(){
        return <div className="directory-menu">
            {this.renderItems()}
            </div>
            
        
    }
}

const mapStateToProps = state => {
  return {sections : state.directoryReducer.sections}
  }


export default connect(mapStateToProps,null)(Directory);