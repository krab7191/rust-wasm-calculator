pub fn divide_equation(equation: String) -> (f64, String, f64) {
  let operator: String;
  let index: Option<usize>;
  if equation.find('+') != None {
    index = equation.find('+');
    operator = "+".to_string();
  } else if equation.find('-') != None {
    index = equation.find('-');
    operator = "-".to_string();
  } else if equation.find('X') != None {
    index = equation.find('X');
    operator = "X".to_string();
  } else if equation.find('/') != None {
    index = equation.find('/');
    operator = "/".to_string();
  } else if equation.find('%') != None {
    index = equation.find('%');
    operator = "%".to_string();
  } else if equation.find('^') != None {
    index = equation.find('^');
    operator = "^".to_string();
  } else {
    operator = "ERROR".to_string();
    index = Some(0);
  }

  let first: &str = &equation[0..index.unwrap()];
  let last: &str = &equation[index.unwrap() + 1..equation.len()];
  let first_as_float = first.to_string().parse::<f64>().unwrap();
  let last_as_float = last.to_string().parse::<f64>().unwrap();
  (first_as_float, operator, last_as_float)
}
