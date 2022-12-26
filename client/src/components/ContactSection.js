import React from "react";

const ContactSection = () => {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
          <div className="flex flex-col apace-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">תקשר אתנו</h1>
              <p className="pt-2 text-cyan-100 text-sm">בלה בלה בלה בלה בלה בלה בה להלבלבלבלבלב לב הלב הלב לב הלב הלב הלבלבהלב הלבה</p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call-outline"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>054020205156</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail-outline"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>avi@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location-outline"
                  className="text-teal-300 text-xl"
                ></ion-icon>
                <span>11, stere</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-linkdin"></ion-icon>
              </a>
              <a href="">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-28"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80">
              <form action="" className="flex flex-col space-y-4">
                <div>
                  <label for className="text-sm">
                    Your name
                  </label>

                  <input
                    type="text"
                    placeholder="השם שלך"
                    className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>

                <div>
                  <label for className="text-sm">
                    אימייל כתובת
                  </label>

                  <input
                    type="email"
                    placeholder="האימייל שלך"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>
                <div>
                  <label for className="text-sm">
                    akhj, vusgv
                  </label>

                  <textarea
                    type="text"
                    rows="4"
                    placeholder="השם שלך"
                    className="ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
