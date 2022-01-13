const testingScope = escopo => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    const ifTheScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifTheScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);