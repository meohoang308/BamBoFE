
export const URIProperty = {
    server: 'https://swapi.co/api/people/',
  
    getAllPeople(){
        return URIProperty.server;
    },

    getPeopleById(peopleId) {
        return URIProperty.server.concat('${peopleId}');
    }
   
}
