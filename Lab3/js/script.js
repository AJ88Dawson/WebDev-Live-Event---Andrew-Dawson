"use strict";

const CUSTOMERS = [
  { CustomerID: "ALFKI", CompanyName: "Alfreds Futterkiste", Country: "Germany" },
  { CustomerID: "ANATR", CompanyName: "Ana Trujillo Emparedados", Country: "Mexico" },
  { CustomerID: "AROUT", CompanyName: "Around the Horn", Country: "United Kingdom" },
  { CustomerID: "BONAP", CompanyName: "Bon app'", Country: "France" },
  { CustomerID: "BSBEV", CompanyName: "B's Beverages", Country: "United Kingdom" },
  { CustomerID: "FRANK", CompanyName: "Frankenversand", Country: "Germany" },
  { CustomerID: "VINET", CompanyName: "Vins et alcools Chevalier", Country: "France" },
];

document.addEventListener("DOMContentLoaded", init);

function init() {
  const customersTbody = document.getElementById("customersTbody");
  const customerCounter = document.getElementById("customerCounter");
  const customerSearch = document.getElementById("customerSearch");

  function updateCounter(shown) {
    const total = CUSTOMERS.length;
    customerCounter.textContent = shown + "/ " + total;
  }

  function renderCustomers(customers) {
    customersTbody.innerHTML = "";

    if (customers.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 3;
      td.textContent = "No customers match your search.";
      tr.appendChild(td);
      customersTbody.appendChild(tr);
      return;
    }

    customers.forEach((customer) => {
      const tr = document.createElement("tr");

      const tdId = document.createElement("td");
      tdId.textContent = customer.CustomerID;

      const tdName = document.createElement("td");
      tdName.textContent = customer.CompanyName;

      const tdCountry = document.createElement("td");
      tdCountry.textContent = customer.Country;

      tr.appendChild(tdId);
      tr.appendChild(tdName);
      tr.appendChild(tdCountry);

      customersTbody.appendChild(tr);
    });
  }

  
  renderCustomers(CUSTOMERS);
  updateCounter(CUSTOMERS.length);

  
  customerSearch.addEventListener("input", () => {
    const q = customerSearch.value.trim().toLowerCase();

    let filtered;

    if (q === "") {
      filtered = CUSTOMERS;
    } else {
      filtered = CUSTOMERS.filter((c) => {
        return (
          c.CustomerID.toLowerCase().includes(q) ||
          c.CompanyName.toLowerCase().includes(q) ||
          c.Country.toLowerCase().includes(q)
        );
      });
    }

    renderCustomers(filtered);
    updateCounter(filtered.length);
  });
}
