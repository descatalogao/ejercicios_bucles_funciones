const mutants = [
    { name: 'Wolverine', power: 'teleportation' },
    { name: 'Magneto', power: 'teleportation' },
    { name: 'Professor X', power: 'teleportation' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'teleportation' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, powerx) {
    nombres=[]
    for (mutant of mutants){
        if (mutant.power === powerx){
            nombres.push(mutant.name)
        }
    }
    console.log(nombres)

  }



  findMutantByPower(mutants,'teleportation')