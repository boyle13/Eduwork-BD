const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHTERM = '#searchTerm'
const KEYWORD = 'online {enter}'

class pageSearch{
    static visit() {
        cy.visit(URL)
    }
    static search() {
        cy.get(SEARCHTERM).type(KEYWORD)
    }
}
 export default pageSearch