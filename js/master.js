let theform = document.querySelector(".form");
let thetask = document.querySelector(".tasks");
let theinput = document.querySelector(".input");
theform.onsubmit = function (e) {
  e.preventDefault();

  let thediv = document.createElement("div");
  thediv.innerHTML = theinput.value;
  thediv.style.cssText =
    "width: 100%; background-color: white; border-radius: 5px; box-sizing: border-box; overflow-wrap: break-word; margin-bottom: 5px; padding: 5px; display: flex; justify-content: space-between;";
  thetask.appendChild(thediv);
  thediv.className = "fuck";
  let btn = document.createElement("button");
  btn.innerHTML = "delete";
  btn.style.cssText =
    "border: none; padding: 0px 10px; border-radius: 5px; background-color: red; font-size: 11px; color: white;";
  thediv.appendChild(btn);

  btn.onclick = function () {
    thediv.style.display = "none";
    window.localStorage.clear();
  };

  window.localStorage.setItem("tasks", thetask.innerHTML);
};

if (window.localStorage.getItem("tasks")) {
  thetask.innerHTML = window.localStorage.getItem("tasks");
}
