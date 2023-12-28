import NavList from "./NavList";

export default function Navbar() {
  return (
    <nav className="col-start-4 col-end-10 px-2">
      <ul className="flex h-full w-full items-center justify-between max-md:hidden">
        <NavList href="/" title="Home">
          <svg
            viewBox="0 0 1024 1023"
            className="aspect-square w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1004.5 555.5Q985 575 957.5 575T911 555l-15-14v418h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5H33q-13 0-22.5-9.5T1 991t9.5-22.5T33 959h95V541l-15 14q-19 20-46.5 20t-47-19.5t-19.5-47T19 462L463 19q20-20 49-19q29-1 49 19l443 443q20 19 20 46.5t-19.5 47M448 671q0-13-9.5-22.5T416 639H288q-13 0-22.5 9.5T256 671v288h192zm320 0q0-13-9.5-22.5T736 639H608q-13 0-22.5 9.5T576 671v128q0 13 9.5 22.5T608 831h128q13 0 22.5-9.5T768 799z"></path>
          </svg>
        </NavList>
        <NavList href="/video" title="Videos">
          <svg
            viewBox="0 0 256 256"
            className="aspect-square w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></path>
          </svg>
        </NavList>
        <NavList href="/market" title="Marketplace">
          <svg
            viewBox="0 0 650 800"
            className="aspect-square w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M648 256q0 2 1 3t0 3v20q0 10-7 17t-17 7h-46v324q0 10-6 16t-17 7H93q-10 0-17-7t-7-16V306H23q-10 0-16-7t-7-17v-20q0-4 1-6L60 39q5-16 17-25t28-9h439q16 0 28 9t16 25zm-138 50H139v127q0 5 4 8t8 4h347q5 0 9-4t3-8z"></path>
          </svg>
        </NavList>
        <NavList href="/group" title="Groups">
          <svg
            viewBox="0 0 26 26"
            className="aspect-square w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fillRule="evenodd" clipRule="evenodd">
              <path d="M7 11.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
              <path d="M7.05 14a1.5 1.5 0 0 0-1.5 1.5V17a1 1 0 0 1-2 0v-1.5a3.5 3.5 0 0 1 7 0V17a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5M19 11.25a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path>
              <path d="M18.95 14a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 1 0 2 0v-1.5a3.5 3.5 0 0 0-7 0V17a1 1 0 1 0 2 0v-1.5a1.5 1.5 0 0 1 1.5-1.5"></path>
              <path d="M13.05 16.75a2.5 2.5 0 0 0-2.5 2.5v1.5a1 1 0 0 1-2 0v-1.5a4.5 4.5 0 0 1 9 0v1.5a1 1 0 1 1-2 0v-1.5a2.5 2.5 0 0 0-2.5-2.5"></path>
              <path d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
              <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></path>
            </g>
          </svg>
        </NavList>
        <NavList href="/game" title="Games">
          <svg
            viewBox="0 0 640 512"
            className="aspect-square w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96M248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40a40 40 0 0 1-40 40m64-96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></path>
          </svg>
        </NavList>
      </ul>
    </nav>
  );
}
