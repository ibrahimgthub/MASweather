import { useState, useEffect } from 'react';
import AirQualityCard from './AirQualityCard';
import './App.css';

// 🌧️ Animated Rain Drops Component (Pure React Compliant)
const RainEffect = () => {
  const [drops] = useState(() =>
    Array.from({ length: 35 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 1,
      duration: 0.5 + Math.random() * 0.5,
    }))
  );

  return (
    <div className="rain-container">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="drop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// 🤖 Dynamic AI Weather Advice Generator
const getAiWeatherTips = (temp, isRaining, uvIndex, windSpeed, humidity) => {
  const tips = [];

  if (isRaining) {
    tips.push('☔ Heavy precipitation ahead. Carry an umbrella or waterproof raincoat, and wear slip-resistant footwear.');
  } else if (temp >= 30) {
    tips.push('👕 Hot & humid conditions! Wear lightweight, breathable cotton clothing and stay well-hydrated.');
  } else if (temp >= 20) {
    tips.push('🌤️ Pleasant outdoor weather! A light shirt or comfortable casual wear is ideal.');
  } else if (temp >= 10) {
    tips.push('🧥 Cool atmosphere. Layer up with a jacket or sweater when heading out.');
  } else {
    tips.push('🥶 Cold temperature! Wear thermal layers, a heavy coat, and gloves.');
  }

  const uvNum = parseFloat(uvIndex);
  if (uvNum >= 8) {
    tips.push('🕶️ Extreme UV radiation alert! Wear sunglasses, broad-spectrum SPF 50+ sunscreen, and a wide-brim hat.');
  } else if (uvNum >= 5) {
    tips.push('☀️ Moderate-to-high UV index. Sunscreen is recommended if spending over 20 minutes outdoors.');
  }

  const windNum = parseFloat(windSpeed);
  if (windNum > 30) {
    tips.push('💨 High wind gusts detected! Secure loose outdoor belongings and take caution while driving.');
  } else if (!isRaining && temp >= 18 && temp <= 28) {
    tips.push('🏃 Ideal conditions for outdoor activities, jogging, or a city walk!');
  }

  const humidityNum = parseFloat(humidity);
  if (humidityNum >= 85 && temp >= 28) {
    tips.push('💦 High humidity levels will make it feel warmer than actual temperature. Drink extra water.');
  }

  return tips;
};

// 🏛️ Structured Global Country History Database
const COUNTRY_INFO_DB = {
  TZ: {
    countryName: 'Tanzania',
    currency: 'Tanzanian Shilling (TZS)',
    languages: 'Swahili, English',
    tip: '💡 Tip: Capital is Dodoma, largest city is Dar es Salaam. Moshi and Arusha are top safari hubs!',
    historyDetails: {
      beforeIndependence: 'Home to Olduvai Gorge ("Cradle of Humankind") with hominid fossils dating back millions of years. Indigenous Bantu and Nilotic communities established early agricultural societies. Coastal Swahili city-states (Kilwa, Zanzibar) controlled Indian Ocean trade routes. Colonized by Germany in the 1880s as German East Africa and transitioned to British mandate rule after WWI.',
      afterIndependence: 'Tanganyika gained independence on Dec 9, 1961, followed by Zanzibar in Dec 1963. On April 26, 1964, Tanganyika and Zanzibar merged to form the United Republic of Tanzania, embarking on the Ujamaa (African Socialism) era.',
      presidentsAndStyle: 'Julius Nyerere ("Mwalimu") championed Pan-African unity and socialist self-reliance. Ali Hassan Mwinyi liberalized the economy. Benjamin Mkapa modernized infrastructure. Jakaya Kikwete expanded regional diplomacy. John Magufuli ("The Bulldozer") focused on anti-corruption and rapid industrial infrastructure. Samia Suluhu Hassan introduced diplomatic openness and infrastructure expansion.',
      famousPeople: 'Julius Nyerere (Founding Father), Shaaban bin Robert (Poet/Author), Diamond Platnumz (Music Icon), Mbwana Samatta (Footballer).',
      culture: 'Swahili language serves as a unifying cultural pillar. Rich traditions of Tingatinga art, Makonde wood carving, and Taarab & Bongo Flava music.',
      presentDay: 'A stable democratic nation in East Africa, serving as a primary tourism and mineral processing hub with major industrial infrastructure projects across Dar es Salaam, Dodoma, and Arusha.'
    }
  },
  KE: {
    countryName: 'Kenya',
    currency: 'Kenyan Shilling (KES)',
    languages: 'Swahili, English',
    tip: '💡 Tip: Capital is Nairobi. Famous for Maasai Mara wildlife safaris.',
    historyDetails: {
      beforeIndependence: 'Early human fossils discovered along the Great Rift Valley. Swahili trading settlements like Mombasa and Lamu thrived along the coast. Became a British protectorate in 1895 and a crown colony in 1920.',
      afterIndependence: 'Gained independence on Dec 12, 1963, following the Mau Mau movement against British colonial rule.',
      presidentsAndStyle: 'Jomo Kenyatta established national identity and economic foundation. Daniel arap Moi led through centralized governance. Mwai Kibaki drove economic revival and free primary education. Uhuru Kenyatta expanded mega-infrastructure. William Ruto focuses on economic reform.',
      famousPeople: 'Jomo Kenyatta, Wangari Maathai (Nobel Laureate), Eliud Kipchoge (Marathoner), Lupita Nyong\'o (Actress).',
      culture: 'Famous for Maasai and Samburu heritage, vibrant Gengetone & Benga music, and world-renowned distance running.',
      presentDay: 'East Africa’s commercial, technological, and financial hub centered in Nairobi ("Silicon Savannah").'
    }
  },
  UG: {
    countryName: 'Uganda',
    currency: 'Ugandan Shilling (UGX)',
    languages: 'Swahili, English, Luganda',
    tip: '💡 Tip: Capital is Kampala. Popular for gorilla trekking in Bwindi.',
    historyDetails: {
      beforeIndependence: 'Historically shaped by powerful pre-colonial kingdoms (Buganda, Bunyoro, Ankole, Toro). Became a British protectorate in 1894.',
      afterIndependence: 'Gained independence on Oct 9, 1962, initially led by Milton Obote and Kabaka Mutesa II.',
      presidentsAndStyle: 'Milton Obote, Idi Amin (military rule), and Yoweri Museveni, who restored economic stability and national security starting in 1986.',
      famousPeople: 'Kabaka Mutesa II, Yoweri Museveni, Joshua Cheptegei (Olympian), Uganda Martyrs.',
      culture: 'Diverse traditional music, royal ceremonies of the Buganda kingdom, and rich agricultural heritage.',
      presentDay: 'Known as the "Pearl of Africa," experiencing rapid urbanization and eco-tourism growth.'
    }
  },
  KR: {
    countryName: 'South Korea',
    currency: 'South Korean Won (KRW ₩)',
    languages: 'Korean',
    tip: '💡 Tip: Capital is Seoul. Famous for tech innovation and K-culture.',
    historyDetails: {
      beforeIndependence: 'Founded during the Gojoseon era (2333 BCE), progressing through the Three Kingdoms era and the Joseon Dynasty (1392–1910), which created Hangul. Annexed by Japan in 1910.',
      afterIndependence: 'Liberated in 1945 post-WWII, leading to division and the Korean War (1950–1953).',
      presidentsAndStyle: 'Park Chung-hee led rapid state-directed industrialization ("Miracle on the Han River"). Kim Dae-jung championed democracy ("Sunshine Policy"). Modern presidents balance high-tech industrial policy and social reforms.',
      famousPeople: 'King Sejong the Great, Admiral Yi Sun-sin, Son Heung-min, BTS, Bong Joon-ho.',
      culture: 'Rich traditions of Hanbok, Kimchi, and Celadon pottery alongside global K-Pop, Cinema, and Esports culture.',
      presentDay: 'A global high-tech leader in semiconductors, automobiles, electronics, and entertainment.'
    }
  },
  JP: {
    countryName: 'Japan',
    currency: 'Japanese Yen (JPY ¥)',
    languages: 'Japanese',
    tip: '💡 Tip: Capital is Tokyo. Famous for Mt. Fuji, bullet trains, and sushi.',
    historyDetails: {
      beforeIndependence: 'Ancient Jōmon and Yayoi periods led into feudal rule under Samurai warriors and Shoguns (Edo Period). Opened to the world during the 1868 Meiji Restoration.',
      afterIndependence: 'Rebuilt post-WWII under a pacifist constitution adopted in 1947.',
      presidentsAndStyle: 'Governed by Prime Ministers under a constitutional monarchy. Shigeru Yoshida oversaw post-war economic revival; Shinzo Abe introduced "Abenomics" economic reforms.',
      famousPeople: 'Emperor Meiji, Akira Kurosawa, Hayao Miyazaki, Shohei Ohtani.',
      culture: 'Shinto and Buddhist heritage, Tea ceremonies, Cherry blossom season, Anime, and Gastronomy.',
      presentDay: 'A global economic superpower known for robotics, automotive engineering, and cultural exports.'
    }
  },
  US: {
    countryName: 'United States',
    currency: 'US Dollar (USD $)',
    languages: 'English',
    tip: '💡 Tip: Capital is Washington, D.C. Top cities include New York and Los Angeles.',
    historyDetails: {
      beforeIndependence: 'Inhabited by diverse Indigenous nations for millennia. European settlement began in the 16th century, leading to 13 British colonies.',
      afterIndependence: 'Declared independence on July 4, 1776, following the Revolutionary War.',
      presidentsAndStyle: 'George Washington set democratic precedents; Abraham Lincoln preserved the Union; Franklin D. Roosevelt led through WWII; modern presidents balance federal policy and international diplomacy.',
      famousPeople: 'George Washington, Abraham Lincoln, Martin Luther King Jr., Thomas Edison, Neil Armstrong.',
      culture: 'Hollywood cinema, Jazz, Rock & Roll, Hip-Hop, and technological innovation.',
      presentDay: 'Global leader in technology, aerospace, financial markets, and entertainment.'
    }
  }
};

const getWeatherDetails = (code) => {
  switch (code) {
    case 0:
      return { label: 'Clear Sky', icon: '☀️', color: '#ff014f', isRaining: false };
    case 1:
    case 2:
    case 3:
      return { label: 'Partly Cloudy', icon: '⛅', color: '#1e2125', isRaining: false };
    case 45:
    case 48:
      return { label: 'Foggy', icon: '🌫️', color: '#60646c', isRaining: false };
    case 51:
    case 53:
    case 55:
      return { label: 'Drizzle', icon: '🌦️', color: '#ff014f', isRaining: true };
    case 61:
    case 63:
    case 65:
      return { label: 'Rain', icon: '🌧️', color: '#ff014f', isRaining: true };
    case 80:
    case 81:
    case 82:
      return { label: 'Heavy Showers', icon: '🌧️⚡', color: '#ff014f', isRaining: true };
    case 95:
    case 96:
    case 99:
      return { label: 'Thunderstorm', icon: '🌩️', color: '#ff014f', isRaining: true };
    default:
      return { label: 'Fair Weather', icon: '🌤️', color: '#1e2125', isRaining: false };
  }
};

const formatSunTime = (isoTimeStr) => {
  if (!isoTimeStr) return '--:--';
  const date = new Date(isoTimeStr);
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:${minutes} ${ampm}`;
};

export default function App() {
  // Vite serves files in /public from the site root.
  // This also respects the configured Vite base path when deployed.
  const apkDownloadUrl = `${import.meta.env.BASE_URL}masweather.apk`;
  const [activeTab, setActiveTab] = useState('weather');
  const [cityInput, setCityInput] = useState('');
  const [selectedCity, setSelectedCity] = useState('Dar es Salaam, Tanzania');
  const [weatherData, setWeatherData] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [aqiData, setAqiData] = useState(null);
  const [isLightOn, setIsLightOn] = useState(false);

  const [flightFrom, setFlightFrom] = useState('DAR');
  const [flightTo, setFlightTo] = useState('JNO');

  const loadCountryDetails = async (code, fallbackCountryName = '') => {
    const uppercaseCode = (code || '').toUpperCase();

    if (COUNTRY_INFO_DB[uppercaseCode]) {
      setCountryInfo(COUNTRY_INFO_DB[uppercaseCode]);
      return;
    }

    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${uppercaseCode}`);
      const data = await res.json();
      if (data && data[0]) {
        const country = data[0];
        const countryName = country.name?.common || fallbackCountryName || uppercaseCode;
        const capital = country.capital ? country.capital[0] : 'N/A';
        
        const currencies = country.currencies
          ? Object.values(country.currencies)
              .map((c) => `${c.name} (${c.symbol || ''})`)
              .join(', ')
          : 'National Currency';

        const languages = country.languages
          ? Object.values(country.languages).join(', ')
          : 'Official Language';

        setCountryInfo({
          countryName,
          currency: currencies,
          languages,
          tip: `💡 Tip: Capital is ${capital}. Enjoy exploring ${countryName}!`,
          historyDetails: {
            beforeIndependence: `${countryName} has an extensive ancient heritage shaped by early native settlements and historical trade routes.`,
            afterIndependence: `Gained sovereignty establishing a self-governed political framework centered around ${capital}.`,
            presidentsAndStyle: `Governed through presidential and parliamentary leadership structures driving national policy.`,
            famousPeople: `Renowned cultural figures, leaders, and contributors across sports, arts, and governance.`,
            culture: `Rich traditions encompassing native crafts, languages, regional gastronomy, and festivals.`,
            presentDay: `Continuing modern development, economic growth, and active international participation.`
          }
        });
        return;
      }
    } catch (err) {
      console.error('Country API lookup skipped:', err);
    }

    setCountryInfo({
      countryName: fallbackCountryName || uppercaseCode || 'Selected Country',
      currency: 'National Currency',
      languages: 'Official Language',
      tip: '💡 Stay weather prepared and check local travel tips!',
      historyDetails: {
        beforeIndependence: 'Historical origins rooted in native heritage and regional trade.',
        afterIndependence: 'Established modern self-governance and statehood.',
        presidentsAndStyle: 'Led by constitutional leadership driving national policies.',
        famousPeople: 'Prominent cultural icons and national contributors.',
        culture: 'Vibrant local customs, arts, and traditions.',
        presentDay: 'Progressing through economic growth and modern infrastructure.'
      }
    });
  };

  const fetchWeatherData = async (lat, lon, customName = null, countryCode = 'TZ') => {
    try {
      setErrorMsg('');
      
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,surface_pressure,uv_index,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`
      );
      const data = await res.json();

      if (data.current_weather) {
        const currentHourIndex = new Date().getHours();
        const next24Hours = (data.hourly?.time || []).slice(currentHourIndex, currentHourIndex + 24).map((timeStr, idx) => {
          const hourNum = new Date(timeStr).getHours();
          const formattedHour = hourNum === 0 ? '12 AM' : hourNum === 12 ? '12 PM' : hourNum > 12 ? `${hourNum - 12} PM` : `${hourNum} AM`;
          const code = data.hourly?.weathercode ? data.hourly.weathercode[currentHourIndex + idx] : 0;
          return {
            time: formattedHour,
            temp: data.hourly?.temperature_2m ? Math.round(data.hourly.temperature_2m[currentHourIndex + idx]) : '--',
            code,
            icon: getWeatherDetails(code).icon,
          };
        });

        const condition = getWeatherDetails(data.current_weather.weathercode);
        const sunriseFormatted = formatSunTime(data.daily?.sunrise ? data.daily.sunrise[0] : null);
        const sunsetFormatted = formatSunTime(data.daily?.sunset ? data.daily.sunset[0] : null);

        const temp = data.current_weather.temperature;
        const humidity = data.hourly?.relativehumidity_2m ? data.hourly.relativehumidity_2m[0] : '68';
        const uvIndex = data.hourly?.uv_index ? data.hourly.uv_index[12] : '6.2';
        const windSpeed = data.current_weather.windspeed;

        const aiTips = getAiWeatherTips(temp, condition.isRaining, uvIndex, windSpeed, humidity);

        setWeatherData({
          locationName: customName || 'Selected Location',
          lat: parseFloat(lat).toFixed(2),
          lon: parseFloat(lon).toFixed(2),
          temp,
          feelsLike: (temp + 2.1).toFixed(1),
          windSpeed,
          conditionLabel: condition.label,
          conditionIcon: condition.icon,
          conditionColor: condition.color,
          isRaining: condition.isRaining,
          sunrise: sunriseFormatted,
          sunset: sunsetFormatted,
          humidity,
          uvIndex,
          pressure: data.hourly?.surface_pressure ? data.hourly.surface_pressure[0] : '1013',
          dailyMax: data.daily?.temperature_2m_max || [31, 30, 32],
          dailyMin: data.daily?.temperature_2m_min || [24, 23, 24],
          hourly: next24Hours,
          aiTips,
        });

        const parsedCountryName = customName ? customName.split(', ').pop() : '';
        loadCountryDetails(countryCode, parsedCountryName);
      }

      const aqiRes = await fetch(
        `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide`
      );
      const aqiJson = await aqiRes.json();

      if (aqiJson.current) {
        setAqiData({
          usAqi: aqiJson.current.us_aqi,
          pm25: aqiJson.current.pm2_5,
          pm10: aqiJson.current.pm10,
          no2: aqiJson.current.nitrogen_dioxide,
          co: aqiJson.current.carbon_monoxide,
        });
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to load weather details.');
    } finally {
      setLoading(false);
    }
  };

  const handleGpsLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude, 'Current Location');
        },
        () => {
          setLoading(false);
          fetchWeatherData(-6.83, 39.27, 'Dar es Salaam, Tanzania', 'TZ');
        }
      );
    } else {
      fetchWeatherData(-6.83, 39.27, 'Dar es Salaam, Tanzania', 'TZ');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleGpsLocation();
    }, 0);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!cityInput.trim()) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          cityInput
        )}&count=1&language=en&format=json`
      );
      const geoData = await geoRes.json();

      if (geoData.results && geoData.results.length > 0) {
        const place = geoData.results[0];
        const locationName = `${place.name}${place.admin1 ? ', ' + place.admin1 : ''}, ${place.country}`;
        setSelectedCity(place.name);
        await fetchWeatherData(place.latitude, place.longitude, locationName, place.country_code);
        setCityInput('');
      } else {
        setLoading(false);
        setErrorMsg(`Could not find "${cityInput}". Please check spelling.`);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setErrorMsg('Search failed. Check network connection.');
    }
  };

  const openBoltRide = () => {
    let boltUrl = 'https://bolt.eu/';
    if (weatherData) {
      boltUrl = `https://m.bolt.eu/ride?destination_lat=${weatherData.lat}&destination_lng=${weatherData.lon}`;
    }
    window.open(boltUrl, '_blank');
  };

  const history = countryInfo?.historyDetails || {};

  return (
    <div className="min-h-screen bg-bodybg text-textdark p-4 sm:p-6 md:p-10 w-full max-w-[480px] md:max-w-6xl mx-auto box-border relative font-sans pb-28 md:pb-12">
      {/* 🌧️ Render Falling Rain Effect */}
      {weatherData && weatherData.isRaining && <RainEffect />}

      {/* Header Bar with Get App & Masweather Pro Buttons */}
      <header className="flex justify-between items-center pb-3.5 mb-6 border-b border-gray-300 nav-sticky sticky top-0 z-20 pt-2 bg-bodybg/90 backdrop-blur-md">
        <h1 className="m-0 text-xl md:text-2xl font-bold tracking-tight text-textdark">Masweather</h1>
        <div className="flex items-center gap-2">
          <a
            href={apkDownloadUrl}
            download="Masweather.apk"
            type="application/vnd.android.package-archive"
            aria-label="Download MASweather Android APK"
            title="Download MASweather Android app"
            className="neu-btn px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold text-textdark no-underline flex items-center gap-1.5 cursor-pointer"
          >
            <span>📲</span>
            <span>Get App</span>
          </a>
          <button
            onClick={handleGpsLocation}
            className="neu-btn px-4 py-2 rounded-xl text-xs md:text-sm font-semibold cursor-pointer text-primary"
          >
            Masweather Pro
          </button>
        </div>
      </header>

      <main className="flex flex-col gap-6">
        {/* TAB 1: WEATHER */}
        {activeTab === 'weather' && (
          <div className="flex flex-col gap-6">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl">
              <input
                type="text"
                placeholder="Search city (e.g. Moshi, Seoul, Tokyo)..."
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                className="neu-input px-4 py-3 rounded-xl text-xs md:text-sm w-full"
              />
              <button type="submit" className="neu-btn px-5 py-3 rounded-xl font-semibold text-xs md:text-sm whitespace-nowrap">
                {loading ? '...' : 'Search'}
              </button>
              <button type="button" onClick={handleGpsLocation} className="neu-btn px-4 py-3 rounded-xl font-semibold text-xs md:text-sm whitespace-nowrap text-primary">
                📍 GPS
              </button>
            </form>

            {errorMsg && <p className="text-primary text-xs text-center m-1">{errorMsg}</p>}

            {/* Current Weather Card & Desktop Grid */}
            {weatherData && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* LEFT & CENTER COLUMNS (Main Weather Focus) */}
                <div className="md:col-span-2 flex flex-col gap-6">
                  <div className="neu-card p-6 md:p-8 text-center">
                    <h2 className="m-0 mb-1 text-lg md:text-xl font-semibold text-textdark">📍 {weatherData.locationName}</h2>
                    <p className="m-0 text-xs text-textgray">
                      Lat: {weatherData.lat} | Lon: {weatherData.lon}
                    </p>

                    <div className="flex justify-center items-center gap-3 my-4">
                      <span className="text-5xl md:text-6xl">{weatherData.conditionIcon}</span>
                      <div className="text-6xl md:text-7xl font-extrabold text-primary tracking-tighter">
                        {weatherData.temp}°C
                      </div>
                    </div>

                    <p className="m-0 mb-2 font-semibold text-base text-primary">
                      {weatherData.conditionLabel}
                    </p>

                    <p className="m-0 text-xs md:text-sm text-textgray">
                      Feels like {weatherData.feelsLike}°C • Wind: {weatherData.windSpeed} km/h
                    </p>
                  </div>

                  {/* 24-Hour Interactive Weather Slider */}
                  {weatherData.hourly && weatherData.hourly.length > 0 && (
                    <div className="neu-card p-5">
                      <h3 className="m-0 mb-3 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🕒 24-Hour Forecast</h3>
                      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                        {weatherData.hourly.map((item, index) => (
                          <div key={index} className="neu-input flex-0-auto w-20 p-3 rounded-xl text-center flex flex-col items-center gap-1.5">
                            <span className="text-[11px] text-textgray">{item.time}</span>
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-xs font-semibold text-textdark">{item.temp}°C</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 3-Day Forecast */}
                  <div className="neu-card p-5">
                    <h3 className="m-0 mb-3 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">📅 3-Day Forecast</h3>
                    <div className="flex justify-between text-xs md:text-sm text-textdark py-3 border-b border-gray-200">
                      <span className="font-semibold">Today</span>
                      <span>High: {weatherData.dailyMax[0]}°C | Low: {weatherData.dailyMin[0]}°C</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-textdark py-3 border-b border-gray-200">
                      <span className="font-semibold">Tomorrow</span>
                      <span>High: {weatherData.dailyMax[1]}°C | Low: {weatherData.dailyMin[1]}°C</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm text-textdark py-3">
                      <span className="font-semibold">Day After</span>
                      <span>High: {weatherData.dailyMax[2]}°C | Low: {weatherData.dailyMin[2]}°C</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (Sidebar Metrics, AI & Info) */}
                <div className="flex flex-col gap-6">
                  
                  {/* 💡 Neumorphic Glowing Toggle Switch Widget */}
                  <div className="neu-card p-5 text-center flex flex-col items-center gap-3">
                    <h3 className="m-0 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">💡 Ambient Light Control</h3>
                    <div 
                      onClick={() => setIsLightOn(!isLightOn)}
                      style={{
                        position: 'relative',
                        width: '180px',
                        height: '90px',
                        background: '#e4e9f0',
                        borderRadius: '45px',
                        boxShadow: 'inset 6px 6px 12px #c5cbd3, inset -6px -6px 12px #ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div 
                        style={{
                          position: 'absolute',
                          right: isLightOn ? '96px' : '6px',
                          width: '78px',
                          height: '78px',
                          background: '#edf2f7',
                          borderRadius: '24px',
                          boxShadow: '6px 6px 16px #c5cbd3, -6px -6px 16px #ffffff, 0 0 0 1px rgba(255, 255, 255, 0.4)',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                      >
                        {/* Top warm orange glow effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-2px',
                          left: '10px',
                          right: '10px',
                          height: '4px',
                          background: 'linear-gradient(90deg, transparent, #ffb347, #ff8c00, #ffb347, transparent)',
                          borderRadius: '4px',
                          opacity: isLightOn ? 1 : 0.2,
                          boxShadow: isLightOn ? '0 -6px 15px rgba(255, 140, 0, 0.7), 0 -12px 30px rgba(255, 165, 0, 0.4)' : 'none',
                          transition: 'opacity 0.3s ease'
                        }} />

                        {/* Light bulb icon */}
                        <svg style={{
                          width: '28px',
                          height: '28px',
                          fill: isLightOn ? '#ff8c00' : '#4a5568',
                          zIndex: 1,
                          position: 'relative',
                          transition: 'fill 0.3s ease'
                        }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm5.657 3.343a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm-11.314 0a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zM4 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4zm15 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM12 7a5 5 0 0 0-5 5c0 2.137 1.34 3.951 3.22 4.66a1 1 0 0 1 .78 1.025V19a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.315a1 1 0 0 1 .78-1.025C15.66 15.951 17 14.137 17 12a5 5 0 0 0-5-5zm-2 14a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z"/>
                        </svg>
                      </div>

                      {/* Ambient background glow */}
                      <div style={{
                        position: 'absolute',
                        right: isLightOn ? '85px' : '12px',
                        width: '65px',
                        height: '65px',
                        background: 'radial-gradient(circle, rgba(255, 165, 0, 0.3) 0%, rgba(255, 200, 100, 0) 70%)',
                        borderRadius: '50%',
                        zIndex: 0,
                        pointerEvents: 'none',
                        opacity: isLightOn ? 1 : 0,
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                      }} />
                    </div>
                    <p className="m-0 text-[11px] text-textgray">
                      Status: <strong className={isLightOn ? 'text-[#ff8c00]' : 'text-textdark'}>{isLightOn ? 'ON (Ambient Glow Active)' : 'OFF'}</strong>
                    </p>
                  </div>

                  {/* 🤖 AI Weather Advisor Card */}
                  {weatherData.aiTips && weatherData.aiTips.length > 0 && (
                    <div className="neu-card p-5 text-left border-l-4 border-primary">
                      <h3 className="m-0 mb-3 text-xs md:text-sm font-bold text-primary flex items-center gap-1.5 uppercase tracking-wide">
                        🤖 AI Weather Advisor & Tips
                      </h3>
                      <ul className="m-0 pl-4 flex flex-col gap-2.5">
                        {weatherData.aiTips.map((tip, idx) => (
                          <li key={idx} className="text-xs md:text-sm leading-snug text-textdark">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 🌅 Sun Times Card */}
                  <div className="neu-card p-5 flex justify-around items-center">
                    <div className="text-center">
                      <span className="text-3xl">🌅</span>
                      <p className="m-0 mt-1 text-xs text-textgray">Sunrise</p>
                      <p className="m-0 text-sm md:text-base font-bold text-primary">{weatherData.sunrise}</p>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-300" />
                    <div className="text-center">
                      <span className="text-3xl">🌇</span>
                      <p className="m-0 mt-1 text-xs text-textgray">Sunset</p>
                      <p className="m-0 text-sm md:text-base font-bold text-textdark">{weatherData.sunset}</p>
                    </div>
                  </div>

                  {/* Air Quality Card Component */}
                  <AirQualityCard aqiData={aqiData} />

                  {/* Weather Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="neu-card p-4 flex flex-col gap-1">
                      <span className="text-xs text-textgray font-medium">💧 Humidity</span>
                      <span className="text-lg font-bold text-textdark">{weatherData.humidity}%</span>
                    </div>
                    <div className="neu-card p-4 flex flex-col gap-1">
                      <span className="text-xs text-textgray font-medium">☀️ UV Index</span>
                      <span className="text-lg font-bold text-textdark">{weatherData.uvIndex}</span>
                    </div>
                    <div className="neu-card p-4 flex flex-col gap-1">
                      <span className="text-xs text-textgray font-medium">💨 Wind</span>
                      <span className="text-lg font-bold text-textdark">{weatherData.windSpeed} km/h</span>
                    </div>
                    <div className="neu-card p-4 flex flex-col gap-1">
                      <span className="text-xs text-textgray font-medium">⏲️ Pressure</span>
                      <span className="text-lg font-bold text-textdark">{weatherData.pressure} hPa</span>
                    </div>
                  </div>

                  {/* Quick Bolt Ride Shortcut Card */}
                  <div className="neu-card-interactive neu-card p-5 flex justify-between items-center cursor-pointer" onClick={openBoltRide}>
                    <div>
                      <h4 className="m-0 text-xs md:text-sm font-bold text-textdark">🚗 Need a Ride in {selectedCity}?</h4>
                      <p className="m-0 mt-1 text-xs text-textgray">Request Bolt car or Boda-Boda ride</p>
                    </div>
                    <span className="neu-btn px-3.5 py-2 rounded-lg text-xs font-bold text-primary">Bolt ➔</span>
                  </div>

                  {/* Travel Info Card */}
                  {countryInfo && (
                    <div className="neu-card p-5 text-left">
                      <h3 className="m-0 mb-3 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🌍 Travel Info ({countryInfo.countryName})</h3>
                      <p className="m-1 text-xs md:text-sm text-textdark"><strong>Currency:</strong> {countryInfo.currency}</p>
                      <p className="m-1 text-xs md:text-sm text-textdark"><strong>Languages:</strong> {countryInfo.languages}</p>
                      <p className="m-0 mt-2 text-xs md:text-sm text-primary italic">{countryInfo.tip}</p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        )}

        {/* TAB 2: HOTELS */}
        {activeTab === 'hotels' && (
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
            <div className="neu-card p-5 text-center">
              <h2 className="m-0 mb-1 text-lg font-bold text-textdark">🏨 Hotels in {selectedCity}</h2>
              <p className="m-0 text-xs md:text-sm text-textgray">Compare top stays & lodges with instant availability.</p>
            </div>

            <div className="neu-card p-5 flex gap-4 items-center">
              <div className="text-3xl p-4 neu-input rounded-xl">🏨</div>
              <div className="flex flex-col gap-1.5 flex-1">
                <h3 className="m-0 text-sm md:text-base font-bold text-textdark">Grand Luxury Hotel & Suites</h3>
                <p className="m-0 text-xs text-primary">⭐ 4.8 / 5.0 (240 reviews)</p>
                <p className="m-0 text-xs md:text-sm font-bold text-textdark">From $85 / night</p>
                <a
                  href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(selectedCity)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="neu-btn mt-2 inline-block px-4 py-2 rounded-lg text-xs font-semibold text-center no-underline"
                >
                  View Stays on Booking.com ↗
                </a>
              </div>
            </div>

            <div className="neu-card p-5 flex gap-4 items-center">
              <div className="text-3xl p-4 neu-input rounded-xl">🌿</div>
              <div className="flex flex-col gap-1.5 flex-1">
                <h3 className="m-0 text-sm md:text-base font-bold text-textdark">Serene Eco-Lodge & Spa</h3>
                <p className="m-0 text-xs text-primary">⭐ 4.6 / 5.0 (180 reviews)</p>
                <p className="m-0 text-xs md:text-sm font-bold text-textdark">From $62 / night</p>
                <a
                  href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(selectedCity)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="neu-btn mt-2 inline-block px-4 py-2 rounded-lg text-xs font-semibold text-center no-underline"
                >
                  Check Availability ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FLIGHTS */}
        {activeTab === 'flights' && (
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
            <div className="neu-card p-5 text-center">
              <h2 className="m-0 mb-1 text-lg font-bold text-textdark">✈️ Search Flights</h2>
              <p className="m-0 text-xs md:text-sm text-textgray">Find the best route and flight rates globally.</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-3 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🛫 Flight Search Matrix</h3>
              <div className="flex flex-col gap-4 mt-3">
                <div>
                  <label className="text-xs font-medium text-textgray">From (Airport/City)</label>
                  <input
                    type="text"
                    value={flightFrom}
                    onChange={(e) => setFlightFrom(e.target.value)}
                    className="neu-input px-4 py-2.5 rounded-xl text-xs md:text-sm w-full mt-1"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-textgray">To (Destination)</label>
                  <input
                    type="text"
                    value={flightTo}
                    onChange={(e) => setFlightTo(e.target.value)}
                    className="neu-input px-4 py-2.5 rounded-xl text-xs md:text-sm w-full mt-1"
                  />
                </div>

                <a
                  href={`https://www.google.com/travel/flights?q=flights+from+${encodeURIComponent(flightFrom)}+to+${encodeURIComponent(flightTo)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="neu-btn mt-3 block px-5 py-3 rounded-xl text-xs md:text-sm font-bold text-center no-underline text-primary"
                >
                  Search Flights on Google Flights ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RIDES */}
        {activeTab === 'rides' && (
          <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
            <div className="neu-card p-5 text-center">
              <h2 className="m-0 mb-1 text-lg font-bold text-textdark">🚕 Order a Ride (Bolt)</h2>
              <p className="m-0 text-xs md:text-sm text-textgray">Request a Car, XL, or Boda-Boda ride to anywhere in {selectedCity}.</p>
            </div>

            <div className="neu-card p-5">
              <h3 className="m-0 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">⚡ Available Ride Types</h3>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between items-center py-2.5 border-b border-gray-200">
                  <div>
                    <strong className="text-xs md:text-sm text-textdark">🚗 Bolt Car / Boda</strong>
                    <p className="m-0 text-xs text-textgray">Fastest pick-up for city travel</p>
                  </div>
                  <button onClick={openBoltRide} className="neu-btn px-4 py-2 rounded-lg text-xs md:text-sm font-bold text-primary">Book Ride ↗</button>
                </div>

                <div className="flex justify-between items-center py-2.5">
                  <div>
                    <strong className="text-xs md:text-sm text-textdark">🛵 Boda-Boda (Motorcycle)</strong>
                    <p className="m-0 text-xs text-textgray">Quickest mode to beat traffic</p>
                  </div>
                  <button onClick={openBoltRide} className="neu-btn px-4 py-2 rounded-lg text-xs md:text-sm font-bold text-primary">Book Boda ↗</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: COUNTRY HISTORY */}
        {activeTab === 'history' && (
          <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
            <div className="neu-card p-5 text-center">
              <h2 className="m-0 mb-1 text-lg font-bold text-textdark">🏛️ Country History: {countryInfo ? countryInfo.countryName : 'Selected Location'}</h2>
              <p className="m-0 text-xs md:text-sm text-textgray">Full breakdown from origins to present day.</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">📜 1. Before Independence</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.beforeIndependence || 'Ancient history and colonial period.'}</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🌅 2. After Independence</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.afterIndependence || 'Sovereignty and political development.'}</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">👑 3. Leaders & Presidential Styles</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.presidentsAndStyle || 'Key heads of state and governing philosophies.'}</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">⭐ 4. Famous People & Icons</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.famousPeople || 'Prominent figures in arts, sports, and leadership.'}</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🎭 5. Culture & Traditions</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.culture || 'Local heritage, customs, music, and art.'}</p>
            </div>

            <div className="neu-card p-5 text-left">
              <h3 className="m-0 mb-2 text-xs md:text-sm font-bold text-primary uppercase tracking-wide">🚀 6. Present Day & Outlook</h3>
              <p className="m-0 text-xs md:text-sm leading-relaxed text-textdark">{history.presentDay || 'Current economic status and modern development.'}</p>
            </div>
          </div>
        )}
      </main>

      {/* 🌊 Floating Glass Liquid Navigation Bar */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[480px] neu-card p-2.5 flex justify-around items-center z-30 bg-opacity-90 backdrop-blur-md">
        <button
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 'weather' ? 'neu-btn text-primary' : 'text-textgray'}`}
          onClick={() => setActiveTab('weather')}
        >
          <span className="text-base">🌤️</span>
          <span>Weather</span>
        </button>
        <button
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 'hotels' ? 'neu-btn text-primary' : 'text-textgray'}`}
          onClick={() => setActiveTab('hotels')}
        >
          <span className="text-base">🏨</span>
          <span>Hotels</span>
        </button>
        <button
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 'flights' ? 'neu-btn text-primary' : 'text-textgray'}`}
          onClick={() => setActiveTab('flights')}
        >
          <span className="text-base">✈️</span>
          <span>Flights</span>
        </button>
        <button
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 'rides' ? 'neu-btn text-primary' : 'text-textgray'}`}
          onClick={() => setActiveTab('rides')}
        >
          <span className="text-base">🚗</span>
          <span>Rides</span>
        </button>
        <button
          className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 'history' ? 'neu-btn text-primary' : 'text-textgray'}`}
          onClick={() => setActiveTab('history')}
        >
          <span className="text-base">🏛️</span>
          <span>C.H.</span>
        </button>
      </nav>
    </div>
  );
}