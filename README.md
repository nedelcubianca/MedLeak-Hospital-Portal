# MedLeak-Hospital-Portal
# 🏥 MedLeak Hospital Portal – Vulnerable Web Application

👤 Author: **Nedelcu Bianca-Nicoleta**  
🎓 Project: *Applied Web Application Security*

## 🔍 Introduction

**MedLeak Hospital Portal** este o aplicație web vulnerabilă creată intenționat în scop educațional, pentru a simula riscuri reale de securitate într-un portal medical.

Aplicația include:
- Homepage
- Sistem de login
- Fișiere ale pacienților
- Panou de admin
- Secțiune de recenzii

🎥 **Video demo:** [https://youtu.be/G6lPuzVeKBw](https://youtu.be/G6lPuzVeKBw)

---

## 🎯 Obiectivul atacatorului

- Accesarea datelor medicale sensibile din:
  - Panoul de admin (diagnoze pacienți)
  - Fișierele pacienților (prin URL-uri parametrizate)
  - Recenziile stocate (vulnerabile la XSS)

---

## 🚫 Atacuri excluse din proiect

- ❌ **Brute-force pe login** – Autentificarea e locală, nu există ratelimiting
- ❌ **Denial of Service (DoS)** – Nu există backend real, deci nu are valoare
- ❌ **MITM / capturi de trafic** – Totul rulează local, fără conexiuni reale
- ❌ **SQL Injection / File Upload** – Nu există server sau bază de date

👉 Toate testele sunt limitate la **client-side** și la logica aplicației.

---

## 🧠 Vulnerability Classification

### 🔐 Categoria 1: Autentificare și Control al Accesului

1. **Client-Side Authentication**
   - `users.json` conține toți utilizatorii și rolurile
   - Autentificare exclusivă în JavaScript

2. **User Enumeration**
   - Mesajele de eroare indică dacă username-ul există

3. **Acces neautorizat la admin.html**
   - Lipsa verificării de sesiune sau rol
   - Se poate accesa direct URL-ul

---

### 📂 Categoria 2: Acces Insecurizat la Resurse (IDOR)

4. **Insecure Direct Object Reference**
   - `patient.html?id=X` permite accesul la fișiere fără validare

5. **Enumerare Predictibilă**
   - Parametrul `id` este numeric și secvențial

---

### 💉 Categoria 3: Injecții

6. **Stored XSS în reviews.html**
   - Review-urile nu sunt igienizate
   - Cod JavaScript este executat ulterior

   Ex:  
   ```html
   <script>alert("XSS confirmed!")</script>
