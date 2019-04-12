
export const validar = function validateEmail (email2){
  let validEmail=false;

let n = email2.indexOf("@");
if (n!=-1){validEmail=true}
console.log(validEmail);
return validEmail
};


export const validar2 = function validateSpaces (email2){
  let validEmail=false;

  let n = email2;
  if (n!==""){validEmail=true}
  console.log(validEmail);

return validEmail
};


export const validar3 = function validateSpacesPassword (password2){
  let validPassword=false;

  let n = password2;
  if (n!==""){validPassword=true}
  console.log(validPassword);

return validPassword
};
