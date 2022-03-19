export default // Quake View handler
class QuakesView {
    renderQuakeList(quakeList, listElement) {

        quakeList.features.forEach((element) => {
            const item = document.createElement("li");
            console.log(element);
            item.setAttribute("data-id", element.id);
            item.innerHTML = `${element.properties.title} 
      <p>${new Date(element.properties.time)}</p>`;
            listElement.appendChild(item);
        });

        listElement.innerHTML = quakeList.features
            .map((quake) => {
                return `<li data-id=${quake.id}>${
          quake.properties.title
        } <div>${new Date(quake.properties.time)}</div></li>`;
            })
            .join("");
    }
    renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake.properties);
        element.innerHTML = quakeProperties
            .map((item) => {
                if (item[0] === "time" || item[0] === "updated") {
                    return `<li>${item[0]}: ${new Date(item[1])}</li>`;
                } else return `<li>${item[0]}: ${item[1]}</li>`;
            })
            .join("");
    }
}