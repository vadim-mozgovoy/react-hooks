import Contact from "../Contact/contact";
import React, {useState, useEffect} from 'react';
import {contacts} from "../../constants/constants";
import Male from '../../icon/female.png'
import Female from '../../icon/male.png'
import Unknown from '../../icon/undefined.png'

export function Contacts() {
    const [contactList, setContactList] = useState(contacts);
    const [searchText, setSearchText] = useState('');
    const [searchGender, setSearchGender] = useState({male: true, female: true, unknown: true});

    const filteredContacts = () => {
        const filteredByGender = contacts.filter(contact => searchGender[contact.gender] || (!(contact.gender in searchGender) && searchGender.unknown));
        return filteredByGender.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.phone}`.toLowerCase().includes(searchText));
    }
    useEffect(() => {
        setContactList(filteredContacts());
    }, [searchText, searchGender])

    const handleSearchByGender = (event) => {
        const target = event.target;
        setSearchGender({
            ...searchGender, [event.target.name]: target.checked
        });
    }

    return (<div className="wrapper">
            <label htmlFor="exampleDataList" className="form-label mt-2">Пошук контактiв</label>
            <input className="form-control w-25 m-auto" id="exampleDataList"
                   placeholder="Type to search..." type='text'
                   onChange={(event) => setSearchText(event.target.value.toLowerCase())}
                   value={searchText}/>

            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column m-2'>
                    <div className="form-check form-switch m-2">
                        <input className="form-check-input" type="checkbox" role="switch"
                               name="female"
                               checked={searchGender.female}
                               onChange={handleSearchByGender}/>
                    </div>
                    <div className="align-self-start  ">
                        <img src={Female} alt="female"/>
                    </div>
                </div>
                <div className='d-flex flex-column m-2'>
                    <div className="form-check form-switch m-2">
                        <input className="form-check-input" type="checkbox" role="switch"
                               name="male"
                               checked={searchGender.male}
                               onChange={handleSearchByGender}/>
                    </div>
                    <div className="align-self-start  ">
                        <img src={Male} alt="male"/>
                    </div>
                </div>
                <div className='d-flex flex-column m-2'>
                    <div className="form-check form-switch m-2">
                        <input className="form-check-input" type="checkbox" role="switch"
                               name="unknown"
                               checked={searchGender.unknown}
                               onChange={handleSearchByGender}/>
                    </div>
                    <div className="align-self-start  ">
                        <img src={Unknown} alt="Unknown"/>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center '>
                {contactList.map((contact, index) => {
                    return <Contact contact={contact} key={index}/>
                })}
            </div>

        </div>);
}

export default Contacts
