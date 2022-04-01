import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { sortAZ, 
  sortZA, 
  filterStatus,
  filterGender, 
  filterSpecies,
  filterPesquisar,
  calcular,
 } from '../src/data.js';

  const dadosDosPersonagens = [
    {
      "name": "Rick Sanchez",
      "Species": "Human",
      "Gender": "Male",
      "Status": "Alive",
    },
    {
      "name": "Morty Smith",
      "Species": "Human",
      "Gender": "Male",
      "Status": "Alive",
    },
    {
      "name": "Summer Smith",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
    {
      "name": "Summer",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
    {
      "name": "Beth Smith",
      "Species": "Human",
      "Gender": "Female",
      "Status": "Alive",
    },
   ];
   const name = [
     {"name": "Rick Sanchez"},
     {"name": "Morty Smith"},
     {"name": "Summer Smith"},
     {"name": "Beth Smith"},
   ]

   // Teste para filtrar espécie 
   describe("filterSpecies", () => {
    it("deverá ser uma função", () => {
      expect(typeof filterSpecies).toBe("function");
    })
    it ("filtrar pela espécie Human", () => {
      const expected = filterSpecies(dadosDosPersonagens, " Human");
      expect(expected).toEqual([
        {
          name: "Summer Smith",
          species: "Human",
          gender: "Female",
          status:"Alive",
        },
      ]);
    });
  });
  // Teste para filtrar gênero
describe("filterGender", () =>{
  it("deverá ser uma função", () =>{
    expect (typeof filterGender).toBe("function");
  });
  it("filtrar pelo gênero Male", () =>{
    const expected = filterGender(dadosDosPersonagens, "Male");
    expect (expected).toEqual([
      {
        name: "Rick Sanchez",
        species: "Human",
        gender: "Male",
        status: "Alive",
      },
    ]);
  });
});

// Teste para filtrar Status
describe("filterStatus", () => {
  it ("deverá ser uma função", () => {
    expect (typeof filterStatus).toBe("function");
  });
  it("filtrar pelo status Alive", () => {
    const expected = filterStatus(dadosDosPersonagens, "Alive");
    expect(expected).toEqual([
      {
        name: "Morty Smith",
        species:"Human",
        gender:"Male",
        status:"Alive",
      },
    ]);
  });
});
// Teste para buscar por nome (pesquisar)
describe("Deverá buscar por nome", () => {
  it ("Deverá ser uma função", () => {
    expect(typeof filterPesquisar).toBe("function");
  });
  it("Deverá buscar por nome",() => {
    const expected = filterPesquisar(name, "Ana")
    expect(expected).toEqual([]) 
  });
  it("Deverá buscar por nome", () => {
    const expected = filterPesquisar(name, "summer")
    expect(expected).toEqual([{Name: "Summer Smith"}])
  });
});
// Teste para calcular porcentagem
describe("calcular", () => {
   it("Deverá ser uma função", () =>{
     expect(typeof calcular).toBe("function");
   });
   it ("Deverá retornar 70% dos personagens humanos", () => {
     const expected = calcular(dadosDosPersonagens.length, 1)
     expect(expected).toEqual(70)
   });
});
// Teste para ordenar de (A-Z) e de (Z-A)
describe("sortAZ", () => {
  it("Deverá ser uma função", () =>  {
    expect (typeof sortAZ).toBe ("function")
  });
  it ("Deverá sortear A-Z ",() => {
    expect(sortAZ(name, "A-Z")).toEqual([name[0],name[3], name[2], name[1]])
describe("sortZA", () => {
  it("Deverá ser uma função", () =>{
    expect (typeof sortZA).toBe("function")
  });
  it ("Deverá sortear sortZA",() => {
    expect(sortZA(name, "Z-A")).toEqual([name[1]], name[2], name[3], name[0])
  });
});
  });
});
