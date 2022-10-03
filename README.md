# Ticket Lab

# ภาพรวมของโปรเจค
- 1 การวางโครงสร้างแบบแยกชิ้นส่วน เพื่อแก้ไข ต่อยอด 
- 2 การ Maange state ด้วย Redux
- 3 เน้นไปที่ logic ไม่เน้น UI
- 4 วางโครงสร้างด้วย MVC Pattern
- 5 เป็น Off line mock data, บันทึกข้อมูลลง localstorage

# Page
1 Page concert-list (แสดงรายการคอนเสิร์ตให้เลือก)
- Filter concert

2 Page stage-list (แสดงภาพจำลองเวทีคอนเสิร์ต, ข้อมูลที่นั่งให้เลือก)
- 4 Component แยกกันทำงานแต่ละหน้าที่, แต่ใช้และจัดการ state เดียวกันผ่าน Redux
- Concert Stage Template วางโครงสร้างมาให้สามารถเอาไปต่อยอดสร้าง ConcertStage เพิ่มได้เรื่อยๆ 
- Section(ส่วนที่นั่ง) ใช้ข้อมูลด้วยการอ้าง Data จาก Dictionary ด้วย Section Key  

3 Page final-cost (สรุปค่าใช้จ่าย, เลือก/เพิ่ม/ลบ ข้อมูลบัตรเครดิต)
- จัดการ Form ด้วย Libary Formik
- CRUD credit card data ด้วย local storage


# How to install and run

1. `npm install` or `yarn`
2. `npm run dev` or `yarn dev`


# Hot to build and run

2. `npm run build` or `yarn build`
3. `npm run start` or `yarn start` 
