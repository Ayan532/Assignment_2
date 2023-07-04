exports.isUsernameValid=(username)=>{

  const regex = /^[a-zA-Z0-9]+$/;
  const length = username.length;

  return regex.test(username) && length >= 6 && length <= 12;

}

exports.isPasswordValid=(password)=>{

    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]+$/;
  const length = password.length;

  return passwordRegex.test(password) && length >= 6;

}