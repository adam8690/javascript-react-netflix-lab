import React from 'react';

class FilmSelector extends React.Component {

  constructor(props){
    super(props)
  }

  render(){

    console.log(this)

    const options = this.props.films.map( (film, index) => {
      return <option value={index} key={index}>{film.show_title}</option>
    })

    return(

      <select id="films-list">

        {options}

      </select>

    )

  }

}

export default FilmSelector;