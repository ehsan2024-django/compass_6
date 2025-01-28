

// تابع برای ایجاد پیشنهادات اتوکامپلیت
function convertToPersianNumbers(input) {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return input.toString().replace(/[0-9]/g, function (w) {
    return persianNumbers[+w];
  });
}
// function autocomplete(inputElement, data) {
//   let currentFocus;

//   inputElement.addEventListener("input", function () {
//     const value = this.value;
//     closeAllLists();

//     if (!value) return false;

//     currentFocus = -1;

//     const listContainer = document.createElement("div");
//     listContainer.setAttribute("id", this.id + "-autocomplete-list");
//     listContainer.setAttribute("class", "autocomplete-items");
//     this.parentNode.appendChild(listContainer);

//     for (let i = 0; i < data.length; i++) {
//       if (data[i].label.toLowerCase().includes(value.toLowerCase())) {
//         const item = document.createElement("div");
//         item.innerHTML = `<strong>${data[i].label.substr(
//           0,
//           value.length
//         )}</strong>${data[i].label.substr(value.length)}`;
//         item.addEventListener("click", function () {
//           inputElement.value = data[i].label;
//           closeAllLists();
//           fetchSunPosition(data[i]);
//         });
//         listContainer.appendChild(item);
//       }
//     }
//   });

//   function closeAllLists() {
//     const items = document.querySelectorAll(".autocomplete-items");
//     items.forEach((item) => item.parentNode.removeChild(item));
//   }
// }

// // تابع برای درخواست موقعیت خورشید
// function fetchSunPosition(selectedCity) {
//   fetch(`/calculate_sun_position/?city=${selectedCity.value}`)
//     .then((response) => response.json())
//     .then((data) => {
//       // نمایش نام شهر
//       document.getElementById("city-name").textContent = selectedCity.label;
//       document.getElementById("city-name").classList.add("active");

//       // بروزرسانی اطلاعات خورشید
//       let persian_c = convertToPersianNumbers(data.azimuth.toFixed(1));
//       let persian_h = convertToPersianNumbers(data.altitude.toFixed(1));
//       document.getElementById(
//         "sun-position"
//       ).textContent = `سمت خورشید: ${persian_c}°`;
//       document.getElementById(
//         "sun-elevation"
//       ).textContent = `ارتفاع خورشید: ${persian_h}°`;

//       // چرخاندن عقربه به سمت خورشید
//       document.querySelector(
//         ".needle"
//       ).style.transform = `translateX(-50%) rotate(${data.azimuth}deg)`;
//       document.querySelector(
//         ".qibla-needle"
//       ).style.transform = `translateX(-50%) rotate(${data.qibla_angle}deg)`;
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       document.getElementById("city-name").textContent =
//         "خطا در محاسبه موقعیت خورشید";
//       document.getElementById("city-name").classList.add("active");
//     });
// }

// بروزرسانی ساعت و تاریخ
function updateDateTime() {
  const now = new Date();

  // ساعت
  const time = now.toLocaleTimeString("fa-IR");
  document.querySelector(".time-now").textContent = time;

  // تاریخ
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString("fa-IR", options);
  const parts = date.split(" ");

  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const weekday = parts[3];
  document.querySelector(".day-name").textContent = weekday;
  document.querySelector(".day-number").textContent = day;
  document.querySelector(".month-name").textContent = month;
  document.querySelector(".year-number").textContent = year;
}

// // اجرای اولیه و تنظیم بروزرسانی مداوم
// document.addEventListener("DOMContentLoaded", function () {
//   // تنظیم اتوکامپلیت
//   const searchInput = document.querySelector(".search-input");
//   autocomplete(searchInput, cities);

//   // بروزرسانی تاریخ و ساعت
updateDateTime();
setInterval(updateDateTime, 1000);
// });

// let how_option = document.querySelectorAll('.how-option');
// let how_find_show = document.querySelector('.how-find-show');
// let array_show = ['fa moon', 'fa sun', 'fa star']
// how_option.forEach(e => {
//   e.addEventListener('click', event => {

//   })
// })
let paramE = 'sun'
function showIcon(icon, color = 'text-yellow-400') {
  // ابتدا تمام آیکون‌ها رو مخفی می‌کنیم
  document.getElementById("sun").classList.add("hidden1");
  document.getElementById("moon").classList.add("hidden1");
  document.getElementById("star").classList.add("hidden1");
  if (icon == "moon") {
    document.getElementById('show-compass').classList.add('hidden')
    document.getElementById('span-show').innerHTML = 'ماه'
    document.getElementById(
      "hf"
    ).innerHTML = `<i class="fas fa-${icon} animate-bounce text-white text-xl"></i>`;
    document.getElementById("moon").classList.add("bg-purple-400");
    document.getElementById("sun").classList.remove("bg-purple-400");
    document.getElementById("star").classList.remove("bg-purple-400");
    paramE = 'moon'
  } else if (icon == "sun") {
    document.getElementById('show-compass').classList.add('hidden')
    document.getElementById('span-show').innerHTML = 'خورشید'
    document.getElementById(
      "hf"
    ).innerHTML = `<i class="fas fa-${icon} animate-bounce text-yellow-400 text-xl"></i>`;
    document.getElementById("sun").classList.add("bg-purple-400");
    document.getElementById("moon").classList.remove("bg-purple-400");
    document.getElementById("star").classList.remove("bg-purple-400");
    paramE = 'sun'
  } else {
    document.getElementById('star-modal').classList.remove('hidden')
    document.getElementById('show-compass').classList.add('hidden')
    document.getElementById('span-show').innerHTML = 'ستاره'
    document.getElementById(
      "hf"
    ).innerHTML = `<i class="fas fa-${icon} animate-bounce ${color} text-xl"></i>`;
    document.getElementById("star").classList.add(color);
    document.getElementById("star").classList.add('bg-purple-400');
    document.getElementById("moon").classList.remove("bg-purple-400");
    document.getElementById("sun").classList.remove("bg-purple-400");
    paramE = 'star'
  }
  document.getElementById(icon).classList.remove("hidden1");
}

document.getElementById('search-i').addEventListener('click', ()=> {
  updateQibla(paramE);
  document.getElementById('show-compass').classList.remove('hidden')
})
const qiblaLat = 21.4225;
const qiblaLon = 39.8262;

const cities = {
  تهران: { lat: 35.6892, lon: 51.389 },
  مشهد: { lat: 36.2605, lon: 59.6168 },
  شیراز: { lat: 29.619, lon: 52.5387 },
  اصفهان: { lat: 32.6613, lon: 51.6804 },
  تبریز: { lat: 38.0962, lon: 46.2738 },
  قم: { lat: 34.6399, lon: 50.8759 },
  اهواز: { lat: 31.3183, lon: 48.6706 },
  کرمان: { lat: 30.2839, lon: 57.0834 },
  همدان: { lat: 34.7992, lon: 48.5146 },
  یزد: { lat: 31.8974, lon: 54.3569 },
  شاهرود: { lat: 36.418, lon: 54.9763 },
};

let deviceOrientation = 0;
let qiblaDirection = 0;

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (event) => {
    deviceOrientation = event.alpha;
    updateNeedles();
  });
} else {
  alert("مرورگر شما از قطب‌نما پشتیبانی نمی‌کند.");
}

function calculateQibla(lat, lon) {
  const deltaLon = (qiblaLon - lon) * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  const qiblaLatRad = qiblaLat * (Math.PI / 180);

  const y = Math.sin(deltaLon) * Math.cos(qiblaLatRad);
  const x =
    Math.cos(latRad) * Math.sin(qiblaLatRad) -
    Math.sin(latRad) * Math.cos(qiblaLatRad) * Math.cos(deltaLon);

  let angle = Math.atan2(y, x) * (180 / Math.PI);
  return (angle + 360) % 360;
}

function calculateMoonQibla(lat, lon) {
  const moonLat = 0; // مختصات تقریبی ماه
  const moonLon = 0; // مختصات تقریبی ماه

  const deltaLon = (moonLon - lon) * (Math.PI / 180);
  const latRad = lat * (Math.PI / 180);
  const moonLatRad = moonLat * (Math.PI / 180);

  const y = Math.sin(deltaLon) * Math.cos(moonLatRad);
  const x =
    Math.cos(latRad) * Math.sin(moonLatRad) -
    Math.sin(latRad) * Math.cos(moonLatRad) * Math.cos(deltaLon);

  let angle = Math.atan2(y, x) * (180 / Math.PI);
  return (angle + 360) % 360;
}

function updateNeedles() {
  const greenNeedle = document.querySelector(".qibla-needle");
  const directions = document.querySelector(".directions");

  greenNeedle.style.transform = `translateX(-50%) translateY(-100%) rotate(${
    qiblaDirection - deviceOrientation
  }deg)`;
  directions.style.transform = `rotate(${-deviceOrientation}deg)`;
}
console.log('object')
function updateQibla(type) {
  const cityInput = document.getElementById("city").value;
  const city = cities[cityInput];
  if (city) {
    if (type === "sun") {
      qiblaDirection = calculateQibla(city.lat, city.lon);
      document.getElementById("sun-q").classList.remove("hidden");
      document.getElementById("moon-q").classList.add("hidden");
      document.getElementById("star-q").classList.add("hidden");
      setTimeout(()=> {
        document.getElementById('modal').classList.add('flex')
      },1000)
    } else if (type === "moon") {
      qiblaDirection = calculateMoonQibla(city.lat, city.lon);
      document.getElementById("moon-q").classList.remove("hidden");
      document.getElementById("sun-q").classList.add("hidden");
      document.getElementById("star-q").classList.add("hidden");
      alert(`زاویه‌ی قبله برای ${cityInput} بر اساس ماه محاسبه شد.`);
    } else if (type === "star") {
      qiblaDirection = calculateQibla(city.lat, city.lon);
      document.getElementById("star-q").classList.remove("hidden");
      document.getElementById("sun-q").classList.add("hidden");
      document.getElementById("moon-q").classList.add("hidden");
      alert(`زاویه‌ی قبله برای ${cityInput} بر اساس ستاره محاسبه شد.`);
    }
    updateNeedles();
  } else {
    alert("شهر انتخابی معتبر نیست. لطفاً یک شهر معتبر انتخاب کنید.");
  }
}
document.getElementById('close-s').addEventListener('click',()=> {
  document.getElementById('star-modal').classList.add('hidden');
})
console.log('dmdk')
function setStar(name){
  let cl;
  if(name == 'qotb'){
    cl = 'text-yellow-400'
    document.getElementById('qotb').classList.add('bg-purple-600')
    document.getElementById('soheil').classList.remove('bg-purple-600')
    document.getElementById('shabahang').classList.remove('bg-purple-600')
    document.getElementById('eioq').classList.remove('bg-purple-600')
  }else if(name == 'soheil'){
    cl = 'text-blue-500'
    document.getElementById('qotb').classList.remove('bg-purple-600')
    document.getElementById('soheil').classList.add('bg-purple-600')
    document.getElementById('shabahang').classList.remove('bg-purple-600')
    document.getElementById('eioq').classList.remove('bg-purple-600')
  }else if(name == 'shabahang'){
    cl = 'text-blue-800'
    document.getElementById('qotb').classList.remove('bg-purple-600')
    document.getElementById('soheil').classList.remove('bg-purple-600')
    document.getElementById('shabahang').classList.add('bg-purple-600')
    document.getElementById('eioq').classList.remove('bg-purple-600')
  }else if(name == 'eioq'){
    cl = 'text-red-500'
    document.getElementById('qotb').classList.remove('bg-purple-600')
    document.getElementById('soheil').classList.remove('bg-purple-600')
    document.getElementById('shabahang').classList.remove('bg-purple-600')
    document.getElementById('eioq').classList.add('bg-purple-600')
  }
  document.getElementById('star-btn').addEventListener('click', ()=> {
    showIcon('star', cl);
    document.getElementById('star-modal').classList.add('hidden')
  })
}