import React from "react";

const FooterEnquiryForm = () => {
  return (
    <form>
      <div className="space-y-4 text-xl text-[#5A5A5A]">
        <input
          type="text"
          placeholder="name *"
          className="w-full rounded-md px-5 py-3"
        />
        <input
          type="text"
          placeholder="contact number *"
          className="w-full rounded-md px-5 py-3"
        />
        <textarea
          placeholder="leave your enquiry here"
          rows={3}
          className="w-full rounded-md px-5 py-3"
        />
        <div className="w-full text-center">
          <button
            type="submit"
            className="min-w-[150px] rounded-full bg-[#137765] px-6 py-3 uppercase text-white"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default FooterEnquiryForm;
