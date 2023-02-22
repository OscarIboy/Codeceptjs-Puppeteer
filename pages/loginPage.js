const { I } = inject()

class LoginPage{
    constructor(){

    }

    visit(){
        I.amOnPage("login")
        I.wait(5)
    }
}