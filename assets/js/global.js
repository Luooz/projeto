// Vamos checar o input de CPF para ver se é válido ou inválido
function validarCPF(cpf) 
{
  // Sugestão de expressão regular de CPF
  return new RegExp('/(d{3}.?d{3}.?d{3}-?d{2})|(d{2}.?d{3}.?d{3}/?d{4}-?d{2})/','g',).test(cpf)
}

function validarTelefoneCelular(validarTelefoneCelular)
{
  return new RegExp('\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$', 'g').test(telefone)
}

// Vamos aplicar a função global para verificar a validade de cada input
function validarFeedback(input) 
{
  const state = validarCPF(input.value) ? 'Válido' : 'Inválido'
  alert(`CPF ${state}`)

  const statePhone = validarTelefoneCelular(input.value) ? 'Válido' : 'Inválido'
  alert(`Telefone ${statePhone}`)

  const cpfInput = document.querySelector('#CPF')
  const phoneInput = document.querySelector('#Telefone')

  const validateCPFInput = validarFeedback.bind(null, cpfInput)
  const validatePhoneInput = validarFeedback.bind(null, phoneInput)

  validateCPFInput()
  validatePhoneInput()

}