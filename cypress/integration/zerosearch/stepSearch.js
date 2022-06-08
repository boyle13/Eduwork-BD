/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import pageSearch from './pageSearch'


Given('The user visited the site', () => {
    pageSearch.visit();
});
When('The user typed the word Online on the searchbar and pressed Enter Key', () => {
    pageSearch.search();
});
Then('The site will redirect the page to search results', () => {
    cy.get('.top_offset>ul').contains('online',{ matchCase: false });
});
;