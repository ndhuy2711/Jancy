import Zalo from "../images/icons/zalo.png";
import Whatsapp from "../images/icons/whatsapp.png"
import Phone from "../images/icons/phone.png";
import React from "react";
export default function ButtonContact() {
  return (
    <div id="button-contact-vr" className="">
      <div id="gom-all-in-one">
        {/* v3 */}
        {/* zalo */}
        <div id="zalo-vr" className="button-contact">
          <div className="phone-vr">
            <div className="phone-vr-circle-fill" />
            <div className="phone-vr-img-circle">
              <a target="_blank" href="https://zalo.me/0909977939">
                <img src={Zalo} alt="Zalo" />
              </a>
            </div>
          </div>
        </div>
        {/* end zalo */}
        {/* whatsapp */}
        <div id="whatsapp-vr" className="button-contact">
          <div className="phone-vr">
            <div className="phone-vr-circle-fill" />
            <div className="phone-vr-img-circle">
              <a target="_blank" href="https://wa.me/84909977939">
                <img src={Whatsapp} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
        {/* end whatsapp */}
        <div id="phone-vr" className="button-contact">
          <div className="phone-vr">
            <div className="phone-vr-circle-fill" />
            <div className="phone-vr-img-circle">
              <a href="tel:0909977939">
                <img src={Phone} alt="Phone number" />
              </a>
            </div>
          </div>
        </div>
        {/* end phone */}
      </div>
      {/* end v3 class gom-all-in-one */}
    </div>
  );
}
