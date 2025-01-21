const mongoose = require('mongoose');
const Contact = require('./contactModel'); 

const DB_URI = 'mongodb+srv://dbUser:myPassword123@cluster0.l9efy.mongodb.net/db-contacts';

mongoose.connect(DB_URI)
  .then(() => console.log('Database connection successful'))
  .catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
  });


const listContacts = async () => {
  return await Contact.find(); 
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId); 
};

const removeContact = async (contactId) => {
  return await Contact.findByIdAndDelete(contactId); 
};

const addContact = async (body) => {
  const newContact = new Contact(body); 
  await newContact.save(); 
  return newContact;
};

const updateContact = async (contactId, body) => {
  return await Contact.findByIdAndUpdate(contactId, body, { new: true }); 
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
