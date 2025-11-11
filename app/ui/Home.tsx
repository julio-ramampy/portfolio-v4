export default function Home() {
  return (
      <div className="flex-col p-4 gap-4">
        <div className="flex justify-center">
            <div className="w-60 h-60 bg-contain bg-center bg-no-repeat bg-[url(/profil/avatar.png)] rounded-full border-2 border-gray-600">
            </div>
        </div>
        <div className="flex-col justify-center font-sans ">
            <div className='flex text-[15px] justify-center mt-2'>
                TECHNICIEN EN BATIMENT
            </div>
            <div className='flex text-[40px] justify-center'>
                Tahirilalaina
            </div>
            <h2 className='flex text-[30px] justify-center'>
                RAMASIONINAMPY
            </h2>
            <div className='flex text-[15px] justify-center'>
                Technicien en genie civil avec 10 ans d&apos;expérience, capable de realiser tout type de travail en batiment à Madagascar et dans l&apos;Ocean Indien.
            </div>
        </div>
      </div>
  );
}
