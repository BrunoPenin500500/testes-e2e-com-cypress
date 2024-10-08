import { faker } from '@faker-js/faker/locale/en'

describe('Scenarios where authentication is a pre-condition', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes')
    cy.sessionLogin()
  })

  it('CRUDs a note', () => {

    const noteDescription = faker.lorem.words(4)

    cy.createNote(noteDescription)
    cy.wait('@getNotes')

    const updateNoteDescription = faker.lorem.words(4)
    const attachFile = true

    cy.editNote(noteDescription, updateNoteDescription, attachFile)
    cy.wait('@getNotes')

    cy.deleteNote(updateNoteDescription)
    cy.wait('@getNotes')
  })

  it('sucessfully submits the settings form', () => {
    cy.intercept('POST', '**/prod/billing').as('paymentRequest')

    cy.fillSettingsFormAndSubmit()

    cy.wait('@getNotes', { timeout: 10000 })
    cy.wait('@paymentRequest')
      .its('state')
      .should('be.equal', 'Complete')
  })

  it('logs out', { tags: '@desktop-and-tablet' }, () => {
    cy.visit('/')
    cy.wait('@getNotes')

    if (Cypress.config('viewportWidth') < Cypress.env('viewportWidthBreakpoint')) {
      cy.get('.navbar-toggle.collapsed')
        .should('be.visible')
        .click()
    }

    cy.contains('.nav a', 'Logout').click()

    cy.get('#email').should('be.visible')
  })
})

