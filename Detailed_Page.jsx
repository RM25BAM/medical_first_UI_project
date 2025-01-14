<><meta charSet="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta httpEquiv="X-UA-Compatible" content="ie=edge" /><meta name="description" content="Simple landind page" /><meta name="keywords" content="" /><meta name="author" content="" /><link
  rel="stylesheet"
  href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" /></>
{/*Replace with your tailwind.css once created// issues with the tailwind.css file link to fonts https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700*/}
<link href=".output.css" rel="stylesheet" />
{/* gradient*/}
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n      .gradient {\n        background: linear-gradient(90deg, #38A897 0%, #93C572 100%);\n      }\n    "
  }}
/>
{/*Nav*/}
<nav id="header" className="fixed w-full z-30 top-0 text-white">
  <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <img src="medical_logo.png" alt="" className="m-0" />
    <div className="pl-4 flex items-center">
      <a
        className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
        href="#"
      >
        {/*Icon from: http://www.potlabicons.com/ */}
        Pythons Medical Center
      </a>
    </div>
    <div className="block lg:hidden pr-4">
      <button
        id="nav-toggle"
        className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </button>
    </div>
    <div
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
        {/*button is here*/}
        <button
          id="navAction"
          className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Exam
        </button>
        <button
          id="navAction"
          className="mx-auto lg:mx-0 hover:underline bg-black text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Admin
        </button>
      </ul>
    </div>
  </div>
  <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>
{/* this part is where the patient and exam info is at*/}
<div className="pt-24">
  <div className="container mx-auto flex flex-wrap pt-4 pb-12">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-2xl overflow-hidden shadow">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <div className="w-full font-bold text-2xl text-gray-800 px-6 ">
              Patient Info
            </div>
            <p className="text-gray-800 leading-2  m-1 w-full text-left">
              {" "}
              <strong> Patient Name: </strong>
            </p>
            <p className="text-gray-800 leading-2  m-1 w-full text-left">
              {" "}
              <strong> ID: </strong>
            </p>
            <p className="text-gray-800 leading-2  m-1 w-full text-left">
              {" "}
              <strong> Age: </strong>
            </p>
            <p className="text-gray-800 leading-2 m-1 w-full text-left">
              {" "}
              <strong> Sex: </strong>
            </p>
            <p className="text-gray-800 leading-2  m-1 w-full text-left">
              {" "}
              <strong>BMI: </strong>
            </p>
            <p className="text-gray-800 leading-2 m-1 w-full text-left">
              {" "}
              <strong>Zipcode: </strong>
            </p>
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
        <div className="flex-1 bg-white rounded-t rounded-b-2xl overflow-hidden shadow">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <div className="w-full font-bold text-2xl text-gray-800 px-6 ">
              Exam Info
            </div>
            <p className="text-gray-800 leading-2 m-4 w-full text-left">
              {" "}
              <strong> Exam ID: </strong>
            </p>
            <p className="text-gray-800 leading-2 m-3 w-full text-left">
              {" "}
              <strong> Date: </strong>{" "}
            </p>
            <p className="text-gray-800 leading-2 m-4 w-full text-left">
              {" "}
              <strong> Brixia Score</strong>
            </p>
            <p className="text-gray-800 leading-2 m-4 w-full text-left">
              {" "}
              <strong />{" "}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{/*Effect of the wave for the site*/}
<div className="relative -mt-12 lg:-mt-24">
  <svg
    viewBox="0 0 1428 174"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <g
        transform="translate(-2.000000, 44.000000)"
        fill="#FFFFFF"
        fillRule="nonzero"
      >
        <path
          d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
          opacity="0.100000001"
        />
        <path
          d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
          opacity="0.100000001"
        />
        <path
          d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
          id="Path-4"
          opacity="0.200000003"
        />
      </g>
      <g
        transform="translate(-4.000000, 76.000000)"
        fill="#FFFFFF"
        fillRule="nonzero"
      >
        <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
      </g>
    </g>
  </svg>
</div>
{/* Features Section */}
<section id="features">
  <div className="section-container bg-white pl-0 p-6">
    <div className="relative flex flex-col md:flex-row md:space-x-32">
      {/* Image */}
      <div className="md:w-1/2 pl-20 py-20 items-center">
        <img
          src="https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"
          alt=""
          className=" max-w-full h-auto"
        />
      </div>
      {/* Items Container */}
      <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
        {/* Item 1 */}
        <div className="max-w-5xl text-black text-center">
          <h5 className="text-2xl">KeyFindings</h5>
          <p className="max-w-md text-black">
            significant worsening of airspace disease, now very extensive and
            patchy sparing only apices.
          </p>
        </div>
        {/* Items Container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-5">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    " @keyframes check {\n              to {\n                stroke-dashoffset: 0;\n              }\n            }"
                }}
              />
              <rect
                width={10}
                height={14}
                x={7}
                y={5}
                stroke="#0A0A30"
                strokeWidth="1.5"
                rx={1}
              />
              <path
                stroke="#265BFF"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M10 8.973h4m-4 3.64h2"
                style={{
                  animation:
                    "check 3s infinite cubic-bezier(.99,-.1,.01,1.02)"
                }}
                strokeDashoffset={100}
                strokeDasharray={100}
              />
            </svg>
            <div className="max-w-5xl text-black">
              <h5>More Information</h5>
            </div>
            <p className="max-w-md text-black">
              Significant deteroation of the airspace disease, which is now
              quite widespread and patchy and only spare the apices.
            </p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={55}
              height={55}
              fill="none"
              viewBox="0 0 24 24"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                .eye-1 {\n                  animation: eye 2.4s infinite;\n                }\n            \n                .eye-2 {\n                  animation: squeeze 2.4s infinite;\n                }\n            \n                @keyframes eye {\n                  90% {\n                    transform: none;\n                    animation-timing-function: ease-in;\n                  }\n            \n                  93% {\n                    transform: translateY(15px) scaleY(0)\n                  }\n            \n                  100% {\n                    animation-timing-function: ease-out;\n                  }\n                }\n            \n                @keyframes squeeze {\n                  90% {\n                    transform: none;\n                    animation-timing-function: ease-in;\n                  }\n            \n                  93% {\n                    transform: translateY(3px) scaleY(0.8)\n                  }\n            \n                  100% {\n                    animation-timing-function: ease-out;\n                  }\n                }\n              "
                }}
              />
              <path
                className="eye-1"
                stroke="#0A0A30"
                strokeWidth="1.5"
                d="M19.195 11.31c.325.41.325.97 0 1.38-1.114 1.4-3.916 4.45-7.195 4.45-3.28 0-6.08-3.05-7.195-4.45a1.097 1.097 0 010-1.38C5.92 9.91 8.721 6.86 12 6.86c3.28 0 6.08 3.05 7.195 4.45z"
              />
              <circle
                className="eye-2"
                cx={12}
                cy={12}
                r="1.972"
                stroke="#265BFF"
                strokeWidth="1.5"
              />
            </svg>
            <div className="max-w-5xl text-black p-4">
              <h5>Sneak Preview</h5>
            </div>
            <p className="max-w-md text-black p-4">
              Quick preview of all exams for easy access.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* wave effect   */}
<svg
  className="wave-top"
  viewBox="0 0 1439 147"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
  <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
    <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
      <g className="wave" fill="#FFFFFF">
        <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
      </g>
      <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
        <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
          <path
            d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
            opacity="0.100000001"
          />
          <path
            d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
            opacity="0.100000001"
          />
          <path
            d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
            opacity="0.200000003"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
{/*Footer*/}
<footer>
  <div className="container mx-auto px-8">
    <div className="w-full flex flex-col md:flex-row py-6">
      <div className="flex-1 mb-6 text-black">
        <a
          className="text-green-800 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          href="#"
        >
          Python Medical Center
        </a>
      </div>
    </div>
  </div>
</footer>
