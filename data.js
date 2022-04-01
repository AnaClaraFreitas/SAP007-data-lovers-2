export const order = (data) => data.sort((a,z)=> a.name > z.name ? 1 : -1);
export const sortAZ = (data) => order(data).slice(0,493);
export const sortZA = (data) => sortAZ(data).reverse();

export const filterPesquisar = (data,condition) => {
    const resultadoNomes = data.filter(
        (item) => item.name.toLowerCase().includes(condition.toLowerCase()));
        return resultadoNomes;
}
export const filterSpecies = (data,condition) =>
    data.filter(
      (characters) => characters.species.toLowerCase() === condition.toLowerCase()
);
export const filterGender = (data,condition) =>
    data.filter(
      (characters) => characters.gender.toLowerCase() === condition.toLowerCase()
);
export const filterStatus = (data, condition) =>
    data.filter(
      (characters) => characters.status.toLowerCase() === (condition.toLowerCase())
);
export const calcular = (total, porcent) =>
Math.round((porcent * 100) / total);



