  const changer = document.querySelector("div.color-changer input");
      const bodyTag = document.querySelector("body");

      changer.addEventListener("input", function () {
        bodyTag.style.backgroundColor = changer.value;

        const color = chroma(changer.value);

        if (color.luminance() < 0.3) {
          bodyTag.classList.add("dark");
        } else {
          bodyTag.classList.remove("dark");
        }
        
      });