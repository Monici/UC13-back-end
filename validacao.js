// Importando o Joi (Validação)
import Joi from "joi";

// Validação para inclusão de modelo de carro
export const modeloCarro = Joi.object({
    nome: Joi.string().min(3).required(),  // Nome do carro Min. 3 caracter
    sigla: Joi.string().length(3).required(), // Sigla do carro, 3 caracter
    potencia: Joi.number().min(1).required(),// Potência minima de 1 CV
    velocidadeMaxima: Joi.number().min(1).required(), // Velocidade min. de 1
    consumo: Joi.number().min(0.1).required(),// Consumo mínimo de 0.1
    aceleracao: Joi.number().min(0).required(),// Aceleração min. de 0
    preco: Joi.number().min(0).required(), // Preço min. de 0
}); 

//Validação para atualização do carro
export const modeloAtualizacaoCarro = Joi.object({
    nome: Joi.string().min(3), // Nome do carro, opcional
    sigla: Joi.string().length(3),// Sigla do carro, opcional
    potencia: Joi.number().min(1),// Potencia
    velocidadeMaxima: Joi.number().min(0.1), // Velocida Máxima, opcional
    consumo: Joi.number().min(0), // Consumo, opcional
    aceleracao: Joi.number().min(0), // Aceleração, opcional
    preco: Joi.number().min(0), // Preço, opcional
    //ano: Joi.number().integer().min(1886).max(new Date().getFullYear()),
}).min(1); // Pelo menos um campo precisa ser atualizado
