import { IPhoneDetails } from './phoneDetails.interface';

export const storePhoneNumber = (
  phoneBook: Map<string, IPhoneDetails>,
  phoneNumber: string,
  phoneDetails: IPhoneDetails
): string => {
  if (phoneNumber !== undefined && phoneDetails !== undefined) {
    phoneBook.set(phoneNumber, phoneDetails);
    return 'Saved';
  }

  return 'Invalid Phone and Invalid Phone details';
};

export const getUniquePhoneDetails = (
  phoneBook: Map<string, IPhoneDetails>,
  phoneNumber: string
): string | IPhoneDetails => {
  const details = phoneBook.get(phoneNumber);
  return details !== undefined ? details : 'Not found';
};

export const getListOfPhoneNumbers = (
  phoneBook: Map<string, IPhoneDetails>
): string[] => {
  const phoneNumbers = [...phoneBook.keys()].map((key) => {
    return key;
  });

  return phoneNumbers;
};
