// require('../src/js/functions.js');
// import { validar, validar2, validar3, validateEmail} from '../src//js/functions.js';

import * as funciones from '../src//js/functions.js';


describe('Verifica que sea un email válido', () => {
  it('Debería ser una función', () => {
    expect(typeof funciones.validar).toBe('function');
  });
  it('Debería retornar false si no contiene @', () => {
    expect(funciones.validar("elizabeth.caceresgmail.com")).toBe(false);
  });

  it('Debería retornar true si contiene "@"', () => {
    expect(funciones.validar("elizabeth.caceres@gmail.com")).toBe(true);
  });

  it('Debería retornar false si el mail está vacío', () => {
    expect(funciones.validar2("")).toBe(false);
  });

  it('Debería retornar true si el mail no está vacío', () => {
    expect(funciones.validar2("elizabeth")).toBe(true);
  });

});


describe('Verifica que sea una contraseña válida', () => {
  it('Debería ser una función', () => {
    expect(typeof funciones.validar2).toBe('function');
  });

  it('Debería retornar false si la contraseña está vacía', () => {
    expect(funciones.validar2("")).toBe(false);
  });

  it('Debería retornar true si la contraseña no está vacía', () => {
    expect(funciones.validar2("123456")).toBe(true);
  });

});
