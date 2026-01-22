
import React, { useState } from 'react';
import { Language, Level, Mode, InventoryItem, Mission } from './types';
import { translations } from './translations';

const Navbar: React.FC<{ lang: Language, setLang: (l: Language) => void, t: any }> = ({ lang, setLang, t }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c1222]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-amber-500/10">
    <div className="flex flex-col">
      <span className="font-gaming font-bold text-xl md:text-2xl leading-none text-gold tracking-tight uppercase">J.C VIP TRANSPORT</span>
      <span className="text-[10px] uppercase tracking-[0.1em] text-emerald-400 font-bold">{t.navSubtitle}</span>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
        <button 
          onClick={() => setLang('es')}
          className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase transition-all ${lang === 'es' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          ESP
        </button>
        <button 
          onClick={() => setLang('en')}
          className={`px-4 py-1.5 rounded-md text-[10px] font-black uppercase transition-all ${lang === 'en' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
        >
          ENG
        </button>
      </div>
    </div>
  </nav>
);

const Hero: React.FC<{ t: any }> = ({ t }) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://cdn.pixabay.com/photo/2016/11/04/21/34/bogota-1799014_1280.jpg" 
        className="w-full h-full object-cover opacity-20 scale-105"
        alt="Historic Bogota Backdrop"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1222]/95 via-[#0c1222]/40 to-[#0c1222]"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl px-4">
      <div className="mb-12 flex flex-col items-center">
        <div className="w-1 h-24 bg-gradient-to-b from-transparent to-gold rounded-full mb-6"></div>
        <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.5em] mb-4">{t.heroPresenter}</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-gaming font-black text-white leading-[1.1] mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase tracking-tighter text-center">
        {t.heroTitle}
      </h1>
      
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="h-px w-16 bg-gold/30"></div>
        <div className="w-3 h-3 border border-gold rotate-45"></div>
        <div className="h-px w-16 bg-gold/30"></div>
      </div>
      
      <p className="text-xl md:text-3xl text-slate-200 font-light leading-relaxed max-w-3xl mx-auto italic drop-shadow-md">
        {t.heroSubtitle}
      </p>
    </div>
  </section>
);

const MissionCard: React.FC<{ mission: Mission }> = ({ mission }) => {
  const CardContent = (
    <>
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-amber-500/10 shadow-2xl bg-[#f5f1e8]">
        <img 
          src={mission.illustrationUrl} 
          alt={mission.title} 
          className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale-[0.05] contrast-[1.05] transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 border-[12px] border-[#f5f1e8]/80"></div>
        <div className="absolute inset-0 border-2 border-amber-900/10 m-[12px]"></div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-12 h-12 bg-slate-900/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl border border-gold/20">
             <i className={`fas ${mission.icon} text-amber-500`}></i>
          </div>
        </div>
        {mission.url && (
          <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 bg-slate-900/80 text-gold text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-gold/30 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-all">Ver Más</span>
          </div>
        )}
      </div>
      <div className="px-2">
        <h4 className="font-gaming font-bold text-white mb-2 uppercase text-xs tracking-widest leading-relaxed text-[10px]">{mission.title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed font-light">{mission.description}</p>
      </div>
    </>
  );

  if (mission.url) {
    return (
      <a href={mission.url} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 group cursor-pointer no-underline">
        {CardContent}
      </a>
    );
  }

  return (
    <div className="flex flex-col gap-6 group">
      {CardContent}
    </div>
  );
};

const ActSection: React.FC<{ data: Level, t: any }> = ({ data, t }) => (
  <div className="mb-40 relative">
    <div className="flex items-end gap-6 mb-16 border-b border-slate-800 pb-10">
      <div className="text-8xl md:text-9xl font-gaming font-black text-amber-500 opacity-10 select-none leading-none -mb-4">
        0{data.level}
      </div>
      <div className="flex flex-col">
        <h2 className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px] mb-2">{t.levelPrefix} 0{data.level}</h2>
        <h3 className="text-3xl md:text-5xl font-gaming font-bold text-white uppercase tracking-tighter">{data.title}</h3>
      </div>
    </div>
    
    <div className="mb-12">
      <p className="text-slate-400 text-xl max-w-4xl leading-relaxed font-light italic border-l-2 border-emerald-500/30 pl-8">{data.subtitle}</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-16">
      {data.missions.map((mission) => (
        <MissionCard key={mission.id} mission={mission} />
      ))}
    </div>

    {data.specialAchievement && (
      <div className="mt-20 p-12 rounded-3xl bg-slate-900/40 border border-emerald-500/20 flex flex-col md:flex-row items-center gap-10 shadow-[0_0_50px_rgba(16,185,129,0.05)]">
        <div className="w-20 h-20 bg-emerald-700/20 border border-emerald-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
          <i className="fas fa-leaf text-emerald-400 text-3xl"></i>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <span className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.4em] block">{t.achievementPrefix}</span>
          <p className="text-slate-100 text-2xl font-light leading-snug">{data.specialAchievement}</p>
        </div>
      </div>
    )}
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  const catalogFileId = "1HcQFVye3089Ghgi_CTrOBsIlIwQlXpGV";
  const catalogUrl = `https://drive.google.com/file/d/${catalogFileId}/preview`;
  const catalogDownloadUrl = `https://drive.google.com/file/d/${catalogFileId}/view?usp=sharing`;
  
  const saltCathedralUrl = "https://zipaquiraturistica.com/?gad_source=1&gad_campaignid=12651296300&gbraid=0AAAAADvNhvJbkpKS2md-6mJWCKd2PnGBT&gclid=CjwKCAiAj8LLBhAkEiwAJjbY76ZJl-NQMa4FdsoWFyR6SncLwSNOu8HDcF8hVb0RikDRwZQAP11BvhoCMqUQAvD_BwE";
  const wondersVideoUrl = "https://www.youtube.com/watch?v=MYmxs4iVUzw";
  const wondersThumbnailUrl = "https://img.youtube.com/vi/MYmxs4iVUzw/maxresdefault.jpg";
  const gastronomyImageUrl = "https://i.postimg.cc/zfxjvxYV/unnamed.jpg"; 
  const snacksImageUrl = "https://i.postimg.cc/JDLfsxHH/unnamed-(1).jpg";
  const emeraldsImageUrl = "https://i.postimg.cc/wBJdXRFW/unnamed-(2).jpg";
  const museumsImageUrl = "https://cdn.pixabay.com/photo/2012/08/14/17/49/bogota-54432_1280.jpg";

  const levels: Level[] = lang === 'es' ? [
    {
      level: 1,
      title: "Acto I: El Corazón Vibrante de Colombia",
      subtitle: "Un recorrido por el corazón colonial de calles empedradas, arte urbano y el epicentro político de la nación.",
      missions: [
        { id: '1-1', icon: 'fa-landmark', title: 'La Candelaria', description: 'El corazón colonial de calles empedradas y arte urbano.', illustrationUrl: 'https://images.pexels.com/photos/13359828/pexels-photo-13359828.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-2', icon: 'fa-mountain', title: 'Cerro de Monserrate', description: 'La mejor vista panorámica de la ciudad desde su santuario.', illustrationUrl: 'https://images.pexels.com/photos/19676274/pexels-photo-19676274.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-3', icon: 'fa-university', title: 'Plaza de Bolívar', description: 'El epicentro político rodeado de joyas arquitectónicas.', illustrationUrl: 'https://images.pexels.com/photos/17942610/pexels-photo-17942610.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-4', icon: 'fa-gem', title: 'Museo del Oro', description: 'La colección de orfebrería prehispánica más grande del mundo.', illustrationUrl: 'https://images.pexels.com/photos/20610624/pexels-photo-20610624.jpeg?auto=compress&cs=tinysrgb&w=1280' }
      ],
      specialAchievement: "Contraste Urbano: Un viaje desde la arquitectura colonial hasta el moderno centro financiero."
    },
    {
      level: 2,
      title: "Acto II: Viaje a la Leyenda y la Profundidad",
      subtitle: "Inmersión en Zipaquirá y la Laguna de Guatavita, cuna de la leyenda de El Dorado.",
      missions: [
        { id: '2-1', icon: 'fa-church', title: 'Catedral de Sal', description: 'Primera Maravilla de Colombia. Descienda 180m al corazón de una montaña de sal.', illustrationUrl: 'https://zipaquiraturistica.com/src/img/landing/1.webp', url: saltCathedralUrl },
        { id: '2-2', icon: 'fa-water', title: 'Laguna de Guatavita', description: 'Camine por los senderos sagrados donde los indígenas Muiscas realizaban sus rituales de oro.', illustrationUrl: 'https://images.pexels.com/photos/17382135/pexels-photo-17382135.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '2-3', icon: 'fa-eye', title: 'Casa Loca', description: 'Para un toque de diversión, visitaremos la \'Upside-Down House\', ¡perfecto para fotos inolvidables!', illustrationUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/7d/67/c0.jpg' }
      ],
      specialAchievement: "Cultura Minera: Historia de fe y devoción tallada en roca salina."
    },
    {
      level: 3,
      title: "Acto III: Un Viaje Monumental e Inesperado",
      subtitle: "Descubra el inmenso complejo cultural y recreativo del Parque Jaime Duque, el legado de un soñador.",
      missions: [
        { id: '3-1', icon: 'fa-play', title: 'Maravillas del Mundo', description: 'Camine entre réplicas de monumentos históricos como el Taj Mahal.', illustrationUrl: wondersThumbnailUrl, url: wondersVideoUrl },
        { id: '3-2', icon: 'fa-paw', title: 'Bioparque Wakatá', description: 'Conecte con la naturaleza y especies rescatadas en este refugio certificado.', illustrationUrl: 'https://parquejaimeduque.com/wp-content/uploads/2025/03/IMG_6887.jpg', url: 'https://parquejaimeduque.com/bioparque-wakata-2/' },
        { id: '3-3', icon: 'fa-building-columns', title: 'Museos y Exposiciones', description: 'Recorra la historia de la humanidad en sus inmensas salas de exhibición.', illustrationUrl: museumsImageUrl }
      ]
    }
  ] : [
    {
      level: 1,
      title: "Act I: The Vibrant Heart of Colombia",
      subtitle: "A journey through the colonial heart of cobblestone streets, urban art, and the nation's political epicenter.",
      missions: [
        { id: '1-1', icon: 'fa-landmark', title: 'La Candelaria', description: 'The colonial heart of cobblestone streets and urban art.', illustrationUrl: 'https://images.pexels.com/photos/13359828/pexels-photo-13359828.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-2', icon: 'fa-mountain', title: 'Monserrate Hill', description: 'The best panoramic view of the city from its sanctuary.', illustrationUrl: 'https://images.pexels.com/photos/19676274/pexels-photo-19676274.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-3', icon: 'fa-university', title: 'Bolivar Square', description: 'Political epicenter surrounded by architectural jewels.', illustrationUrl: 'https://images.pexels.com/photos/17942610/pexels-photo-17942610.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '1-4', icon: 'fa-gem', title: 'Gold Museum', description: 'The largest collection of pre-Columbian goldwork in the world.', illustrationUrl: 'https://images.pexels.com/photos/20610624/pexels-photo-20610624.jpeg?auto=compress&cs=tinysrgb&w=1280' }
      ],
      specialAchievement: "Urban Contrast: A journey from colonial architecture to the modern financial center."
    },
    {
      level: 2,
      title: "Act II: A Journey into Legend and Depth",
      subtitle: "Immersion in Zipaquirá and Guatavita Lagoon, birthplace of the El Dorado legend.",
      missions: [
        { id: '2-1', icon: 'fa-church', title: 'Salt Cathedral', description: 'The First Wonder of Colombia. Descend 180m into the heart of a salt mountain.', illustrationUrl: 'https://zipaquiraturistica.com/src/img/landing/1.webp', url: saltCathedralUrl },
        { id: '2-2', icon: 'fa-water', title: 'Guatavita Lagoon', description: 'Walk sacred paths where the Muisca performed their rituals.', illustrationUrl: 'https://images.pexels.com/photos/17382135/pexels-photo-17382135.jpeg?auto=compress&cs=tinysrgb&w=1280' },
        { id: '2-3', icon: 'fa-eye', title: 'Upside-Down House', description: 'A touch of fun and unforgettable photos at Casa Loca.', illustrationUrl: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/10/7d/67/c0.jpg' }
      ],
      specialAchievement: "Mining Culture: History of faith and devotion carved in salt rock."
    },
    {
      level: 3,
      title: "Act III: A Monumental and Unexpected Journey",
      subtitle: "Discover the vast cultural complex of Jaime Duque Park, a legacy of a dreamer.",
      missions: [
        { id: '3-1', icon: 'fa-play', title: 'Wonders of the World', description: 'Walk among replicas of historic monuments like the Taj Mahal.', illustrationUrl: wondersThumbnailUrl, url: wondersVideoUrl },
        { id: '3-2', icon: 'fa-paw', title: 'Wakatá Biopark', description: 'Connect with nature and rescued species in this certified sanctuary.', illustrationUrl: 'https://parquejaimeduque.com/wp-content/uploads/2025/03/IMG_6887.jpg', url: 'https://parquejaimeduque.com/bioparque-wakata-2/' },
        { id: '3-3', icon: 'fa-building-columns', title: 'Museums & Exhibits', description: 'Journey through the history of humankind in its immense exhibition halls.', illustrationUrl: museumsImageUrl }
      ]
    }
  ];

  const modes: Mode[] = lang === 'es' ? [
    { id: 'm1', name: 'Tours Panorámicos', icon: 'fa-binoculars', description: 'Recorridos ágiles para una vista completa de los puntos principales con total comodidad.' },
    { id: 'm2', name: 'Tours Privados', icon: 'fa-crown', description: 'Transporte exclusivo y guías bilingües con itinerarios 100% personalizados.' },
    { id: 'm3', name: 'Tours de Conexión', icon: 'fa-clock', description: 'La opción perfecta para escalas en El Dorado. No se pierda la ciudad.' },
    { id: 'm4', name: 'Tours Temáticos', icon: 'fa-palette', description: 'Rutas especializadas en gastronomía, arte urbano, vida nocturna y más.' }
  ] : [
    { id: 'm1', name: 'Panoramic Tours', icon: 'fa-binoculars', description: 'Agile routes for a complete view of the main sights with total comfort.' },
    { id: 'm2', name: 'Private Tours', icon: 'fa-crown', description: 'Exclusive transport and bilingual guides with 100% personalized itineraries.' },
    { id: 'm3', name: 'Layover Tours', icon: 'fa-clock', description: 'The perfect option for layovers at El Dorado. Don\'t miss the city.' },
    { id: 'm4', name: 'Thematic Tours', icon: 'fa-palette', description: 'Specialized routes in gastronomy, street art, nightlife, and more.' }
  ];

  return (
    <div className="min-h-screen bg-[#0c1222] selection:bg-gold/30">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />

      <main className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        <section className="text-center mb-48">
          <div className="inline-block p-1 bg-gold/10 rounded-full mb-8">
            <div className="px-6 py-2 rounded-full border border-gold/20 text-gold text-[10px] font-black uppercase tracking-[0.4em]">
              {lang === 'es' ? 'Nuestra Promesa' : 'Our Promise'}
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-gaming font-black text-white mb-12 uppercase tracking-tighter drop-shadow-2xl text-center w-full">
            {t.footerTagline}
          </h2>
          <div className="glass-card p-16 rounded-[4rem] border border-amber-500/10 shadow-inner max-w-5xl mx-auto">
            <p className="text-slate-200 text-2xl md:text-3xl leading-relaxed font-light italic opacity-90">
              {lang === 'es' 
                ? "Bienvenido a J.C. VIP Transport. No solo lo llevamos a los lugares más fascinantes de Colombia; diseñamos cada viaje para que se convierta en un recuerdo inolvidable. Nuestra misión es ser la llave que le abre las puertas a la historia, la cultura y la belleza de nuestra tierra."
                : "Welcome to J.C. VIP Transport. We don't just take you to Colombia's most fascinating places; we design each journey to become an unforgettable memory. Our mission is to be the key that unlocks the history, culture, and beauty of our land."
              }
            </p>
          </div>
        </section>

        <section id="acts" className="py-24 space-y-32">
          {levels.map((level, i) => (
            <ActSection key={i} data={level} t={t} />
          ))}
        </section>

        <section className="py-32 border-t border-slate-900">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-gaming font-bold mb-8 uppercase text-gold tracking-tight">{t.customizeTitle}</h2>
            <p className="text-slate-500 text-xs font-black tracking-[0.6em] uppercase opacity-60">{t.customizeSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {modes.map((mode) => (
              <div key={mode.id} className="glass-card p-14 rounded-[3rem] flex flex-col items-center text-center border border-slate-800 transition-all hover:border-gold/30 group">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center text-gold mb-10 shadow-2xl border border-gold/10 group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500">
                  <i className={`fas ${mode.icon} text-3xl`}></i>
                </div>
                <h3 className="font-gaming font-bold text-xs mb-6 uppercase text-white tracking-[0.3em] font-semibold leading-relaxed">{mode.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{mode.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 border-t border-slate-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-4 bg-amber-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/5 transform transition-transform duration-700 hover:scale-[1.02]">
                <img src={gastronomyImageUrl} alt="Colombian Authentic Flavors Spread" className="w-full h-auto object-cover aspect-[16/9]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-10">
              <div className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                Experiencia Gastronómica 2026
              </div>
              <h2 className="text-4xl md:text-5xl font-gaming font-black uppercase text-white leading-tight tracking-tighter">
                {lang === 'es' ? 'El Sabor Auténtico de Nuestra Tierra' : 'The Authentic Flavor of Our Land'}
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed italic opacity-90 border-l-2 border-gold/30 pl-6">
                {lang === 'es'
                  ? "Ningún viaje está completo sin probar la gastronomía local. Hacemos una parada en los mejores restaurantes para que deguste la auténtica comida típica de Cundinamarca. Una experiencia deliciosa para todos los gustos."
                  : "No journey is complete without tasting the local cuisine. We make a stop at the region's best restaurants for you to taste authentic traditional food. A delicious experience for all palates."
                }
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 border-t border-slate-900" id="contact">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-gaming font-black mb-6 uppercase text-gold tracking-tight">Portafolio VIP 2026</h2>
            <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto italic">
              {lang === 'es' 
                ? "Lea nuestro catálogo detallado directamente aquí. Incluye flota, rutas y protocolos de seguridad actualizados."
                : "Read our detailed catalog directly here. Includes updated fleet, requests, and safety protocols."
              }
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="glass-card p-4 rounded-[4rem] border border-gold/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden">
               <div className="w-full h-[800px] relative rounded-[3rem] overflow-hidden bg-slate-900/50">
                  <iframe 
                    src={catalogUrl} 
                    className="w-full h-full border-none"
                    title="J.C. VIP Transport Portfolio 2026"
                    allow="autoplay"
                  >
                    <div className="flex items-center justify-center h-full text-white p-10 text-center">
                      <p>Su navegador no soporta la visualización de PDF. <a href={catalogDownloadUrl} target="_blank" className="text-gold underline">Haga clic aquí para ver el catálogo directamente.</a></p>
                    </div>
                  </iframe>
               </div>
               <div className="p-10 text-center">
                  <a href={catalogDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-5 bg-gold/10 border border-gold/20 text-gold rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-gold hover:text-slate-950 transition-all">
                    <i className="fas fa-file-pdf text-lg"></i>
                    Ver Portafolio Completo
                  </a>
               </div>
            </div>

            <div className="py-16">
               <div className="text-center mb-16">
                  <h3 className="text-3xl font-gaming font-bold text-white uppercase tracking-widest">{t.inventoryTitle}</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center group hover:border-gold transition-all overflow-hidden">
                     <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 border border-white/5">
                        <img 
                          src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=640" 
                          alt="Zapatillas Cómodas" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                     </div>
                     <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Ropa y Calzado Cómodo</h4>
                     <p className="text-slate-400 text-sm font-light leading-relaxed">Esté preparado para caminar y explorar con calzado tipo tenis de alta calidad.</p>
                  </div>

                  <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center group hover:border-gold transition-all overflow-hidden">
                     <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 border border-white/5">
                        <img 
                          src="https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=640" 
                          alt="Chaqueta Ligera" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                     </div>
                     <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Chaqueta Ligera</h4>
                     <p className="text-slate-400 text-sm font-light leading-relaxed">El clima de Bogotá es fresco y puede cambiar rápidamente durante el día.</p>
                  </div>

                  <div className="glass-card p-6 rounded-3xl text-center flex flex-col items-center group hover:border-gold transition-all overflow-hidden">
                     <div className="w-full h-48 rounded-2xl overflow-hidden mb-8 border border-white/5">
                        <img 
                          src={snacksImageUrl} 
                          alt="Agua y Chocolate para Viajar" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                     </div>
                     <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Hidratación y Snacks</h4>
                     <p className="text-slate-400 text-sm font-light leading-relaxed">Manténgase con energía e hidratado con agua y el exquisito chocolate colombiano, ideales para su viaje.</p>
                  </div>
               </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-16 rounded-[4rem] border border-emerald-500/10 text-center flex flex-col items-center group transition-all hover:bg-slate-900/40 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 text-emerald-500/5 text-9xl pointer-events-none">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3 className="text-2xl font-gaming font-bold mb-12 text-emerald-400 uppercase tracking-[0.2em] relative z-10">WhatsApp Concierge</h3>
                <div className="relative p-10 bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] mb-12 group-hover:scale-105 transition-transform duration-700">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=https://wa.me/573138142369" alt="QR WhatsApp" className="w-64 h-64" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl">
                    <i className="fab fa-whatsapp text-emerald-500 text-6xl"></i>
                  </div>
                </div>
                <p className="text-slate-100 text-2xl font-bold tracking-[0.2em] mb-4">+57 313 814 2369</p>
                <p className="text-emerald-500/60 text-[10px] font-black uppercase tracking-[0.6em]">Disponibilidad 24/7</p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 pb-20 pt-32 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-32">
            <div className="space-y-16">
              <h2 className="text-5xl md:text-7xl font-gaming font-black text-gold uppercase leading-[1.1] tracking-tighter text-left">
                {t.finalLootTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="group space-y-6">
                  <div className="overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                    <img src={emeraldsImageUrl} alt="Muzo Gem" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-gaming font-bold text-white uppercase text-xs tracking-widest">Esmeraldas de Muzo</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light italic opacity-80">Le llevamos a lugares certificados para adquirir las esmeraldas más famosas del mundo.</p>
                </div>
                <div className="group space-y-6">
                  <div className="overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl">
                    <img src="https://cdn.pixabay.com/photo/2014/12/11/02/56/coffee-beans-563797_640.jpg" alt="Coffee Origin" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h4 className="font-gaming font-bold text-white uppercase text-xs tracking-widest">Café de Colombia</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light italic opacity-80">Adquiera el auténtico café de origen, reconocido globalmente por su suave y rico sabor.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-20 rounded-[5rem] border border-gold/10 text-center shadow-[0_0_100px_rgba(217,119,6,0.05)] relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>
              <h3 className="text-4xl font-gaming font-black mb-10 uppercase text-white tracking-tighter leading-tight drop-shadow-lg text-center">Su Aventura Colombiana le Espera.</h3>
              <p className="text-slate-400 mb-14 text-xl font-light italic opacity-80 max-w-lg mx-auto leading-relaxed text-center">
                {lang === 'es' 
                  ? "Permítanos ser su medio de transporte. Contáctenos para diseñar su tour privado y descubrir los tesoros de Bogotá con el servicio VIP que se merece."
                  : "Allow us to be your means of transport. Contact us to design your private tour and discover the treasures of Bogotá with the VIP service you deserve."
                }
              </p>
              
              <div className="space-y-10">
                 <div className="flex flex-col items-center gap-6">
                    <a href="tel:+573138142369" className="flex items-center gap-4 text-slate-300 hover:text-gold transition-all font-medium text-lg border-b border-white/5 pb-2">
                        <i className="fas fa-phone-alt text-gold text-xl"></i>
                        +57 313 814 2369
                    </a>
                 </div>
                 <a href="https://wa.me/573138142369" target="_blank" className="block w-full py-8 bg-gradient-to-r from-[#d9b341] to-[#b8860b] text-slate-950 rounded-3xl font-black text-2xl uppercase tracking-[0.4em] hover:shadow-[0_20px_40px_rgba(184,134,11,0.3)] transition-all transform hover:-translate-y-1">
                    Reservar VIP 2026
                 </a>
              </div>
            </div>
          </div>
          
          <div className="text-center border-t border-slate-900 pt-16">
            <div className="inline-block px-12 py-4 border border-slate-800 rounded-full text-[10px] text-slate-600 uppercase font-black tracking-[0.8em] mb-12">
              J.C. VIP Transport
            </div>
            <p className="text-slate-700 text-[11px] font-medium uppercase tracking-[0.5em]">
              &copy; {new Date().getFullYear()} J.C. VIP Transport. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
