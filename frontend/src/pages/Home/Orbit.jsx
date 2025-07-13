import React from "react";
import Logo from '/Logo.png'
import LogoNew from '/kingdomNew.png';


const subsidiaries = [
  { name: "Career Guidance & Clarity\nMotivation & Personality Development ",  },
  
  { name: "Certification Courses & Placement-Oriented Training",  },
  { name: "Parent Meetings\n Health & Mental Wellness Programs ", },
  { name: "Internship & Project Support\nIndustry Expert Talks or Webinars", },
  { name: "Entrepreneurship & Startup Training", },
  { name: "\nCSR Partnership Help for College ",  },

  //left side 
  // { name: "I for", text: "INNOVATIVE" },
  // { name: "N for", text: "Nurturing Relationships" },
  // { name: "K for", text: "Knowledge" },
  // { name: "A for", text: "Accountability" },
  // { name: "R for", text: "Reliability" },
  // { name: "P for", text: "Passion" },
];

export default function Orbit() {
  return (
    <div className="circular-reviews__void" id="void">
      <style>{`
        @media (max-width: 1023px) {
          .circular-reviews__void .circular-desktop {
            display: none !important;
          }
          .circular-reviews__void .cards-mobile {
            display: flex !important;
          }
        }
        @media (min-width: 1024px) {
          .circular-reviews__void .circular-desktop {
            display: block !important;
          }
          .circular-reviews__void .cards-mobile {
            display: none !important;
          }
        }
        .circular-reviews__void {
          width: 100%;
          max-width: 1024px;
          margin: auto;
          position: relative;
          aspect-ratio: 1.8 / 1;
        }

        // .circular-reviews__void ul:hover * {
        //   animation-play-state: paused;
        // }

        .circular-reviews__void ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          z-index: 1;
        }

        .circular-reviews__void li {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          animation: circular-reviews-rotateCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
        }

        .circular-reviews__void .card {
          width: 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          gap: 8px;
          background: #FFFFFF;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
          border-radius: 20px;
          font-family: MaxOT;
          font-weight: 800;
          font-size: 18px;
          color: #E63946;
          animation: circular-reviews-rotateCCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
        }

        .circular-reviews__void .inkarp-meaning {
          font-size: 14px;
          line-height: 1.4;
          text-align: center;
          color: #333;
        }

        .circular-reviews__void .inkarp-meaning p {
          margin: 2px 0;
        }

        .circular-reviews__void a {
          text-decoration: none;
          color: unset;
        }

        .circular-reviews__void .model-name {
          font-family: MaxOT;
          font-weight: 350;
          font-size: 18px;
          color: #E63949;
          display: block;
          text-align: center;
        }

        .circular-reviews__void li:nth-child(2),
        .circular-reviews__void li:nth-child(2) .card {
          animation-delay: -6.666s;
        }
        .circular-reviews__void li:nth-child(3),
        .circular-reviews__void li:nth-child(3) .card {
          animation-delay: -13.333s;
        }
        .circular-reviews__void li:nth-child(4),
        .circular-reviews__void li:nth-child(4) .card {
          animation-delay: -20s;
        }
        .circular-reviews__void li:nth-child(5),
        .circular-reviews__void li:nth-child(5) .card {
          animation-delay: -26.666s;
        }
        .circular-reviews__void li:nth-child(6),
        .circular-reviews__void li:nth-child(6) .card {
          animation-delay: -33.333s;
        }

        @keyframes circular-reviews-rotateCW {
          from { transform: translate3d(0px, -50%, -1px) rotate(-45deg); }
          to { transform: translate3d(0px, -50%, 0px) rotate(315deg); }
        }

        @keyframes circular-reviews-rotateCCW {
          from { transform: rotate(45deg); }
          to { transform: rotate(-315deg); }
        }

        .circular-reviews__void .center-circle {
          position: absolute;
          width: 200px;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #FFFFFF;
          box-shadow: 0px 18px 36px -18px rgba(46, 5, 15, 0.3), 0px 30px 60px -12px 
          rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        .circular-reviews__void .second-circle {
          position: absolute;
          width: 40%;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          // background: #F5F4FE;
          opacity: 1;
          box-shadow: 0px 18px 36px -18px rgba(208, 205, 219, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        .circular-reviews__void .last-circle {
          position: absolute;
          width: 66%;
          aspect-ratio: 1 / 1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background:rgb(207, 205, 220);
          opacity: 0.25;
          box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
          border-radius: 50%;
        }

        //   .top-left-content {
        //   position: absolute;
        //   top: 5%;
        //   left: 0;
        //   width: 40%;
        //   z-index: 10;
        //   padding-left: 24px;
        //   padding-right: 12px;
        //   color: #222;
        //   font-family: Roboto;
        //   font-size: 32px;
        //   line-height: ;
        // }


        .circular-reviews__void .crop {
          -webkit-mask-image: linear-gradient(60deg, rgba(19, 15, 15, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1));
        }
      `}</style>


      <div className="text-3xl mt-10 sm:text-xl md:text-3xl font-semibold font-[MaxOT] text-black mb-4">
        <h3 className="text-4xl font-semibold text-blue-500 mb-8 text-center max-w-4xl mx-auto">
        Partnering with institutions to build confident, career-ready youth
        through life skills, digital knowledge, and personal development.
      </h3>
      </div>
      {/* Desktop Circular Layout */}
      <div className="circular-desktop">
        <div className="circular-reviews__void">
          <ul style={{ "--count": subsidiaries.length }} className="crop" >
            {subsidiaries.map((subsidiary, idx) => (
              <li key={idx}>
                <div className="card">
                  <span className="model-name whitespace-pre-line">{subsidiary.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="last-circle "></div>
          <div className="second-circle flex items-center justify-center">
            <img src={LogoNew} alt="Inkarp Logo" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      {/* Mobile/Tablet Cards Layout */}
      <div className="cards-mobile w-full flex flex-col items-center justify-center mt-6 gap-6 px-2" style={{ display: 'none' }}>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {subsidiaries.map((subsidiary, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">
              <span className="font-bold text-lg text-blue-600 whitespace-pre-line">{subsidiary.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <img src={Logo} alt="Inkarp Logo" className="w-24 h-24 object-contain" />
        </div>
      </div>
    </div>
  );
}