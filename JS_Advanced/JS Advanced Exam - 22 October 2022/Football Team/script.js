class footballTeam {
  constructor(name, country) {
    this.clubName = name;
    this.country = country;
    this.invitedPlayers = [];
  }
  newAdditions(playersArr) {
    playersArr.map((player) => {
      const [name, age, playerValue] = player.split("/");
      if (this.invitedPlayers.includes(name)) {
        if (name.playerValue > playerValue) {
          this.invitedPlayers[name] = { age, playerValue };
        }
      } else {
        this.invitedPlayers[name] = { age, playerValue };
      }
    });
    return `You successfully invite ${Object.entries(this.invitedPlayers)
      .map((p) => p[0])
      .join(", ")}.`;
  }
  signContract(selectedPlayer) {
    const [name, playerOffer] = selectedPlayer.split("/");
    if (!this.invitedPlayers.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < this.invitedPlayers[name].playerValue) {
      throw new Error(`"The manager's offer is not enough to sign a contract with ${name}, ${
        this.invitedPlayers[name].playerValue - playerOffer
      } million more are needed to sign the contract!"
    `);
    }
    this.invitedPlayers[name].playerValue = "Bought";
    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
  }
  ageLimit(name, age) {
    if (!this.invitedPlayers.hasOwnProperty(name)) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (this.invitedPlayers[name].age < age) {
      const ageDifference = age - this.invitedPlayers[name].age;
      if (ageDifference > 5) {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!"`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }
  transferWindowResult() {
    let result = [];
    result.push(`Player list:`);
    const sortedNames = Object.keys(this.invitedPlayers).sort();
    sortedNames.forEach((name) => {
      result.push(`Player ${name} - ${this.invitedPlayers[name].playerValue}`);
    });
    return result.join("\n");
  }
}
//!1
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Pau Torres/25/52",
//   ])
// );
//You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

//! 2
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(
//   fTeam.newAdditions([
//     "Kylian Mbappé/23/160",
//     "Lionel Messi/35/50",
//     "Kylian Mbappé/23/170",
//     "Pau Torres/25/52",
//   ])
// );
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

/*
    You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
    Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
    Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
    Uncaught Error: Barbukov is not invited to the selection list!
*/

//! 3
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

/* 
    You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
    Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
    Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
    Players list:
    Player Kylian Mbappé-Bought
    Player Lionel Messi-50
    Player Pau Torres-52

*/
