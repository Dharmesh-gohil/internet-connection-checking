const URL =
  "https://upload.wikimedia.org/wikipedia/commons/8/8f/Vatsal_gohil.jpg?time=" +
  new Date().getTime();
const displayStatus = document.getElementById("status");

const checkOnlineStatus = async () => {
  try {
    const online = await fetch(
      // URL
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Vatsal_gohil.jpg?time=" +
        // "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" +
        new Date().getTime()
    );
    console.log(online);

    return online.status >= 200 && online.status < 300;
  } catch (error) {
    return false;
  }
};
setInterval(async () => {
  const result = await checkOnlineStatus();
  console.log(result);

  displayStatus.textContent = result ? "ONLINE" : "OFFLINE";
}, 1000);
