mod math;
mod parser;
mod utils;

use math::*;
use parser::divide_equation;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn calculate(expression: String) -> String {
  let equation_parts_tuple = divide_equation(expression);
  let operator: String = equation_parts_tuple.1;
  let a: f64 = equation_parts_tuple.0;
  let b: f64 = equation_parts_tuple.2;
  match operator.as_ref() {
    "+" => add_two_numbers(a, b),
    "-" => subtract_two_numbers(a, b),
    "X" => multiply_two_numbers(a, b),
    "/" => divide_two_numbers(a, b),
    "%" => get_remainder(a, b),
    "^" => calc_exponent(a, b),
    // Handle the rest of cases
    _ => "Something failed...".to_string(),
  }
}
