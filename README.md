# Ticket Lab
เทคนิคที่ใช้ และคำอธิบายแต่ละหน้าแบบสรุป

ทั้งโปรเจคจะวางโครงสร้างด้วย MVC Pattern
View = มีแต่ UI Html/css/scss
Control = Manage stage ด้วย Redux toolkit เรียกใช้ด้วย dispatch signal 
Model = เป็น Off line ใช้ mock data + local storage

# Page
1 Page Show List (แสดงรายการโชว์ให้เลือก)
- ใช้ dispatch signal เพื่อ Filter data ผ่าน Redux store แล้วดึงมาแสดง

2 Page Stage List (แสดงรูปจำลองสถานที่แสดงโชว์, ข้อมูลที่นั่งให้เลือก)
- 3 Component แยกกันทำงาน แต่ Manage stage เดียวกันผ่าน Redux store
- Stage Template + Data Dictionary วางโครงสร้างมาให้สามารถเอาไปต่อยอดสร้างเพิ่มได้เรื่อยๆ 
- Section(ส่วนที่นั่ง) ใช้ข้อมูลด้วยการอ้าง Data จาก Dictionary ด้วย Section Key  

3 Total Cost (สรุปค่าใช้จ่าย, เลือก/เพิ่ม/ลบ ข้อมูลบัตรเครดิต)
- CRUD credit card data ด้วย local storage + redux store

# How to install and run

1. `npm install` or `yarn`
2. `npm run dev` or `yarn dev`


# Hot to build and run

2. `npm run build` or `yarn build`
3. `npm run start` or `yarn start` 
