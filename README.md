# 🌿 Aplikasi Plant Reminder  
*Solusi Cerdas Pemeliharaan Tanaman dengan Dukungan Prediksi Cuaca*

## 📌 Deskripsi Proyek  
Aplikasi Plant Reminder merupakan aplikasi berbasis web yang bertujuan membantu pemilik tanaman merawat tanamannya berdasarkan informasi cuaca harian secara real-time. Aplikasi ini menggabungkan data dari API cuaca (seperti OpenWeatherMap) dengan logika sistem pakar berbasis aturan (rule-based expert system) untuk memberikan rekomendasi perawatan harian tanaman seperti penyiraman, pemindahan ke tempat teduh, atau pemberian sinar matahari.

---

## 👥 Anggota Kelompok  
- M. Akbar Rizky (20230040236)  
- Inda Fadila Ainul Hawa (20230040074)  
- M. Gibran Muslih (20230040105)  
- Rezky Sapitri (20230040016)  

*Dosen Pengampu:* Muhammad Ikhasn Thohir, M.Kom  
*Universitas:* Universitas Nusa Putra  
*Fakultas:* Teknik Komputer dan Desain – Teknik Informatika  
*Tahun:* 2025  

---

## 🎯 Tujuan Proyek  
- Membangun aplikasi interaktif berbasis web yang merekomendasikan perawatan tanaman berdasarkan cuaca.  
- Mengelola data tanaman dan cuaca menggunakan React Context API.  
- Mendukung multi-bahasa (i18n) agar bisa digunakan oleh berbagai pengguna.  
- Menghasilkan UI yang ringan dan modular dengan React + Vite.

---

## ⚙ Teknologi dan Framework  
| Teknologi | Deskripsi |
|----------|-----------|
| *React.js* | Untuk membangun antarmuka pengguna berbasis komponen. |
| *Vite* | Build tool dengan HMR cepat untuk pengembangan frontend. |
| *React Router* | Navigasi antar halaman. |
| *React Context API* | Manajemen state global (data cuaca, tanaman, pengaturan). |
| *i18next* | Mendukung internationalization/multi-bahasa. |
| *MUI (Material UI)* | Komponen UI siap pakai. |
| *Tailwind CSS* | Styling cepat berbasis utility-class. |
| *Framer Motion* | Menambahkan animasi interaktif. |
| *OpenWeatherMap API* | Sumber data cuaca real-time. |

---

## 🧠 Logika Sistem  
Sistem menggunakan pendekatan rule-based dengan forward chaining untuk merekomendasikan tindakan harian.  
Contoh aturan:
- Jika cuaca = hujan dan kelembapan > 70%, maka: *“Tidak perlu menyiram tanaman.”*
- Jika cerah dan suhu > 30°C, maka: *“Siram tanaman dan lindungi dari sinar matahari langsung.”*
- Jika mendung dan suhu < 20°C, maka: *“Pindahkan tanaman ke area terang.”*

---

## 🖥 Fitur Utama  
- 🌤 Integrasi cuaca real-time (OpenWeatherMap)  
- 💧 Rekomendasi perawatan tanaman berdasarkan data cuaca  
- 🌱 Pemilihan jenis tanaman dengan simbol kebutuhan air & cahaya  
- 🌙 Mode gelap / terang  
- 🌐 Dukungan multi-bahasa (Indonesia & Inggris)  
- 🔔 Pengingat harian berbasis notifikasi  
- 📱 Desain responsif untuk semua perangkat 
- 💡 Memberikan tips langsung dari AI Gemini

---

## 📸 Tampilan Aplikasi
![image](https://github.com/user-attachments/assets/67713706-6d0e-47fd-925a-5b60d2d591fe)

![image](https://github.com/user-attachments/assets/69c297ef-2aac-48ea-99ff-9e9cf4aa19e5)

![image](https://github.com/user-attachments/assets/5454f649-7752-4819-8532-755c05724822)
