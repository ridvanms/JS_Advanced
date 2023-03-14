function attachEvents() {
  const UlPhoneBook = document.getElementById("phonebook");

  const personInput = document.getElementById("person");
  const phoneInput = document.getElementById("phone");

  const loadBtn = document.getElementById("btnLoad");
  loadBtn.addEventListener("click", onLoad);
  const createBtn = document.getElementById("btnCreate");
  createBtn.addEventListener("click", onCreate);

  // "<person>: <phone> "

  // URL: http://localhost:3030/jsonstore/phonebook

  /*NOTE -URL for delete
     http://localhost:3030/jsonstore/phonebook/:key>
   */

  async function onLoad() {
    let data = await request(`http://localhost:3030/jsonstore/phonebook`, "");
    for (const [key, { person, phone, _id }] of Object.entries(data)) {
      console.log(person, _id);
      const li = document.createElement("li");
      let delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.addEventListener("click", async (e) => {
        e.target.parentNode.remove();

        await fetch(` http://localhost:3030/jsonstore/phonebook/${_id}`, {
          method: "DELETE",
        });
      });

      li.textContent = `${person} ${phone}`;
      li.appendChild(delBtn);

      UlPhoneBook.appendChild(li);
    }
  }

  async function onCreate() {
    let person = personInput.value;
    let phone = phoneInput.value;

    person
      ? (personInput.style.borderColor = "black")
      : (personInput.style.borderColor = "red");
    phone
      ? (phoneInput.style.borderColor = "black")
      : (phoneInput.style.borderColor = "red");

    if (!phone || !person) return;

    let structure = {
      person,
      phone,
    };

    await request(`http://localhost:3030/jsonstore/phonebook`, structure);
    onLoad();
  }

  async function request(url, option) {
    if (!option) {
      let res = await fetch(url);
      return await res.json();
    } else {
      let res = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(option),
      });
      return await res.json();
    }
  }
  console.log("TODO...");
}

attachEvents();
