class Email {
    constructor(fromArg, toArg, subjectArg, messageArg) {
      this.from = fromArg;
      this.to = toArg;
      this.subject = subjectArg;
      this.message = messageArg;
    }
  
    displayTheMessage() {
      alert(`From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`);
    }
  }
  
  let fromValue = prompt('From:');
  let toValue = prompt('To:');
  let subjectValue = prompt('Subject:');
  let messageValue = prompt('Message:');
  
  let email = new Email(fromValue, toValue, subjectValue, messageValue);
  
  email.displayTheMessage();
  
  document.body.innerHTML += `
    <div class="bg-primary fs-2 fw-semibold ps-4 text-white">New Message</div>
    <form>
    <div class="ps-4 pe-4 mt-3">
      <label for="exampleInput1" class="form-label">From:</label>
      <input type="email" class="form-control" id="exampleInput1" aria-describedby="emailHelp" value="${email.from}">
    </div>
    <div class="ps-4 pe-4 mt-3">
        <label for="exampleInput2" class="form-label">To:</label>
        <input type="email" class="form-control" id="exampleInput2" aria-describedby="emailHelp" value="${email.to}">
    </div>
    <div class="ps-4 pe-4 mt-3 ">
        <label for="exampleInput3" class="form-label">Subject:</label>
        <input type="text" class="form-control" id="exampleInput3" value="${email.subject}">
    </div>
    <div class=" ps-4 pe-4 mt-3 ">
        <label for="floatingTextarea">Message:</label>
        <textarea class="form-control"  id="floatingTextarea" style="height: 300px">${email.message}</textarea>
      </div>
    <button type="submit" class="btn btn-primary ms-4 mt-3 ">Send</button>
  </form>
   `;

  

  