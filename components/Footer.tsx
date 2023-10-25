import Image from "next/image";

import FooterEnquiryForm from "./FooterEnquiryForm";

import calvaryHorLogo from "@/public/Horizontal Calvary Carpentry.png";
import phoneImg from "@/public/images/Phone.png";
import whatsappImg from "@/public/images/Whatsapp.png";
import linkedinImg from "@/public/images/Linkedin.png";
import emailImg from "@/public/images/email.png";
import phone2Img from "@/public/images/phone2.png";

const Footer = () => {
  return (
    <footer className="space-y-12 bg-black px-9 py-9 text-white">
      <div className="px-3">
        <div className="space-y-10">
          <div>
            <Image
              src={calvaryHorLogo}
              alt="Calvary Carpentry Logo"
              width={165}
              height={55}
            />
          </div>
          <p className="whitespace-normal font-montserrat font-medium text-white">
            Welcome to Calvary Carpentry Sdn. Bhd., where exceptional
            craftsmanship meets unwavering trust. With a legacy of excellence
            established by prestigious brands in Singapore, we've wood for you.
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <div className="px-3">
        <div className="mb-4 space-y-2 text-center">
          <h4 className="text-xl uppercase text-white">Contact Us</h4>
          <hr className="text-white" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Image src={phoneImg} alt="Phone Icon" width={48} height={48} />
          </div>
          <div>
            <Image
              src={whatsappImg}
              alt="Whatsapp Icon"
              width={48}
              height={48}
            />
          </div>
          <div>
            <Image
              src={linkedinImg}
              alt="Linkedin Icon"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
      {/* End Contact Us */}

      {/* Enquiry Form */}
      <div className="px-3">
        <div className="mb-4 space-y-2 text-center">
          <h4 className="text-xl uppercase text-white">Enquiry Form</h4>
        </div>
        <div>
          <FooterEnquiryForm />
        </div>
      </div>

      {/* End Enquiry Form */}

      {/* Location */}
      <div className="px-3">
        <div className="mb-4 space-y-2 text-center">
          <h4 className="text-xl uppercase text-white">Location</h4>
          <hr className="text-white" />
        </div>
        <div className="space-y-8 text-xl">
          <div className="space-y-4">
            <h3 className="mb-3 font-medium uppercase">Malaysia</h3>
            <div>
              <p>No. 26, Jalan Laman Setia 7/6,</p>
              <p>Taman Laman Setia,81550</p>
              <p>Gelang Patah,</p>
              <p>Johor, Malaysia.</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={emailImg}
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="min-h-[24px] min-w-[24px]"
                  />
                </div>
                <a href="" className="break-all">
                  msia@calvarycarpentry.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={phone2Img}
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <a href="" className="">
                  +60 16-778 5788
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xl">
            <h3 className="mb-3 font-medium uppercase">Singapore</h3>
            <div>
              <p>54 Senoko Road, Singapore </p>
              <p>758118, Floor 1</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={emailImg}
                    alt="Email Icon"
                    width={24}
                    height={24}
                    className="min-h-[24px] min-w-[24px]"
                  />
                </div>
                <a href="" className="break-all">
                  sales@calvarycarpentry.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    src={phone2Img}
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <a href="">+65 8776 7837</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Location */}

      <div className="px-3">
        <div className="mb-4 space-y-2 text-center">
          <h4 className="text-xl uppercase text-white">Support</h4>
          <hr className="text-white" />
        </div>
        <ul className="space-y-4">
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">FAQ's</a>
          </li>
          <li>
            <a href="">Maintenance</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
      </div>

      <div className="pt-4 text-center">
        <p>©2023 Calvary Carpentry Sdn. Bhd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
