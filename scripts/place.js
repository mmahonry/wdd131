function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    const chill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) +
                  0.3965 * temp * Math.pow(wind, 0.16);
    return `${chill.toFixed(1)} °C`;
  } else {
    return "N/A";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const tempElement = document.getElementById("temperature");
  const windElement = document.getElementById("wind");
  const windChillElement = document.getElementById("windChill");

  if (tempElement && windElement && windChillElement) {
    const temperature = parseFloat(tempElement.textContent);
    const wind = parseFloat(windElement.textContent);
    const windChill = calculateWindChill(temperature, wind);
    windChillElement.textContent = windChill;
  }

  const currentYearElement = document.getElementById("currentyear");
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  const lastModElement = document.getElementById("lastModified");
  if (lastModElement) {
    lastModElement.textContent = `Last Modified: ${document.lastModified}`;
  }
});
