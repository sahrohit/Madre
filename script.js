// const name = document.forms["RegForm"]["job1"];
// const email = document.forms["RegForm"]["job3"];
// const number = document.forms["RegForm"]["job3"];

// let name = document.getElementById("job1").value;
// let email = document.getElementById("job3").value;
// let number = document.getElementById("job3").value;

function text1() {
  document.getElementById("form-title1").style.opacity = "1";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title4").style.opacity = "0";
}

function text2() {
  // document.getElementById("form-title1").style.opacity = "0";
  document.getElementById("form-title2").style.opacity = "1";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title4").style.opacity = "0";
}

function text3() {
  // document.getElementById("form-title1").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  document.getElementById("form-title3").style.opacity = "1";
  //   document.getElementById("form-title4").style.opacity = "0";
}

function text4() {
  // document.getElementById("form-title1").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  document.getElementById("form-title4").style.opacity = "1";
}

function blur1() {
  document.getElementById("form-title1").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title4").style.opacity = "0";
}

function blur2() {
  // document.getElementById("form-title1").style.opacity = "0";
  document.getElementById("form-title2").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title4").style.opacity = "0";
}

function blur3() {
  // document.getElementById("form-title1").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title4").style.opacity = "0";
}

function blur4() {
  // document.getElementById("form-title1").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  // document.getElementById("form-title3").style.opacity = "0";
  document.getElementById("form-title4").style.opacity = "0";
}

// TEST TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST

function abcdef() {
  const name = document.querySelector(".name");
  const number = document.querySelector(".number");
  const email = document.querySelector(".email");
  // const c_email = document.querySelector(".c-email");

  if (name.value == "") {
    // name.classList.add("form-group");
    // const input = name.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = name.nextElementSibling;
    // msg.textContent = "name cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    // name.classList.add("error");
    // name.focus();

    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be blank";
    // return false;
  }

  // if (name.value.length < 8) {
  //   // name.classList.add("form-group");
  //   // const input = name.previousElementSibling.nextElementSibling;
  //   // input.style.borderColor = "#ff5959";
  //   // const msg = name.nextElementSibling;
  //   // msg.textContent = "name must be greater than 8 characters";
  //   // msg.style.visibility = "visible";
  //   // msg.classList.add("error");

  //   const parent1 = name.parentElement;
  //   parent1.classList.add("error");
  //   const child1 = parent1.children[3];
  //   child1.classList.add("unhidden");
  //   child1.textContent = "name must br greater than 8 characters";
  //   // return false;
  // }

  if (isNaN(name.value)) {
  } else {
    // name.classList.add("form-group");
    // const input = name.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = name.nextElementSibling;
    // msg.textContent = "name cannot be numeric value";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    // child1.classList.remove("hidden");
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be numeric value";
    // return false;
  }

  if (name.value == "") {
    // name.classList.add("form-group");
    // const input = name.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = name.nextElementSibling;
    // msg.textContent = "name cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    // name.classList.add("error");
    // name.focus();

    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be blank";
    // return false;
  }

  if (name.value != "" && isNaN(name.value)) {
    const parent1 = name.parentElement;
    parent1.classList.remove("error");
    parent1.classList.add("success");
    const child1 = parent1.children[3];
    child1.classList.remove("unhidden");
    child1.classList.add("hidden");
  }

  if (email.value == "") {
    // email.classList.add("form-group");
    // const input = email.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = email.nextElementSibling;
    // msg.textContent = "email cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent3 = email.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Email cannot be blank";
    // return false;
  }

  if (email.value != "") {
    const parent3 = email.parentElement;
    parent3.classList.remove("error");
    parent3.classList.add("success");
    const child3 = parent3.children[3];
    child3.classList.remove("unhidden");
    child3.classList.add("hidden");
  }

  if (email.value == "") {
    // email.classList.add("form-group");
    // const input = email.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = email.nextElementSibling;
    // msg.textContent = "email cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent3 = email.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Email cannot be blank";
    // return false;
  }

  if (number.value == "") {
    // number.classList.add("form-group");
    // const input = number.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = number.nextElementSibling;
    // msg.textContent = "Number cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.remove("hidden");
    child3.classList.add("unhidden");
    child3.textContent = "Number cannot be blank";
    return false;
  }

  if (isNaN(number.value)) {
    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Phone Number cannot be alphabets";
    return false;
  }

  if (number.value.length != 10) {
    // number.classList.add("form-group");
    // const input = number.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = number.nextElementSibling;
    // msg.textContent = "Phone Number must be 10 digits";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Phone Number must be 10 digits";
    return false;
  }

  if (number.value == "") {
    // number.classList.add("form-group");
    // const input = number.previousElementSibling.nextElementSibling;
    // input.style.borderColor = "#ff5959";
    // const msg = number.nextElementSibling;
    // msg.textContent = "Number cannot be blank";
    // msg.style.visibility = "visible";
    // msg.classList.add("error");

    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.remove("hidden");
    child3.classList.add("unhidden");
    child3.textContent = "Number cannot be blank";
    return false;
  }

  if (number.value != "" && number.value.length == 10) {
    const parent3 = number.parentElement;
    parent3.classList.remove("error");
    parent3.classList.add("success");
    const child3 = parent3.children[3];
    child3.classList.remove("unhidden");
    child3.classList.add("hidden");
  }

  // if (email.value.length < 8) {
  //   // email.classList.add("form-group");
  //   // const input = email.previousElementSibling.nextElementSibling;
  //   // input.style.borderColor = "#ff5959";
  //   // const msg = email.nextElementSibling;
  //   // msg.textContent = "email must be 8 character or more";
  //   // msg.style.visibility = "visible";
  //   // msg.classList.add("error");

  //   const parent3 = email.parentElement;
  //   parent3.classList.add("error");
  //   const child3 = parent3.children[3];
  //   child3.classList.add("unhidden");
  //   child3.textContent = "email must be 8 character or more";
  //   return false;
  // }

  // if (c_email.value == "") {
  //   // c_email.classList.add("form-group");
  //   // const input = c_email.previousElementSibling.nextElementSibling;
  //   // input.style.borderColor = "#ff5959";
  //   // const msg = c_email.nextElementSibling;
  //   // msg.textContent = "email cannot be blank";
  //   // msg.style.visibility = "visible";
  //   // msg.classList.add("error");

  //   const parent4 = c_email.parentElement;
  //   parent4.classList.add("error");
  //   const child4 = parent4.children[3];
  //   child4.classList.add("unhidden");
  //   child4.textContent = "email cannot be blank";
  //   return false;
  // }

  // if (email.value != c_email.value) {
  //   // c_email.classList.add("form-group");
  //   // const input = c_email.previousElementSibling.nextElementSibling;
  //   // input.style.borderColor = "#ff5959";
  //   // const msg = c_email.nextElementSibling;
  //   // msg.textContent = "email does not match";
  //   // msg.style.visibility = "visible";
  //   // msg.classList.add("error");

  //   const parent4 = c_email.parentElement;
  //   parent4.classList.add("error");
  //   const child4 = parent4.children[3];
  //   child4.classList.add("unhidden");
  //   child4.textContent = "email does not match";
  //   return false;
  // }

  // if (c_email.value == "") {
  //   // c_email.classList.add("form-group");
  //   // const input = c_email.previousElementSibling.nextElementSibling;
  //   // input.style.borderColor = "#ff5959";
  //   // const msg = c_email.nextElementSibling;
  //   // msg.textContent = "email cannot be blank";
  //   // msg.style.visibility = "visible";
  //   // msg.classList.add("error");

  //   const parent4 = c_email.parentElement;
  //   parent4.classList.add("error");
  //   const child4 = parent4.children[3];
  //   child4.classList.add("unhidden");
  //   child4.textContent = "email cannot be blank";
  //   return false;
  // }

  // if (c_email != "" && c_email == email) {
  //   const parent4 = c_email.parentElement;
  //   parent4.classList.remove("error");
  //   parent4.classList.add("success");
  //   const child4 = parent4.children[3];
  //   child4.classList.remove("unhidden");
  //   child4.classList.add("hidden");
  //   return true;
  // }
}
