import NavLink from "./NavLink";
import ProfileLink from "./ProfileLink";

export default function LeftAside() {
  return (
    <aside className="fixed top-16 flex h-full min-h-screen w-1/4 flex-col items-center px-2 pl-2 max-lg:hidden">
      <ProfileLink />
      <NavLink href="/friend" title="Friends">
        <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32S80 82.1 80 144s50.1 112 112 112m76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2M480 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96m48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4c24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48c0-61.9-50.1-112-112-112"></path>
        </svg>
      </NavLink>
      <NavLink href="/group" title="Groups">
        <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
          <g fillRule="evenodd" clipRule="evenodd">
            <path d="M7 11.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
            <path d="M7.05 14a1.5 1.5 0 0 0-1.5 1.5V17a1 1 0 0 1-2 0v-1.5a3.5 3.5 0 0 1 7 0V17a1 1 0 1 1-2 0v-1.5a1.5 1.5 0 0 0-1.5-1.5M19 11.25a1 1 0 1 1 0-2a1 1 0 0 1 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path>
            <path d="M18.95 14a1.5 1.5 0 0 1 1.5 1.5V17a1 1 0 1 0 2 0v-1.5a3.5 3.5 0 0 0-7 0V17a1 1 0 1 0 2 0v-1.5a1.5 1.5 0 0 1 1.5-1.5"></path>
            <path d="M13.05 16.75a2.5 2.5 0 0 0-2.5 2.5v1.5a1 1 0 0 1-2 0v-1.5a4.5 4.5 0 0 1 9 0v1.5a1 1 0 1 1-2 0v-1.5a2.5 2.5 0 0 0-2.5-2.5"></path>
            <path d="M13 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path>
            <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"></path>
          </g>
        </svg>
      </NavLink>
      <NavLink href="/video" title="Videos">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <path d="m164.44 105.34l-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 128H40V56h176zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8"></path>
        </svg>
      </NavLink>
      <NavLink href="/market" title="Marketplace">
        <svg viewBox="0 0 650 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M648 256q0 2 1 3t0 3v20q0 10-7 17t-17 7h-46v324q0 10-6 16t-17 7H93q-10 0-17-7t-7-16V306H23q-10 0-16-7t-7-17v-20q0-4 1-6L60 39q5-16 17-25t28-9h439q16 0 28 9t16 25zm-138 50H139v127q0 5 4 8t8 4h347q5 0 9-4t3-8z"></path>
        </svg>
      </NavLink>
      <NavLink href="/game" title="Games">
        <svg
          viewBox="0 0 640 512"
          className="mt-0.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96M248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40a40 40 0 0 1-40 40m64-96a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></path>
        </svg>
      </NavLink>
    </aside>
  );
}
