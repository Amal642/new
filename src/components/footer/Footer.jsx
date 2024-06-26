import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <footer
      className="body-font"
      style={{ background: mode === "dark" ? "rgb(30, 41, 59)" : "#30336b" }}
    >
      {/* Left Content  */}
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        {/* Blog Logo  */}
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* logo  */}
          <img className="w-10" src="https://firebasestorage.googleapis.com/v0/b/blogapp-cf273.appspot.com/o/Screenshot%202024-06-01%20173242.png?alt=media&token=3d65a615-7cb3-408f-842b-5b38077c4205" alt="logo" />
          {/* logo text  */}
          <span className="ml-3 text-xl text-white">Desert Jobs</span>
        </div>

        {/* items  */}
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Desert Jobs
        </p>

        {/* Right item  */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Icon 1  */}
          <a className="ml-3 text-gray-500" href="https://www.tiktok.com/@desert.jobs?_t=8n1KU3aDkp8&_r=1" target="__blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>

          {/* Icon 2  */}
          <a className="ml-3 text-gray-500" href="https://t.me/desertjobs" target="__blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
                
              <path d="M19.7773,4.42984 C20.8652,3.97177 22.0315,4.8917 21.8394,6.05639 L19.5705,19.8131 C19.3517,21.1395 17.8949,21.9006 16.678,21.2396 C15.6597,20.6865 14.1489,19.8352 12.7873,18.9455 C12.1074,18.5012 10.0255,17.0766 10.2814,16.0625 C10.5002,15.1954 14.0001,11.9375 16.0001,10 C16.7857,9.23893 16.4279,8.79926 15.5001,9.5 C13.1985,11.2383 9.50332,13.8812 8.28136,14.625 C7.20323,15.2812 6.64031,15.3932 5.96886,15.2812 C4.74273,15.0769 3.60596,14.7605 2.67788,14.3758 C1.42351,13.8558 1.48461,12.132 2.67703,11.63 L19.7773,4.42984 Z" />
            </svg>
          </a>

          {/* Icon 3  */}
          <a className="ml-3 text-gray-500" href="https://www.instagram.com/desert.jobs?igsh=MTQ1ejZrOGZpZjNkZg%3D%3D&utm_source=qr" target="__blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>

          {/* Icon 4  */}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
