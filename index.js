function getData() {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      return response.json()
    }) 
    .then(function(data) {
      renderBios(data);
      
    })
}

//Function should return a component displaying an astronaut's bio
function AstronautBios(astronaut) {

  return (
    <div className ="astronaut">
      
        <h3>{astronaut.firstName} {astronaut.lastName}</h3>
          <ul>
            <li>{astronaut.hoursInSpace}</li>
            <li>{astronaut.active ===true? "Active": "Inactive"}</li>
            <li>{astronaut.skills.join(', ')}</li>
          </ul>
      
      <img className="avatar" src={astronaut.picture}></img>
    </div>
  )
}

// Function should render all astronaut bios
function renderBios(data) {
  //The AstronautBios component should be repeated to display bios for all 
  //astronaunts in the returned data object.
  const compArray = [];
  data.forEach((astronaut) => {compArray.push(AstronautBios(astronaut))})
  const root = document.getElementById('root');
      const container = <div className='container'>{compArray}</div>
      ReactDOM.render( container, root );
  //Then attach to the 'root' div!
}



getData();


