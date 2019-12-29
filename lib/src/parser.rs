extern crate regex;

use regex::Regex;

pub fn divide_equation(equation: String) -> (f64, String, f64) {
  let operator_regex = Regex::new(r"[^.\d\s:]").unwrap();
  let operator: String = operator_regex.captures(&equation).unwrap()[0].to_string();
  let index: Option<usize> = equation.find(&operator);

  let first: &str = &equation[0..index.unwrap()];
  let last: &str = &equation[index.unwrap() + 1..equation.len()];
  let first_as_float = first.to_string().parse::<f64>().unwrap();
  let last_as_float = last.to_string().parse::<f64>().unwrap();
  (first_as_float, operator, last_as_float)
}
