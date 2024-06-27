class User {
    constructor (fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login (email, password) {
        if (this.email == email && this.password == password) {
            console.log("Acesso autorizado.");
        } else {
            console.log("Acesso negado.");  
        }
    }
}

const nicolas = new User("Nicolas Felipe da Silva", "nicolas@gmail.com", 1234); 
const nicolasFalso = new User("Nicolas Felipe da Silva", "nicolas2@gmail.com", 1234); 

nicolas.login("nicolas@gmail.com", 1234);
nicolasFalso.login("nicolas@gmail.com", 4321);