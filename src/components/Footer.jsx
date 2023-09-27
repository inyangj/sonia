import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import CopyToClipboard from 'react-copy-to-clipboard';


const Footer = () => {
    const [isCopied1, setIsCopied1] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
  
    const handleEmailCopy = () => {
      setIsCopied1(true);
  
      setTimeout(() => {
        setIsCopied1(false);
      }, 2000);
    };
  
    const handlePhoneCopy = () => {
      setIsCopied2(true);
  
      setTimeout(() => {
        setIsCopied2(false);
      }, 2000);
    };

    return(
        <div className="my-[40px] flex gap-4 justify-center">
             <div>
        <CopyToClipboard text="chiburomaonwuchekwa@gmail.com" onCopy={handleEmailCopy}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" ><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </CopyToClipboard>
        {isCopied1 && <div>Email chiburomaonwuchekwa@gmail.com Copied!</div>}
      </div>
      <div>
        <CopyToClipboard text="+2349065791359" onCopy={handlePhoneCopy}>
        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
        </CopyToClipboard>
        {isCopied2 && <div>Mobile Number +2349065791359 Copied!</div>}
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