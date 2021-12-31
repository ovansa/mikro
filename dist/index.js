"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const phoneBook = new Map();
const phoneOne = '09088998909';
const detailsOne = {
    name: 'Mikro Engineer',
    email: 'micro@gmail.com',
    dateCreated: new Date(),
};
const phoneTwo = '09088990092';
const detailsTwo = {
    name: 'People Team',
    email: 'people@gmail.com',
    dateCreated: new Date(),
};
(0, utils_1.storePhoneNumber)(phoneBook, phoneOne, detailsOne);
(0, utils_1.storePhoneNumber)(phoneBook, phoneTwo, detailsTwo);
const details = (0, utils_1.getUniquePhoneDetails)(phoneBook, '09088990092');
const phoneList = (0, utils_1.getListOfPhoneNumbers)(phoneBook);
