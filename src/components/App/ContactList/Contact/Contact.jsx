import css from "./Contact.module.css"
import { IoMdContact } from "react-icons/io";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Contact({ contact, onDeleteContact }) {
    return (
        <div className={css.container}>
            <span>
            <p><IoMdContact className={css.icon} size="16"/>{contact.name}</p>
                <p><FaPhoneFlip className={css.icon} size="16"/>{contact.number}</p>
                </span>
            <button onClick={()=> onDeleteContact(contact.id)}>Delete</button>
        </div>
    )
}