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

  // Outfit & Rain Gear Advice
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

  // Sun Protection / UV Advice
  const uvNum = parseFloat(uvIndex);
  if (uvNum >= 8) {
    tips.push('🕶️ Extreme UV radiation alert! Wear sunglasses, broad-spectrum SPF 50+ sunscreen, and a wide-brim hat.');
  } else if (uvNum >= 5) {
    tips.push('☀️ Moderate-to-high UV index. Sunscreen is recommended if spending over 20 minutes outdoors.');
  }

  // Wind & Activity Advice
  const windNum = parseFloat(windSpeed);
  if (windNum > 30) {
    tips.push('💨 High wind gusts detected! Secure loose outdoor belongings and take caution while driving.');
  } else if (!isRaining && temp >= 18 && temp <= 28) {
    tips.push('🏃 Ideal conditions for outdoor activities, jogging, or a city walk!');
  }

  // Humidity / Comfort Advice
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

// 🌤️ Weather Code Interpreter
const getWeatherDetails = (code) => {
  switch (code) {
    case 0:
      return { label: 'Clear Sky', icon: '☀️', color: '#FF8F00', isRaining: false };
    case 1:
    case 2:
    case 3:
      return { label: 'Partly Cloudy', icon: '⛅', color: '#47A5FF', isRaining: false };
    case 45:
    case 48:
      return { label: 'Foggy', icon: '🌫️', color: '#FFFFFF', isRaining: false };
    case 51:
    case 53:
    case 55:
      return { label: 'Drizzle', icon: '🌦️', color: '#47A5FF', isRaining: true };
    case 61:
    case 63:
    case 65:
      return { label: 'Rain', icon: '🌧️', color: '#47A5FF', isRaining: true };
    case 80:
    case 81:
    case 82:
      return { label: 'Heavy Showers', icon: '🌧️⚡', color: '#FF8F00', isRaining: true };
    case 95:
    case 96:
    case 99:
      return { label: 'Thunderstorm', icon: '🌩️', color: '#FF8F00', isRaining: true };
    default:
      return { label: 'Fair Weather', icon: '🌤️', color: '#47A5FF', isRaining: false };
  }
};

// Format ISO time string to 12-hour AM/PM
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
  const [activeTab, setActiveTab] = useState('weather');
  const [theme, setTheme] = useState('dark');
  const [cityInput, setCityInput] = useState('');
  const [selectedCity, setSelectedCity] = useState('Dar es Salaam, Tanzania');
  const [weatherData, setWeatherData] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [aqiData, setAqiData] = useState(null);

  // Flight search form state
  const [flightFrom, setFlightFrom] = useState('DAR');
  const [flightTo, setFlightTo] = useState('JNO');

  // Hybrid Country Info Provider
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

        // Generate AI Weather Advisory
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

  const isDark = theme === 'dark';
  const themeStyles = {
    container: {
      minHeight: '100vh',
      backgroundColor: isDark ? '#000000' : '#f4f5f7',
      color: isDark ? '#FFFFFF' : '#000000',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, sans-serif",
      padding: '16px 16px 105px 16px',
      maxWidth: '480px',
      margin: '0 auto',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '14px',
      marginBottom: '16px',
      borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'}`,
    },
    title: {
      margin: 0,
      fontSize: '22px',
      fontWeight: '700',
      letterSpacing: '-0.02em',
      color: isDark ? '#FFFFFF' : '#000000',
    },
    themeToggle: {
      background: isDark ? '#4C5055' : 'rgba(0, 0, 0, 0.05)',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}`,
      color: isDark ? '#FFFFFF' : '#000000',
      padding: '6px 12px',
      borderRadius: '10px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
    },
    input: {
      flex: 1,
      background: isDark ? '#4C5055' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.15)' : '#cbd5e1'}`,
      borderRadius: '10px',
      padding: '10px 12px',
      color: isDark ? '#FFFFFF' : '#000000',
      fontSize: '13px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
    },
    card: {
      background: isDark ? '#4C5055' : '#ffffff',
      backdropFilter: 'blur(12px)',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'}`,
      borderRadius: '16px',
      padding: '20px',
      boxShadow: isDark ? '0 8px 32px 0 rgba(0, 0, 0, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.06)',
      textAlign: 'center',
    },
    locationText: {
      margin: '0 0 4px 0',
      fontSize: '18px',
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#000000',
    },
    coordsText: {
      margin: 0,
      fontSize: '12px',
      color: isDark ? 'rgba(255, 255, 255, 0.6)' : '#64748b',
    },
    feelsLike: {
      margin: 0,
      fontSize: '13px',
      color: isDark ? 'rgba(255, 255, 255, 0.8)' : '#475569',
    },
    metricCard: {
      background: isDark ? '#4C5055' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.06)'}`,
      borderRadius: '12px',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      boxShadow: isDark ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.04)',
    },
    metricLabel: {
      fontSize: '12px',
      color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748b',
    },
    metricValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: isDark ? '#FFFFFF' : '#000000',
    },
    infoCard: {
      background: isDark ? '#4C5055' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(71, 165, 255, 0.3)' : '#bae6fd'}`,
      borderRadius: '16px',
      padding: '16px',
      textAlign: 'left',
    },
    aiCard: {
      background: 'linear-gradient(135deg, rgba(71, 165, 255, 0.15) 0%, rgba(255, 143, 0, 0.15) 100%)',
      border: '1px solid rgba(71, 165, 255, 0.4)',
      borderRadius: '16px',
      padding: '16px',
      textAlign: 'left',
    },
    infoText: {
      margin: '4px 0',
      fontSize: '13px',
      color: isDark ? '#FFFFFF' : '#334155',
    },
    forecastRow: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      color: isDark ? '#FFFFFF' : '#334155',
      padding: '6px 0',
      borderBottom: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
    },
    hotelCard: {
      background: isDark ? '#4C5055' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)'}`,
      borderRadius: '16px',
      padding: '16px',
      display: 'flex',
      gap: '14px',
      alignItems: 'center',
      boxShadow: isDark ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.04)',
    },
    hotelName: {
      margin: 0,
      fontSize: '15px',
      color: isDark ? '#FFFFFF' : '#000000',
    },
    hourlyContainer: {
      display: 'flex',
      gap: '12px',
      overflowX: 'auto',
      paddingBottom: '8px',
      scrollbarWidth: 'none',
    },
    hourlyCard: {
      flex: '0 0 auto',
      width: '65px',
      padding: '10px 8px',
      borderRadius: '12px',
      background: isDark ? 'rgba(0, 0, 0, 0.3)' : '#ffffff',
      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : '#e2e8f0'}`,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
    },
  };

  const history = countryInfo?.historyDetails || {};

  return (
    <div style={themeStyles.container}>
      {/* 🌧️ Render Falling Rain Effect when condition is Rain */}
      {weatherData && weatherData.isRaining && <RainEffect />}

      {/* Header */}
      <header style={themeStyles.header}>
        <h1 style={themeStyles.title}>Masweather</h1>
        <button
          style={themeStyles.themeToggle}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <main style={styles.mainContent}>
        {/* TAB 1: WEATHER */}
        {activeTab === 'weather' && (
          <div style={styles.tabView}>
            <form onSubmit={handleSearch} style={styles.searchBox}>
              <input
                type="text"
                placeholder="Search city (e.g. Moshi, Seoul, Tokyo, London)..."
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                style={themeStyles.input}
              />
              <button type="submit" style={styles.btnPrimary}>
                {loading ? '...' : 'Search'}
              </button>
              <button type="button" onClick={handleGpsLocation} style={styles.btnGps}>
                📍 GPS
              </button>
            </form>

            {errorMsg && <p style={styles.errorText}>{errorMsg}</p>}

            {/* Current Weather Card */}
            {weatherData && (
              <>
                <div style={themeStyles.card}>
                  <h2 style={themeStyles.locationText}>📍 {weatherData.locationName}</h2>
                  <p style={themeStyles.coordsText}>
                    Lat: {weatherData.lat} | Lon: {weatherData.lon}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', margin: '10px 0 2px 0' }}>
                    <span style={{ fontSize: '42px' }}>{weatherData.conditionIcon}</span>
                    <div style={{ ...styles.tempDisplay, color: weatherData.conditionColor }}>
                      {weatherData.temp}°C
                    </div>
                  </div>

                  <p style={{ margin: '0 0 8px 0', fontWeight: '600', fontSize: '15px', color: weatherData.conditionColor }}>
                    {weatherData.conditionLabel}
                  </p>

                  <p style={themeStyles.feelsLike}>
                    Feels like {weatherData.feelsLike}°C • Wind: {weatherData.windSpeed} km/h
                  </p>
                </div>

                {/* 🤖 AI Weather Advisory Card */}
                {weatherData.aiTips && weatherData.aiTips.length > 0 && (
                  <div style={themeStyles.aiCard}>
                    <h3 style={{ ...styles.infoTitle, color: '#FF8F00', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      🤖 AI Weather Advisor & Tips
                    </h3>
                    <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {weatherData.aiTips.map((tip, idx) => (
                        <li key={idx} style={{ fontSize: '13px', lineHeight: '1.4', color: '#FFFFFF' }}>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 🌅 Sun Times Card (Sunrise & Sunset) */}
                <div style={{ ...themeStyles.infoCard, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px' }}>🌅</span>
                    <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>Sunrise</p>
                    <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#FF8F00' }}>{weatherData.sunrise}</p>
                  </div>
                  <div style={{ height: '30px', width: '1px', background: 'rgba(255, 255, 255, 0.15)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '24px' }}>🌇</span>
                    <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: 'rgba(255, 255, 255, 0.7)' }}>Sunset</p>
                    <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#47A5FF' }}>{weatherData.sunset}</p>
                  </div>
                </div>

                {/* 24-Hour Interactive Weather Slider */}
                {weatherData.hourly && weatherData.hourly.length > 0 && (
                  <div style={themeStyles.infoCard}>
                    <h3 style={styles.infoTitle}>🕒 24-Hour Forecast</h3>
                    <div style={themeStyles.hourlyContainer}>
                      {weatherData.hourly.map((item, index) => (
                        <div key={index} style={themeStyles.hourlyCard}>
                          <span style={{ fontSize: '11px', color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#64748b' }}>{item.time}</span>
                          <span style={{ fontSize: '20px' }}>{item.icon}</span>
                          <span style={{ fontSize: '13px', fontWeight: '600', color: '#FFFFFF' }}>{item.temp}°C</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Air Quality Card Component */}
                <AirQualityCard aqiData={aqiData} />

                {/* Weather Metrics Grid */}
                <div style={styles.grid2x2}>
                  <div style={themeStyles.metricCard}>
                    <span style={themeStyles.metricLabel}>💧 Humidity</span>
                    <span style={themeStyles.metricValue}>{weatherData.humidity}%</span>
                  </div>
                  <div style={themeStyles.metricCard}>
                    <span style={themeStyles.metricLabel}>☀️ UV Index</span>
                    <span style={themeStyles.metricValue}>{weatherData.uvIndex}</span>
                  </div>
                  <div style={themeStyles.metricCard}>
                    <span style={themeStyles.metricLabel}>💨 Wind</span>
                    <span style={themeStyles.metricValue}>{weatherData.windSpeed} km/h</span>
                  </div>
                  <div style={themeStyles.metricCard}>
                    <span style={themeStyles.metricLabel}>⏲️ Pressure</span>
                    <span style={themeStyles.metricValue}>{weatherData.pressure} hPa</span>
                  </div>
                </div>

                {/* Quick Bolt Ride Shortcut Card */}
                <div style={styles.boltQuickCard} onClick={openBoltRide}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', color: '#FFFFFF' }}>🚗 Need a Ride in {selectedCity}?</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255, 255, 255, 0.85)' }}>
                      Request Bolt car or Boda-Boda ride
                    </p>
                  </div>
                  <span style={styles.boltQuickBtn}>Bolt ➔</span>
                </div>

                {/* 3-Day Forecast */}
                <div style={themeStyles.infoCard}>
                  <h3 style={styles.infoTitle}>📅 3-Day Forecast</h3>
                  <div style={themeStyles.forecastRow}>
                    <span>Today</span>
                    <span>High: {weatherData.dailyMax[0]}°C | Low: {weatherData.dailyMin[0]}°C</span>
                  </div>
                  <div style={themeStyles.forecastRow}>
                    <span>Tomorrow</span>
                    <span>High: {weatherData.dailyMax[1]}°C | Low: {weatherData.dailyMin[1]}°C</span>
                  </div>
                  <div style={themeStyles.forecastRow}>
                    <span>Day After</span>
                    <span>High: {weatherData.dailyMax[2]}°C | Low: {weatherData.dailyMin[2]}°C</span>
                  </div>
                </div>
              </>
            )}

            {/* Travel Info Card */}
            {countryInfo && (
              <div style={themeStyles.infoCard}>
                <h3 style={styles.infoTitle}>🌍 Travel Info ({countryInfo.countryName})</h3>
                <p style={themeStyles.infoText}><strong>Currency:</strong> {countryInfo.currency}</p>
                <p style={themeStyles.infoText}><strong>Languages:</strong> {countryInfo.languages}</p>
                <p style={styles.tipText}>{countryInfo.tip}</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: HOTELS */}
        {activeTab === 'hotels' && (
          <div style={styles.tabView}>
            <div style={themeStyles.card}>
              <h2 style={themeStyles.locationText}>🏨 Hotels in {selectedCity}</h2>
              <p style={themeStyles.feelsLike}>Compare top stays & lodges with instant availability.</p>
            </div>

            <div style={themeStyles.hotelCard}>
              <div style={styles.hotelImagePlaceholder}>🏨</div>
              <div style={styles.hotelDetails}>
                <h3 style={themeStyles.hotelName}>Grand Luxury Hotel & Suites</h3>
                <p style={styles.hotelRating}>⭐ 4.8 / 5.0 (240 reviews)</p>
                <p style={styles.hotelPrice}>From $85 / night</p>
                <a
                  href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(selectedCity)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.bookBtn}
                >
                  View Stays on Booking.com ↗
                </a>
              </div>
            </div>

            <div style={themeStyles.hotelCard}>
              <div style={styles.hotelImagePlaceholder}>🌿</div>
              <div style={styles.hotelDetails}>
                <h3 style={themeStyles.hotelName}>Serene Eco-Lodge & Spa</h3>
                <p style={styles.hotelRating}>⭐ 4.6 / 5.0 (180 reviews)</p>
                <p style={styles.hotelPrice}>From $62 / night</p>
                <a
                  href={`https://www.booking.com/searchresults.html?ss=${encodeURIComponent(selectedCity)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.bookBtn}
                >
                  Check Availability ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: FLIGHTS */}
        {activeTab === 'flights' && (
          <div style={styles.tabView}>
            <div style={themeStyles.card}>
              <h2 style={themeStyles.locationText}>✈️ Search Flights</h2>
              <p style={themeStyles.feelsLike}>Find the best route and flight rates globally.</p>
            </div>

            <div style={themeStyles.infoCard}>
              <h3 style={styles.infoTitle}>🛫 Flight Search Matrix</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                <div>
                  <label style={themeStyles.metricLabel}>From (Airport/City)</label>
                  <input
                    type="text"
                    value={flightFrom}
                    onChange={(e) => setFlightFrom(e.target.value)}
                    style={themeStyles.input}
                  />
                </div>
                <div>
                  <label style={themeStyles.metricLabel}>To (Destination)</label>
                  <input
                    type="text"
                    value={flightTo}
                    onChange={(e) => setFlightTo(e.target.value)}
                    style={themeStyles.input}
                  />
                </div>

                <a
                  href={`https://www.google.com/travel/flights?q=flights+from+${encodeURIComponent(flightFrom)}+to+${encodeURIComponent(flightTo)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.flightSearchBtn}
                >
                  Search Flights on Google Flights ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RIDES / BOLT */}
        {activeTab === 'rides' && (
          <div style={styles.tabView}>
            <div style={themeStyles.card}>
              <h2 style={themeStyles.locationText}>🚕 Order a Ride (Bolt)</h2>
              <p style={themeStyles.feelsLike}>
                Request a Car, XL, or Boda-Boda ride to anywhere in {selectedCity}.
              </p>
            </div>

            <div style={{ ...themeStyles.infoCard, background: '#4C5055', borderColor: '#47A5FF' }}>
              <h3 style={{ ...styles.infoTitle, color: '#47A5FF' }}>⚡ Available Ride Types</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <div style={styles.rideOptionRow}>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#FFFFFF' }}>🚗 Bolt Car / Boda</strong>
                    <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Fastest pick-up for city travel</p>
                  </div>
                  <button onClick={openBoltRide} style={styles.boltActionBtn}>Book Ride ↗</button>
                </div>

                <div style={styles.rideOptionRow}>
                  <div>
                    <strong style={{ fontSize: '14px', color: '#FFFFFF' }}>🛵 Boda-Boda (Motorcycle)</strong>
                    <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)' }}>Quickest mode to beat traffic</p>
                  </div>
                  <button onClick={openBoltRide} style={styles.boltActionBtn}>Book Boda ↗</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: COUNTRY HISTORY (C.H.) */}
        {activeTab === 'history' && (
          <div style={styles.tabView}>
            <div style={themeStyles.card}>
              <h2 style={themeStyles.locationText}>🏛️ Country History: {countryInfo ? countryInfo.countryName : 'Selected Location'}</h2>
              <p style={themeStyles.feelsLike}>Full breakdown from origins to present day.</p>
            </div>

            {/* Sub-Section 1: Before Independence */}
            <div style={themeStyles.infoCard}>
              <h3 style={{ ...styles.infoTitle, color: '#FF8F00' }}>📜 1. Before Independence</h3>
              <p style={styles.historyText}>{history.beforeIndependence || 'Ancient history and colonial period.'}</p>
            </div>

            {/* Sub-Section 2: After Independence */}
            <div style={themeStyles.infoCard}>
              <h3 style={styles.infoTitle}>🌅 2. After Independence</h3>
              <p style={styles.historyText}>{history.afterIndependence || 'Sovereignty and political development.'}</p>
            </div>

            {/* Sub-Section 3: Leaders & Presidential Style */}
            <div style={themeStyles.infoCard}>
              <h3 style={{ ...styles.infoTitle, color: '#FF8F00' }}>👑 3. Leaders & Presidential Styles</h3>
              <p style={styles.historyText}>{history.presidentsAndStyle || 'Key heads of state and governing philosophies.'}</p>
            </div>

            {/* Sub-Section 4: Famous People */}
            <div style={themeStyles.infoCard}>
              <h3 style={styles.infoTitle}>⭐ 4. Famous People & Icons</h3>
              <p style={styles.historyText}>{history.famousPeople || 'Prominent figures in arts, sports, and leadership.'}</p>
            </div>

            {/* Sub-Section 5: Culture */}
            <div style={themeStyles.infoCard}>
              <h3 style={{ ...styles.infoTitle, color: '#FF8F00' }}>🎭 5. Culture & Traditions</h3>
              <p style={styles.historyText}>{history.culture || 'Local heritage, customs, music, and art.'}</p>
            </div>

            {/* Sub-Section 6: Present Day */}
            <div style={themeStyles.infoCard}>
              <h3 style={styles.infoTitle}>🚀 6. Present Day & Outlook</h3>
              <p style={styles.historyText}>{history.presentDay || 'Current economic status and modern development.'}</p>
            </div>
          </div>
        )}
      </main>

      {/* 🌊 Floating Glass Liquid Navigation Bar */}
      <nav className="glass-nav">
        <button
          className={`glass-nav-btn ${activeTab === 'weather' ? 'active' : ''}`}
          onClick={() => setActiveTab('weather')}
        >
          <span style={{ fontSize: '18px' }}>🌤️</span>
          <span>Weather</span>
        </button>
        <button
          className={`glass-nav-btn ${activeTab === 'hotels' ? 'active' : ''}`}
          onClick={() => setActiveTab('hotels')}
        >
          <span style={{ fontSize: '18px' }}>🏨</span>
          <span>Hotels</span>
        </button>
        <button
          className={`glass-nav-btn ${activeTab === 'flights' ? 'active' : ''}`}
          onClick={() => setActiveTab('flights')}
        >
          <span style={{ fontSize: '18px' }}>✈️</span>
          <span>Flights</span>
        </button>
        <button
          className={`glass-nav-btn ${activeTab === 'rides' ? 'active' : ''}`}
          onClick={() => setActiveTab('rides')}
        >
          <span style={{ fontSize: '18px' }}>🚗</span>
          <span>Rides</span>
        </button>
        <button
          className={`glass-nav-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <span style={{ fontSize: '18px' }}>🏛️</span>
          <span>C.H.</span>
        </button>
      </nav>
    </div>
  );
}

// Fixed Static Styles
const styles = {
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  tabView: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  searchBox: {
    display: 'flex',
    gap: '8px',
  },
  btnPrimary: {
    background: '#47A5FF',
    border: 'none',
    color: '#FFFFFF',
    padding: '10px 14px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
  },
  btnGps: {
    background: 'rgba(255, 143, 0, 0.15)',
    border: '1px solid #FF8F00',
    color: '#FF8F00',
    padding: '10px 12px',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '13px',
    cursor: 'pointer',
  },
  errorText: {
    color: '#FF8F00',
    fontSize: '13px',
    textAlign: 'center',
    margin: '4px 0',
  },
  tempDisplay: {
    fontSize: '52px',
    fontWeight: '800',
    color: '#47A5FF',
    letterSpacing: '-0.03em',
  },
  grid2x2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  infoTitle: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    fontWeight: '700',
    color: '#47A5FF',
  },
  historyText: {
    margin: 0,
    fontSize: '13px',
    lineHeight: '1.5',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  tipText: {
    margin: '10px 0 0 0',
    fontSize: '13px',
    color: '#FF8F00',
    fontStyle: 'italic',
  },
  hotelImagePlaceholder: {
    fontSize: '32px',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    padding: '16px',
  },
  hotelDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  },
  hotelRating: {
    margin: 0,
    fontSize: '12px',
    color: '#FF8F00',
  },
  hotelPrice: {
    margin: 0,
    fontSize: '13px',
    fontWeight: '600',
    color: '#47A5FF',
  },
  bookBtn: {
    marginTop: '6px',
    display: 'inline-block',
    background: '#47A5FF',
    color: '#FFFFFF',
    padding: '6px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
  },
  flightSearchBtn: {
    marginTop: '10px',
    display: 'block',
    background: '#FF8F00',
    color: '#FFFFFF',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
  },
  boltQuickCard: {
    background: 'linear-gradient(135deg, #47A5FF 0%, #0066cc 100%)',
    borderRadius: '14px',
    padding: '14px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(71, 165, 255, 0.3)',
  },
  boltQuickBtn: {
    background: '#FF8F00',
    color: '#FFFFFF',
    padding: '6px 12px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '12px',
  },
  rideOptionRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  boltActionBtn: {
    background: '#FF8F00',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
  },
};