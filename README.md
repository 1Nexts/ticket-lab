# Ticket Lab
เทคนิคที่ใช้ และคำอธิบายแต่ละหน้าแบบสรุป

ทั้งโปรเจคจะวางโครงสร้างด้วย MVC Pattern
- View = มีแต่ UI Html/css/scss + Bootstrap 5
- Control = Manage stage ด้วย Redux toolkit เรียกใช้ด้วย dispatch signal 
- Model = เป็น Offline mock data + local storage

# Page
1 Page Concert List (แสดงรายการคอนเสิร์ตให้เลือก)
- Prerendering SSR

2 Page Stage List (แสดงภาพจำลองเวทีคอนเสิร์ต, ข้อมูลที่นั่งให้เลือก)
- 3 Component แยกกันทำงานคนละหน้าที่ แต่ Manage stage เดียวกันผ่าน Redux store
- Concert Stage Template + Data Dictionary วางโครงสร้างมาให้สามารถเอาไปต่อยอดสร้าง ConcertStage เพิ่มได้เรื่อยๆ 
- Section(ส่วนที่นั่ง) ใช้ข้อมูลด้วยการอ้าง Data จาก Dictionary ด้วย Section Key  

3 Total Cost (สรุปค่าใช้จ่าย, เลือก/เพิ่ม/ลบ ข้อมูลบัตรเครดิต)
- CRUD credit card data ด้วย local storage + redux store

# How to install and run

1. `npm install` or `yarn`
2. `npm run dev` or `yarn dev`


# Hot to build and run

2. `npm run build` or `yarn build`
3. `npm run start` or `yarn start` 
