import React from "react";
import Male from '../../icon/male.png'
import Female from '../../icon/female.png'
import Unknown from '../../icon/undefined.png'

import './/contactstyle.css';

function Contact(contact) {
    return (<div className="col-3 m-3 ">
            <div className="card mb-3">
                <div className="d-flex flex-row ">
                    <div className="col-4">
                        <img src={require(`../../images/${contact.contact.photo}`)}
                             className="rounded-circle float-start m-2 "
                             alt='avatar'/>
                    </div>
                    <div className="col-8 d-flex">
                        <div className="card-body  ">
                            <h5 className="card-title">{contact.contact.firstName} {contact.contact.lastName}</h5>
                            <p className="card-text">{contact.contact.phone}</p>
                        </div>
                        <div className='p-2'>
                            {contact.contact.gender === "female" ? (<img src={Female} alt="female"
                            className="icon"/>) : contact.contact.gender === "male" ? (
                                <img src={Male} alt="male" className="icon"/>) : (
                                <img src={Unknown} alt="unisex" className="icon"/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;
