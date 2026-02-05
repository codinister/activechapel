import useGetQuery from '@/state/query/useGetQuery';
import Map from './Map';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import ContactForm from './ContactForm';

const Contact = () => {
  const sett = useGetQuery('settings', '/settings') || [];

  return (
    <div>
      <div className="container p-6 sm:p-0 mx-auto flex flex-col sm:flex-row   gap-10  sm:py-20">
        <div className="flex-1">
          <h5 className="mb-4">REACHOUT TO OUR CHURCH SUPPORT</h5>

          <div className="flex mt=10 mb-6 border-2 border-accent-foreground p-4 gap-4">
            <div>
              <MdOutlineMail className="text-5xl text-primary" />
            </div>
            <div>
              <p>Send Us A Message</p>
              <h6>{sett[0]?.email}</h6>
            </div>
          </div>

          <div className="flex border-2 border-accent-foreground p-4 gap-4 mb-6">
            <div>
              <FaPhoneAlt className="text-5xl text-primary" />
            </div>
            <div>
              <p>Give Us A Call</p>
              <h6>{sett[0]?.phone1}</h6>
            </div>
          </div>

          <div className="flex border-2 border-accent-foreground p-4 gap-4 mb-6">
            <div>
              <IoLocationOutline className="text-5xl text-primary" />
            </div>
            <div>
              <p>Visit Our Location</p>
              <h6>{sett[0]?.location}</h6>
            </div>
          </div>

        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
      <div>
        <Map src={sett[0]?.location} width="100%" height="350pz" />
      </div>
    </div>
  );
};

export default Contact;
