function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const msg = document.getElementById("msg");

  if (pass === "amibt2025") {
    localStorage.setItem("amibt_login", "ok");
    msg.textContent = "ログイン成功。動画ページに移動します。";
    setTimeout(() => window.location.href = "videos.html", 1000);
  } else {
    msg.textContent = "パスワードが違います。";
    msg.style.color = "red";
  }
}
