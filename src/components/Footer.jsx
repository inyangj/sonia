import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import CopyToClipboard from 'react-copy-to-clipboard';


const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);
    const phoneNumber = '+2349065791359';
    const emailAddress = 'chiburomaonwuchekwa@gmail.com';

    const handlePhoneCopy = () => {
        setIsCopied(true);
   
        setTimeout(() => {
          setIsCopied2(false);
        }, 2000);
      };
  
  
    return(
        <div className="my-[40px] flex gap-4 justify-center">
             <div>
             <a href={`mailto:${emailAddress}`}>
        <img src="/email.svg" alt="icon" />
        </a>
      </div>
      <div>
        <CopyToClipboard text="+2349065791359" onCopy={handlePhoneCopy}>
      <a href={`tel:${phoneNumber}`}>
        <img src="/phone.svg" alt="icon" />
        </a>
        </CopyToClipboard>
       
      </div>

      <ul className="flex gap-4">
            <li><a href="#" target="_blank"><img src="/twitter.svg" alt="twitter" /></a></li>
            <li><a href="instagram.com/princess_sonear/" target="_blank"><img src="/instagram.svg" alt="instagram" /></a></li>
            <li><a href="https://wa.me/qr/QYL57BLKP7PZJ1" target="_blank"><img src="/WhatsApp.svg" alt="WhatsApp" /></a></li>
            <li><a href="#" target="_blank"><img src="/facebook.svg" alt="facebook" /></a></li>
            <li><a href="#" target="_blank"><img src="/linkedin.svg" alt="LinkedIn" /></a></li>
        </ul>
        </div>
    )
}

export default Footer