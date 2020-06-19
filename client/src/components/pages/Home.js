import React from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';

const Home = () => {
    return (
        <div className="grid-2">
           <div>
            <ContactForm />
           </div>
           <di>
               <Contacts/>
           </di>
        </div>
    )
}

export default Home;
