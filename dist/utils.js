"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOfPhoneNumbers = exports.getUniquePhoneDetails = exports.storePhoneNumber = void 0;
const storePhoneNumber = (phoneBook, phoneNumber, phoneDetails) => {
    if (phoneNumber !== undefined && phoneDetails !== undefined) {
        phoneBook.set(phoneNumber, phoneDetails);
        return 'Saved';
    }
    return 'Invalid Phone and Invalid Phone details';
};
exports.storePhoneNumber = storePhoneNumber;
const getUniquePhoneDetails = (phoneBook, phoneNumber) => {
    const details = phoneBook.get(phoneNumber);
    return details !== undefined ? details : 'Not found';
};
exports.getUniquePhoneDetails = getUniquePhoneDetails;
const getListOfPhoneNumbers = (phoneBook) => {
    const phoneNumbers = [...phoneBook.keys()].map((key) => {
        return key;
    });
    return phoneNumbers;
};
exports.getListOfPhoneNumbers = getListOfPhoneNumbers;
