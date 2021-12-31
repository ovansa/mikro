import { IPhoneDetails } from './phoneDetails.interface';
import {
  storePhoneNumber,
  getUniquePhoneDetails,
  getListOfPhoneNumbers,
} from './utils';

const phoneBook = new Map<string, IPhoneDetails>();

const phoneOne = '09088998909';
const detailsOne: IPhoneDetails = {
  name: 'Mikro Engineer',
  email: 'micro@gmail.com',
  dateCreated: new Date(),
};

const phoneTwo = '09088990092';
const detailsTwo: IPhoneDetails = {
  name: 'People Team',
  email: 'people@gmail.com',
  dateCreated: new Date(),
};

storePhoneNumber(phoneBook, phoneOne, detailsOne);
storePhoneNumber(phoneBook, phoneTwo, detailsTwo);

const details = getUniquePhoneDetails(phoneBook, '09088990092');
const phoneList = getListOfPhoneNumbers(phoneBook);
