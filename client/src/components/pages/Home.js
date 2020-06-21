import React from 'react';
import Contacts from '../contact/Contacts';
import ContactForm from '../contact/ContactForm';
import ContactFilter from '../contact/ContactFilter';

const Home = () => {
    return (
        <div className="grid-2">
           <div>
            <ContactForm />
           </div>
           <di>
               <ContactFilter/>
               <Contacts/>
           </di>
        </div>
    )
}

export default Home;
