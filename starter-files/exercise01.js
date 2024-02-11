function Employee(nameArg, companyNameArg, jobPositionArg, salaryArg) {
    this.name = nameArg;
    this.companyName = companyNameArg;
    this.jobPosition = jobPositionArg;
    this.salary = salaryArg; 
  }
  
  let employee1 = new Employee("Ana", "Brainster", "employee", 1000);
  let employee2 = new Employee("Jana", "ReDI", "director", 2000);
  let employee3 = new Employee("Dijana", "BMW", "boss", 3000);
  
  let employeeArray = [employee1, employee2, employee3];
  
  let ul = document.createElement("ul");

  employeeArray.forEach((employee) => {
    let liItem = document.createElement("li");
    liItem.innerHTML = `<strong>Name:</strong> ${employee.name}<br>
      <strong>Company:</strong> ${employee.companyName}<br>
      <strong>Job Position:</strong> ${employee.jobPosition}<br>
      <strong>Salary:</strong> ${employee.salary}<br><br>`;
    ul.appendChild(liItem);
  });
  
  document.body.appendChild(ul);
