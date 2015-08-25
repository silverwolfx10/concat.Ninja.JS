/**
 * $concat
 *
 * Retorna um novo array concatenando o valor passado a funcao curry
 *
 * @method $concat
 * @author Cleber de Moraes Gonacalves <cleber.programmer>
 * @example
 *
 *        $concat([1, 2, 3], 4);
 *
 */
Ninja.module('$concat', ['$curry'], function ($curry) {
  
  /**
   * Retorna um novo array concatenando o valor passado
   *
   * @public
   * @method concat
   * @param {Array} a Colecao de valores
   * @param {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} b Valor a se concatenado
   * @return {Array} Novo array com o valor concatenado
   * @example
   *
   *        $concat([1, 2, 3], 4);
   *
   */
  function concat(a, b) {
    return a.concat(b);
  }
  
  /**
   * Revelacao do servico $concat, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(concat);
  
});
