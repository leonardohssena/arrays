// Tendo os arrays ['ES', 'MG', 'RJ', 'SP', 'MT'] e ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'],
// percorra os vetores dados e crie um outro com a seguinte estrutura:
// ['MT' => ''Mato Grosso'', 'ES'=>'Espírito Santo', 'MG'=>'Minas Gerais', 'RJ'=>'Rio de Janeiro', 'SP'=>'São Paulo'].
// Depois de criado terceiro vetor, leia-o e imprima em cada linha a chave de cada posição e seu respectivo valor separados por "-".

const ufs = ['ES', 'MG', 'RJ', 'SP', 'MT']
const estados = ['Mato Grosso', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo']

let novoArray = []
for (let i = 0; i < ufs.length; i++) {
  const uf = ufs[i];
  const estado = estados[estados.length - 1 - i];

  novoArray.push({ [uf]: estado })
}

for (const novoEstado of novoArray) {
  const entries = Object.entries(novoEstado)[0]
  console.log(`${entries[0]} - ${entries[1]}`)
}