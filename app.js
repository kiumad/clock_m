const c_nubmers = document.querySelector(".c-numbers");
const c_numbers_count = 12;

for (let i = 1; i < c_numbers_count + 1; i++) {
  let item = document.createElement("span");
  item.textContent = "-";
  item.classList.add("c-numbers-item");
  item.style.cssText = `transform:rotate(${
    (360 / c_numbers_count) * i
  }deg) translate(${69}px)`;
  c_nubmers.appendChild(item);
}

const c_second = document.querySelector(".c-second");
const c_min = document.querySelector(".c-min");
const c_hours = document.querySelector(".c-hours");
setInterval(() => {
  let date = new Date();
  let sec_rotate = date.getSeconds() * 6;
  let min_rotate = date.getMinutes() * 6;
  let hour_rotate = date.getHours() * 30;
  sec_rotate += 6;
  if (date.getSeconds() === 60) min_rotate += 6;
  if (date.getMinutes() === 60) hour_rotate += 30;
  c_second.style.cssText = `transform: rotate(${sec_rotate}deg)`;
  c_min.style.cssText = `transform: rotate(${min_rotate}deg)`;
  c_hours.style.cssText = `transform: rotate(${hour_rotate}deg)`;
}, 1000);
