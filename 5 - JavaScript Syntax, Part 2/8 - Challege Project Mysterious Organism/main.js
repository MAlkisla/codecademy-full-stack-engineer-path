// Helper function to return a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Helper function to generate a random DNA strand with 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  // Factory function to create pAequor organism objects
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
  
      // Method to mutate a random base in the DNA
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (newBase === this.dna[randomIndex]) {ß
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
  
      // Method to compare DNA with another pAequor object
      compareDNA(otherOrganism) {
        let identicalCount = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === otherOrganism.dna[i]) {
            identicalCount++;
          }
        }
        const percentIdentical = (identicalCount / this.dna.length) * 100;
        console.log(
          `Specimen #${this.specimenNum} and specimen #${
            otherOrganism.specimenNum
          } have ${percentIdentical.toFixed(2)}% DNA in common.`
        );
      },
  
      // Method to check if the organism is likely to survive
      willLikelySurvive() {
        const cgBases = this.dna.filter((base) => base === "C" || base === "G");
        return cgBases.length / this.dna.length >= 0.6;
      },
    };
  };
  
  // Create 30 instances of pAequor organisms that are likely to survive
  let pAequorInstances = [];
  let specimenNum = 1;
  
  while (pAequorInstances.length < 30) {
    let newStrand = mockUpStrand();
    let newOrganism = pAequorFactory(specimenNum, newStrand);
    if (newOrganism.willLikelySurvive()) {
      pAequorInstances.push(newOrganism);
      specimenNum++;
    }
  }
  
  // Testing the created instances
  console.log("30 instances of pAequor organisms that are likely to survive:");
  console.log(pAequorInstances);
  
  // Testing mutate method on one of the organisms
  let organismToMutate = pAequorInstances[0];
  console.log(`Mutating organism ${organismToMutate.specimenNum}...`);
  console.log("Original DNA:", organismToMutate.dna);
  organismToMutate.mutate();
  console.log("Mutated DNA:", organismToMutate.dna);
  
  // Testing compareDNA method between two organisms
  let organism1 = pAequorInstances[0];
  let organism2 = pAequorInstances[1];
  console.log(
    `Comparing DNA between organism ${organism1.specimenNum} and organism ${organism2.specimenNum}...`
  );
  organism1.compareDNA(organism2);
  