describe('My First Test', () => {
    it('New vehicle', () => {
        cy.visit('www.vamexpress.by');
        cy.get('#ctl00_MainContent_hlLogIn').click();
        //login & password
        cy.get('#ctl00_MainContent_tbUserLogin').click();
        cy.get('#ctl00_MainContent_tbUserLogin').type('*****');
        cy.get('#ctl00_MainContent_tbUserPass').click();
        cy.get('#ctl00_MainContent_tbUserPass').type('********');
        cy.get('#ctl00_MainContent_cbRememberMe').check();
        //input
        cy.get('#ctl00_MainContent_bSubmit').click();
        //main menu
        cy.get('#ctl00_MainMenu_hlSouls').click();
        cy.get('#ctl00_MainMenu_hlCars').click();
        cy.get('#ctl00_MainContent_HyperLink1').click();
        //"new vehicale" page
        cy.get('#ctl00_MainContent_tbModel').type('FORD TRANSIT');
        cy.get('#ctl00_MainContent_tbNumber').type('AA 1111-1');
        cy.get('#ctl00_MainContent_tbFirstName').type('Иванов');
        cy.get('#ctl00_MainContent_tbLastName').type('Иван');
        cy.get('#ctl00_MainContent_tbThirdName').type('Иванович');
        cy.get('#ctl00_MainContent_tbPassportSeria').type('AA');
        cy.get('#ctl00_MainContent_tbPassportNumber').type('1234567');
        cy.get('#ctl00_MainContent_tbPersonalNumber').type('ID987654321');
        cy.get('#ctl00_MainContent_tbROVD').type('Каким-то РУВД какого-то района');
        cy.get('#ctl00_MainContent_tbDateOfIssue').click();
        cy.get('.ui-datepicker-month').select('0');
        cy.get('.ui-datepicker-year').select('2020');
        cy.get('#ui-datepicker-div').type('1');
        cy.get('#ctl00_MainContent_tbValidity').click();
        cy.get('.ui-datepicker-month').select('0');
        cy.get('.ui-datepicker-year').select('2022');
        cy.get('#ui-datepicker-div').type('2');
        cy.get('#ctl00_MainContent_tbRegistrationAddress').type('г.Брест, ул. Длинная, д. 1, кв.1');
        //create
        cy.get('#ctl00_MainContent_btnCreate').click();
        //check new vehicale and delete
        cy.get('#ctl00_MainContent_stbNumber').type('AA 1111-1');
        cy.get('#ctl00_MainContent_btnSearch').click();
        cy.get('#ctl00_MainContent_lvAllCars_ctrl0_lbDelete').click();

    })
})
