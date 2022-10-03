# Ticket Lab

# ภาพรวมของโปรเจค
- 1 การวางโครงสร้างแบบแยกชิ้นส่วน เพื่อแก้ไข ต่อยอด, MVC Design pattern
- 2 การ Manage state ด้วย Redux
- 3 เป็น Offline mock data
- 4 จะเน้นไปที่ logic ไม่ได้ลงรายละเอียด UI(ไม่ได้ใช้ react-bootstrap)

# How to install and run

1. `npm install` or `yarn`
2. `npm run dev` or `yarn dev`

# Hot to build and run

2. `npm run build` or `yarn build`
3. `npm run start` or `yarn start` 


# Page

1 Page concert-list (แสดงรายการคอนเสิร์ตให้เลือก)

<img width="431" alt="1" src="https://user-images.githubusercontent.com/43952906/193608687-749faf95-eb91-4a30-a74e-ba3244b13b43.png">


2 Page stage-list (แสดงภาพจำลองเวทีคอนเสิร์ต, ข้อมูลที่นั่งให้เลือก)
- 4 Component แยกกันทำงานแต่ละหน้าที่, แต่ใช้และจัดการ state เดียวกันผ่าน Redux
- Concert Stage Template วางโครงสร้างมาให้สามารถเอาไปต่อยอดสร้าง ConcertStage เพิ่มได้เรื่อยๆ 
- Section(ส่วนที่นั่ง) ใช้ข้อมูลด้วยการอ้าง Data จาก Dictionary ด้วย Section Key  
- 
<img width="431" alt="2" src="https://user-images.githubusercontent.com/43952906/193608697-0cb50477-a29a-47ec-be2b-b71a3b6d10a3.png">


3 Page final-cost (สรุปค่าใช้จ่าย, เลือก/เพิ่ม/ลบ ข้อมูลบัตรเครดิต)
- จัดการ Form ด้วย Libary Formik
- CRUD credit card data ด้วย Redux + Service mock off line
- 
<img width="430" alt="3" src="https://user-images.githubusercontent.com/43952906/193608709-a437baa9-d0ad-409f-bdb5-322402884f4e.png">
<img width="431" alt="4" src="https://user-images.githubusercontent.com/43952906/193608717-3b6d107d-c454-4d5e-848f-652db786740c.png">
<img width="432" alt="5" src="https://user-images.githubusercontent.com/43952906/193608729-40cf48f5-e9fb-4c67-8340-cb579fa3884f.png">


