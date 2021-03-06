/**
 * @param {string} s
 * @return {boolean}
 *
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 *
 */
var isNumber = function(s) {

  // make sure length is not 0
  // use isNaN to check if it's a valid number
  // make sure both conditions are true

  return s.trim().length !== 0 && !isNaN(Number(s));
};