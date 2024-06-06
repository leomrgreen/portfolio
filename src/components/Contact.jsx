import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <section>
            <div className="contact-title">
                <h2>Contact</h2>
                <FontAwesomeIcon icon={faPhone} />
            </div>
        </section>
    );
}

export default Contact