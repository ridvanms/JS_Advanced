function attachEvents() {
  const textArea = document.getElementById("messages");

  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

  let author = document.getElementsByName("author")[0];
  let message = document.getElementsByName("content")[0];

  // The url for the requests
  //- http://localhost:3030/jsonstore/messenger

  sendBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    author.value
      ? (author.style.borderColor = "black")
      : (author.style.borderColor = "red");
    message.value
      ? (message.style.borderColor = "black")
      : (message.style.borderColor = "red");

    if (!author.value || !message.value) return;

    let structure = {
      author: author.value,
      content: message.value,
    };

    let resPost = await fetch(`http://localhost:3030/jsonstore/messenger`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(structure),
    });

    author.value = "";
    message.value = "";
  });
  refreshBtn.addEventListener("click", async (e) => {
    textArea.textContent = "";
    let resMessenger = await fetch(`http://localhost:3030/jsonstore/messenger`);
    let dataMessenger = await resMessenger.json();

    if (!dataMessenger) return;

    for (const [key, value] of Object.entries(dataMessenger)) {
      let { author, content } = value;
      textArea.textContent += `${author}: ${content}\n`;
    }
  });
}

attachEvents();
