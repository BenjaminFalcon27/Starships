export const useImage = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../assets/images/starships/CR90corvette.jpg");
      break;
    case "stardestroyer":
      source = require("../../assets/images/starships/stardestroyer.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("../../assets/images/starships/sentinel-classlandingcraft.jpg");
      break;
    case "deathstar":
      source = require("../../assets/images/starships/deathstar.jpg");
      break;
    case "millenniumfalcon":
      source = require("../../assets/images/starships/millenniumfalcon.jpg");
      break;
    case "y-wing":
      source = require("../../assets/images/starships/y-wing.jpg");
      break;
    case "x-wing":
      source = require("../../assets/images/starships/x-wing.jpg");
      break;
    case "tieadvanced x1":
      source = require("../../assets/images/starships/tieadvancedx1.jpg");
      break;
    case "executor":
      source = require("../../assets/images/starships/executor.jpg");
      break;
    case "rebeltransport":
      source = require("../../assets/images/starships/rebeltransport.jpg");
      break;
  }
  return source;
};