import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from '../button/Button'
import styles from './Contactform.module.css'
const Contactform = () => {
    return (
        <>
            <section className={styles.container}>

                <div className={styles.contact_form}>
                    <div className={styles.top_btn}>

                    <Button text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px"/>}
                    />

                    <Button text="VIA CALL"
                        icon={<FaPhoneAlt fontSize="24px"/>}
                    />
                    </div>

                    <Button
                    isOutline={true}
                     text="VIA EMAIL FORM"
                        icon={<HiMail fontSize="24px"/>}
                    />

                    <form>
                        <label htmlFor="name">Name:</label><br/>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required/><br/>
                    </form>
                    
                </div>

                <div className={styles.contact_image}>

                </div>
            </section>
        </>
    )
}

export default Contactform