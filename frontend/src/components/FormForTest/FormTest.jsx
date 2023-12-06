import styles from "./FormTest.module.css";

import { useRef } from "react";

function FormTest() {
   const ref1 = useRef();
   const ref2 = useRef();
   const ref3 = useRef();
   const ref4 = useRef();
   const ref5 = useRef();
   const ref6 = useRef();
   const ref7 = useRef();

   const putDate = (event) => {
      const date = {
         name: ref1.current.value,
         description_product: ref2.current.value,
         characteristic_product: ref3.current.value,
         price: ref4.current.value,
         category: ref5.current.value,
         seller: ref6.current.value,
         number: ref7.current.value,
      }

      fetch("http://localhost:8080/create/product", {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      }).then(response => {
         // Перевіряємо, чи отримали успішну відповідь (HTTP-статус 200-299)
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }
         // Розпаковуємо JSON з відповіді
         return response.json();
      }).then(data => {
         // Обробляємо отримані дані
         console.log('Response data:', data);
      }).catch(error => {
         // Обробляємо помилки
         console.error('Error:', error);
      });
      // event.preventDefault();
   }

   return (
      <form className={styles.form_test}>
         <label>name                   <input type="text" name="name" ref={ref1} /></label>
         <label>description_product    <input type="text" name="description_product" ref={ref2} /></label>
         <label>characteristic_product <input type="text" name="characteristic_product" ref={ref3} /></label>
         <label>price                  <input type="text" name="price" ref={ref4} /></label>
         <label>category               <input type="text" name="category" ref={ref5} /></label>
         <label>seller                 <input type="text" name="seller" ref={ref6} /></label>
         <label>number                 <input type="text" name="number" ref={ref7} /></label>
         <input type="submit" onClick={putDate} />
      </form>
   )
}

export default FormTest;