Feature: Search the word Online on the searchbar

    As a logged in user
    I want to search the word Online on the searchbar

    Scenario: Searchbar usage
        Given The user visited the site
        When The user typed the word Online on the searchbar and pressed Enter Key
        Then The site will redirect the page to search results 