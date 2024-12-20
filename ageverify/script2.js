function pullLever() {
    const emojis = ["🍎", "🍋", "🍒", "🍇", "🍉", "🍌"];
    const slots = [document.getElementById("slot1"), document.getElementById("slot2"), document.getElementById("slot3")];
    const message = document.getElementById("message");
    const button = document.querySelector("button"); 
  

    button.disabled = true;
    message.textContent = "Spinning... 🎰";
  
    slots.forEach((slot) => {
      slot.classList.remove("spinning", "result");
      void slot.offsetWidth; 
      slot.classList.add("spinning");
    });
  
 
    slots.forEach((slot) => {
      slot.innerHTML = `<span>${getRandomEmoji(emojis)}</span>`;
    });
  

    setTimeout(() => {
      slots.forEach((slot) => {
        slot.classList.remove("spinning"); 
        const finalEmoji = getRandomEmoji(emojis);
        slot.innerHTML = `<span>${finalEmoji}</span>`;
        slot.classList.add("result"); 
      });
  
     
      const results = slots.map((slot) => slot.textContent);
      if (results[0] === results[1] && results[1] === results[2]) {
        message.textContent = "🎉 JACKPOT! ....გირჩევნია არ წახვიდე სამსახურიდან 💸";
      } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        message.textContent = "ეგარი! არა არ ყოფილა. 😜";
      } else {
        message.textContent = "არ გაგიმართლა!";
      }
  
    
      button.disabled = false;
    }, 1500); 
  }
  
  function getRandomEmoji(emojis) {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  