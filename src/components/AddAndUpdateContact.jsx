import React from 'react'
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required....!!"),
    email: Yup.string().email("Invalid email formate...").required("Email is required....!!"),
})

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contact}) {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("Contact Added Suceesfully");
        } catch (error) {
            console.log(error)
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Contact Updated Suceesfully");
        } catch (error) {
          console.error("Error updating contact:", error);
          toast.error("Failed to update contact. Please try again.");
        }
    }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
        validationSchema={contactSchemaValidation}
        initialValues={isUpdate ? {
                name: contact.name,
                email: contact.email,
        } :
        {
            name: "",
            email: "",
        }}
        onSubmit={(values) => {
            console.log(values);
            isUpdate ? 
            updateContact(values, contact.id) :
            addContact(values);
        }}
        >
          <Form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10"/>
              <div className='text-red-500 text-xs'>
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="border h-10"/>
              <div className='text-red-500 text-xs'>
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className='bg-orange self-end px-3 py-1 border '>
                { isUpdate ? "Update" : "Add"} Contact
            </button>

          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdateContact