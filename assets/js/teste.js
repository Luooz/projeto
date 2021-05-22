const CPF = (cpf) =>
{
  const cpf = new RegExp('/(d{3}.?d{3}.?d{3}-?d{2})|(d{2}.?d{3}.?d{3}/?d{4}-?d{2})/','g',);
  const state = cpf.test(cpf) ? 'Válido' : 'Inválido'
  alert(`CPF ${state}`)
}