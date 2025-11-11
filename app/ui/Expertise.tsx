import ExpertiseCard from "./ExpertiseCard";

const data = [
    {
        title: 'IMPLANTATION',
        descriptions: '',
        content: [
            'Délimitation de l\'ouvrage',
            'Equerrage et nivellement sur chaîse'
        ],
        images : [
            '/realisations/implantation/1.jpg'
        ]
    },
    {
        title: 'FOUILLE EN RIGOLE',
        descriptions: '',
        content: [
            'Evacuation des terres'
        ],
        images : [
            '/realisations/fouille/1.jpg',
            '/realisations/fouille/2.jpg'
        ]
    },
    {
        title: 'FONDATION',
        descriptions: '',
        content: [
            'Béton de propreté et semelle isolé pour poteaux',
            'Maçonnerie de moellons',
            'Chaînage bas'
        ],
        images : [
            '/realisations/fondations/1.jpg',
            '/realisations/fondations/3.jpg',
            '/realisations/fondations/4.jpg',
            '/realisations/fondations/5.jpg',
            '/realisations/fondations/6.jpg',
        ]
    },
    {
        title: 'ÉLÉVATION MUR',
        descriptions: '',
        content: [
            'Mur 22 cm d\'épaisseur'
        ],
        images : [
            '/realisations/mur/1.jpg',
            '/realisations/mur/2.jpg'
        ]
    },
    {
        title: 'DALLE EN BA ',
        descriptions: '',
        content: [
            'Coffrage pour dalle et poutre',
            'Ferraillage dalle et poutre-chaînage',
            'Coulage du béton dosé à 350 kg / m3'
        ],
        images : [
            '/realisations/dalle/1.jpg',
            '/realisations/dalle/2.jpg'
        ]
    },

];

export default function Expertise() {
    return (
      <div className="flex-col p-4" id='experiences'>
          <div className="
            flex justify-center text-[15px] font-bold text-gray-500
            relative
            before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-1/4 before:h-[2px] before:bg-gray-500 before:-translate-y-1/2
            after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-1/4 after:h-[2px] after:bg-gray-500 after:-translate-y-1/2
            "
            >
             MES REALISATIONS
          </div>
          <div className="flex-col">
            {
                data.map((d, index) => (
                    <ExpertiseCard
                       key={index}
                       title={d.title}
                       images={d.images}
                       content={d.content}
                    />
                ))
            }
          </div>
      </div>
    );
}