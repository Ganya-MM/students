const products = [];

module.exports = class Product {
    constructor(name, contact, subjects, classs, society, year){
        this.name = name;
        this.contact = contact;
        this.subjects = subjects;
        this.classs = classs;
        this.society = society;
        this.year = year;
    }
    // save() {
    //     products.push(this);
    // }

    static getAll() {
        return products;
    }
}