import { GoogleGenerativeAI } from '@google/generative-ai';

// Token API Gemini yang Anda berikan
const API_KEY = 'AIzaSyDlVWN1IJUplF7zBiHlhjhwIwRWshD0TBc';

const genAI = new GoogleGenerativeAI(API_KEY);

export async function getGeminiWeatherTips(weather: string, timeOfDay: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `Berikan tips perawatan tanaman dalam bahasa Indonesia untuk kondisi cuaca ${weather} pada waktu ${timeOfDay}. 
    Berikan tips yang praktis dan mudah dipahami dalam 2-3 kalimat. 
    Fokus pada aktivitas perawatan tanaman yang spesifik untuk kondisi cuaca dan waktu tersebut.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || getFallbackTips(weather, timeOfDay);
  } catch (error) {
    console.error('Error fetching tips from Gemini:', error);
    return getFallbackTips(weather, timeOfDay);
  }
}

function getFallbackTips(weather: string, timeOfDay: string): string {
  const tipsByWeather: Record<string, Record<string, string>> = {
    sunny: {
      pagi: "Pagi yang cerah seperti ini sangat baik untuk menyiram tanaman. Suhu masih sejuk sehingga akar dapat menyerap air dengan baik. Periksa juga kondisi tanah, jika terlihat terlalu kering tambahkan mulsa untuk membantu mempertahankan kelembaban sepanjang hari.",
      siang: "Di siang yang terik seperti ini, sebaiknya hindari menyiram tanaman karena air akan cepat menguap. Sebagai gantinya, periksa kelembaban tanah dan semprotkan daun secara ringan untuk menyegarkan—tapi jangan berlebihan.",
      malam: "Malam setelah hari yang cerah bisa membuat tanaman kelelahan karena paparan sinar matahari. Periksa daun, bersihkan area sekitar dari gulma atau serangga yang mungkin muncul, dan siapkan tanaman untuk pagi esok dengan perawatan ringan."
    },
    rainy: {
      pagi: "Hujan pagi membuat tanah sudah cukup basah, jadi tidak perlu menyiram tanaman lagi. Yang penting adalah memastikan pot tidak tergenang dan akar tidak membusuk. Jika hujan tidak terlalu deras, bisa berikan pupuk cair ringan.",
      siang: "Siang yang hujan biasanya membuat tanaman rentan terhadap overwatering. Periksa tanda-tanda seperti daun menguning, dan pastikan drainase pot berfungsi baik agar air tidak menggenang. Jika mendung, coba pindahkan tanaman ke tempat yang masih bisa mendapat cahaya.",
      malam: "Malam yang lembab setelah hujan bisa menyebabkan akar membusuk atau daun berlendir. Keringkan bagian bawah pot dan bersihkan daun dari cipratan tanah. Jangan biarkan tanaman terlalu lembab semalaman."
    },
    cloudy: {
      pagi: "Pagi yang mendung cocok untuk menyiram tanaman secara normal, tapi pastikan tidak berlebihan. Letakkan tanaman dekat jendela untuk mendapatkan cahaya alami dan berikan pupuk daun ringan untuk menjaga kesehatan.",
      siang: "Saat mendung di siang hari, ruangan bisa jadi redup. Gunakan pencahayaan tambahan jika perlu dan pastikan sirkulasi udara cukup. Seka daun yang terlalu lembab dengan lembut untuk mencegah jamur.",
      malam: "Malam mendung cenderung lembab. Bersihkan daun dengan hati-hati dan pastikan pot tidak terlalu basah. Jika kelembaban berlebihan sering terjadi, pertimbangkan mengganti media tanam yang lebih porous."
    },
    windy: {
      pagi: "Pagi yang berangin bisa merusak tanaman muda. Pastikan mereka tidak terkena angin langsung dan gunakan penyangga jika perlu. Angin bisa mengeringkan tanah dengan cepat, jadi tambahkan mulsa untuk membantu mempertahankan kelembaban.",
      siang: "Angin siang dapat mengeringkan bagian atas tanah tanpa mengeringkan bagian dalam. Jadi hindari overwatering. Periksa apakah ada daun yang robek atau rusak karena angin.",
      malam: "Jika malam terasa berangin, lindungi tanaman kecil dari tiupan angin dingin. Pastikan pot tidak mudah roboh, dan hindari mengganti media tanam saat angin kencang."
    },
    clear: {
      pagi: "Pagi yang cerah dan langit bersih adalah waktu terbaik untuk menyiram tanaman. Gunakan air yang tidak terlalu dingin agar akar tidak kaget, dan gemburkan tanah agar air mudah meresap.",
      siang: "Siang hari yang cerah bukanlah waktu ideal untuk menyiram. Tunggu sore atau besok pagi. Jika matahari terlalu terik, pertimbangkan memberikan naungan sementara untuk mencegah tanaman terbakar.",
      malam: "Malam dengan cuaca cerah sebaiknya diisi dengan perawatan ringan tanaman. Jangan siram tanaman karena bisa menyebabkan kelembaban berlebih. Sebagai gantinya, bersihkan area sekitar dari hama atau serangga malam."
    }
  };

  const tip = tipsByWeather[weather]?.[timeOfDay];
  return tip || 'Tips tidak tersedia untuk cuaca dan waktu ini.';
}

export async function generatePlantAdvice(plantName: string, weather: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `Berikan tips perawatan khusus untuk tanaman ${plantName} dalam kondisi cuaca ${weather}. 
    Berikan saran yang praktis dan spesifik dalam bahasa Indonesia, maksimal 3 kalimat.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || `Tips perawatan untuk ${plantName} dalam cuaca ${weather} tidak tersedia saat ini.`;
  } catch (error) {
    console.error('Error generating plant advice:', error);
    return `Tips perawatan untuk ${plantName} dalam cuaca ${weather} tidak tersedia saat ini.`;
  }
}