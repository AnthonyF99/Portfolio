import React, { useState } from 'react';
import Modal from 'react-modal';

const FormModal = ({ isOpen, onRequestClose, type, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <h2>{type === 'add' ? 'Ajouter' : 'Modifier'} {type}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Titre" 
                    onChange={handleChange} 
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    onChange={handleChange} 
                />
                <button type="submit">{type === 'add' ? 'Ajouter' : 'Modifier'}</button>
            </form>
        </Modal>
    );
};

export default FormModal;
