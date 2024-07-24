function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];
console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า
//O(n²) การทำงานเนื่องจากเป็นลูป 2 ชั้น ทำให้รอบการทำงานจะเพิ่มขึ้นเป็น 2 เท่า ของข้อมูล(ก็คือ n)
