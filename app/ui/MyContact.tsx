export default function MyContact() {
    return (
      <div className="flex-col p-5" id='experiences'>
          <div className="
            flex justify-center text-[15px] font-bold text-gray-500 
            relative
            before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1/4 before:h-[2px] before:bg-gray-500 before:-translate-y-1/2
            after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-1/4 after:h-[2px] after:bg-gray-500 after:-translate-y-1/2
            "
            >
             CONTACT
          </div>
          <div className="flex-col gap-4 bg-gray-500 p-4 text-white">
            <div className="flex text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
                <div className="text-[16px]">Kelilalina Ifanadiana 312</div>
            </div>
            <div className="flex text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div className="text-[16px]">+261 34 06 547 42</div>
            </div>
            <div className="flex text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg>

                <div className="text-[16px]">ramasioninampytahirilalaina@gmail.com</div>
            </div>
          </div>
      </div>
    );
}