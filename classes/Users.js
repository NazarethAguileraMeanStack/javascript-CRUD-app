class User {
    constructor(obj = {
        id: -1,
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    }) {
        this.id = obj.id;
        this.name = obj.name;
        this.username = obj.username;
        this.email = obj.email;
        this.phone = obj.phone;
        this.website = obj.website;
        this.address = {
            street : obj.address.street,
            suite : obj.address.suite,
            city : obj.address.city,
            zipcode : obj.address.zipcode,
            geo: {
                lat : obj.address.geo.lat,
                lng : obj.address.geo.lng
            }
        };
        this.company = {
            name : obj.company.name,
            catchPhrase: obj.company.catchPhrase,
            bs: obj.company.bs 
        };
    }

    get ID() {
        return this.id;
    }

    set ID(val) {
        this.id = val;
    }

    get Name() { 
        return this.name; 
    }

    set Name(val) { 
        this.name = val; 
    }

    get Username() {
        return this.username;
    }

    set Username(val) {
        this.username = val;
    }

    get Email() {
        return this.email;
    }

    set Email(val) {
        this.email = val;
    } 

    get Phone() {
        return this.phone;
    }

    set Phone(val) {
        this.phone = val;
    }

    get Website() {
        return this.website;
    }

    set Website(val) {
        this.website = val;
    }

    get Street() {
        return this.address.street;
    }

    set Street(val) {
        this.address.street = val;
    }

    get Suite() {
        return this.address.suite;
    }

    set Suite(val) {
        this.address.suite= val;
    }

    get City() {
        return this.address.city;
    }

    set City(val) {
        this.address.city = val;
    }

    get Zipcode() {
        return this.address.zipcode;
    }

    set Zipcode(val) {
        this.address.zipcode = val;
    }

    get Latitude() {
        return this.address.geo.lat;
    }

    set Latitude(val) {
        this.address.geo.lat = val;
    }

    get Longtitude() {
        return this.address.geo.lng;
    }

    set Longtitude(val) {
        this.address.geo.lng = val;
    }

    get CompanyName() {
        return this.company.name;
    }

    set CompanyName(val) {
        this.company.name = val;
    }

    get CatchPhrase() {
        return this.company.catchPhrase;
    }

    set CatchPhrase(val) {
        this.company.catchPhrase = val;
    }

    get BusinessSlogan() {
        return this.company.bs;
    }

    set BusinessSlogan(val) {
        this.company.bs = val;
    }


}