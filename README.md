# Ticket Lab

# ภาพรวมของโปรเจค
- 1 การวางโครงสร้างแบบแยกชิ้นส่วน อิสระต่อกัน เพื่อแก้ไข, ถอดออก, เปลี่ยนใหม่
- 2 การ Manage stage แบบ Advance Redux Toolkit
- 3 เป็น Offline mock data แต่มีการแบ่ง Layer การเรียกหลายระดับ
(onClick--> dispatch/signal redux --> call service --> call next api)

# How to install and run

1. `npm install` or `yarn`
2. `npm run dev` or `yarn dev`

# Hot to build and run

2. `npm run build` or `yarn build`
3. `npm run start` or `yarn start` 


# Page

1 Page concert-list (แสดงรายการคอนเสิร์ตให้เลือก)
<img width="1285" alt="page-1" src="https://user-images.githubusercontent.com/43952906/194570884-3cc691b9-c22b-4252-86d7-b3c69a4447ec.png">


2 Page stage-list (แสดงภาพจำลองเวทีคอนเสิร์ต, ข้อมูลที่นั่งให้เลือก)
- 4 Component แยกกันทำงานแต่ละหน้าที่, แต่ใช้และจัดการ state เดียวกันผ่าน Redux
- Concert Stage Template วางโครงสร้างมาให้สามารถเอาไปต่อยอดสร้าง ConcertStage เพิ่มได้เรื่อยๆ 
- Section(ส่วนที่นั่ง) ใช้ข้อมูลด้วยการอ้าง Data จาก Dictionary ด้วย Section Key  
<img width="1322" alt="page-2" src="https://user-images.githubusercontent.com/43952906/194570896-edf10df6-1d51-4876-8298-d460305eb38b.png">


3 Page final-cost (สรุปค่าใช้จ่าย, เลือก/เพิ่ม/ลบ ข้อมูลบัตรเครดิต)
- จัดการ Form ด้วย Libary Formik
- CRUD credit card data ด้วย Redux + Service mock off line
<img width="1078" alt="page-3" src="https://user-images.githubusercontent.com/43952906/194570901-9e7721db-f3f5-4fcd-9d1b-bb9d69c09936.png">
