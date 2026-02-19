Library () -- faqatgina bitta massalani hal qilolasiz.(qo'shimcha boshqa narsalarni o'rnatish kerak: rooter...)
Framework -- hamma masalani hal qiloladi (o'zini ichida hamma kerak narsalar bor).
Redux + Router + сборку → получается почти framework.

REACT = REAL DOM + Virtual DOM (ikkalasini bog'lovchi)
REAL DOM -- ko'rinib turgan browser page.
Virtual DOM -- REAL DOM'ni virtual ko'rinishi(kodi).

Qizil Ferrarini kapotini qoraga o'zgartmoqchi bo'lsak REAL DOM butunlay mashinani buzib boshidan quradi a VIRTUAL DOM esa qora rangli FERRARIni eskizini chizib hozirgi butunlay qizil FERRARI bilan solishtirib faqat farqli qilgan joyini=kapotini o'zgartadi. 

--(minusi) REACT - birinchi marta reactni browserda ochganda sekinroq ishlaydi (data'ni browserni кэшга саклаб олади). Кейинги сафар тез ишлайди.

npm - BACKENDda ishlatadi.

yarn - FRONTENDda ishlatadi. npm'ga qaraganda engilroq va tez ishlaydi. FEda o'gir fayllar ko'pligi uchun(video, html)

REACT - JS library for building UI(users interfaces):
1) Component-Based -  (bironta mantiqni gruppasi(ovqatlarni cards, statistics ...)). <Statistics/>... - component

2) Declarative - Design View (componentlarni clean qiladi va delelopni tezlashtiradi)

//GLOBAL INTEGRATIONS (butun loyihada ishlatadigan narsalar)=> REDUX MUI (malumotlar storage)

    <Provider store={store}>
      <ThemeProvider theme={theme}> -- ичида child бор шуни учун очиб хам ёпябмиз
        <CssBaseline />   -- Хамма браузерда бир хил ишлашини таминлайди
        <App />           -- ичида child йук шуни учун очиб ёпмаябди          
      </ThemeProvider> 
    </Provider>



package.json: eslintConfig -- errorlarni ushlab oladi
==============================================================================================================================================
#57 Burak React project install
1)

2)

3)

4)
==============================================================================================================================================
#58 Material UI va uning integratsiyasi

1) Material UI CSS framework tanlovi - REACTni eng TOP(zo'r) CSS framework.

2) Material UIni loyihamizga standart integratsiyasini amalga oshiramiz - MUI githubda yozgan mantiqlarni qo'shdik(theme.ts...)

3) Material UI customized integratsiyasini amalga oshiramiz - bizga customized(Bekzod aka ishlatadigan) integratsiya moqul shuni uchun tepadagi standartni o'chiramiz.

4) Loyihamizga container standartlarini joriy etamiz - maxWidth:"1300px"

==============================================================================================================================================
#59 REACT rooter DOM orqali client routing tizmmi

1) React Router DOM orqali routing tizmini o'rnatamiz - 
2) FE screen componentlarini hosil qilamiz - 
==============================================================================================================================================
#60 HEADER & NAVBARlarni develop qilamiz

1) HEADER & FOOTERlarni ahamiyati - loyihamizda 2 hil Navbar bo'ladi HomePage'da va OtherPage. "react-router-dom"ni *useLocation()* methodini ishlatib hozirgi page'ni location bilib shunqa qarab kerakli Navbar chiqardik. A Footer esa hamma page'da bir hil.

*commit -m "fix: organize header and footer components"
   
2) FIGMAga qarab publishing rejalashtirish - projectda ishlatadigan *public* folderga kerakli filelarni upload qildik. index.html'da icon & title'ni change qildik.

*commit -m "feat: upload client materials"
   
1) HEADER & NAVBAR publishing - HomePage'da chiqadigan Navbarni develop qildik. Yani tepadagi NavLink'larni va Login button. User login bo'lgan holatda va hali login bo'lmagan holatda chiqadigan NavLink'larni ajratdik *authMember = true* bo'lsa va *null* bo'lsa. 
MUI *container*larga default holatda ikki tomondan padding beradi. Agar kerak bo'lmasa customize qilish mumkin.

*commit -m "feat: develop header and footer part one"
==============================================================================================================================================
COMPONENTS: SCREEN(header & footer oras) | SECTIONAL | COMMON/REUSABLE (header&footer)

CONTAINERni DIVga o'rashni sababi background to'liq page'ga bo'lishi va CSS classni himoyalay.

CONTAINER - 1300px
STACK - display: flex; (row; column)
BOX - div (oxirgi mantiq, ichida hechnarsa yo'q)

#61 Footer develop(REACT)

commit -m "fix: modify root index render logic"
commit -m "fix: homeNavbar menu part refactoring"

1) Header develop yakunlaymiz - Refactoring qildik = .tsx'ga style orqali yozilgan mantiqni *css*ga ko'chirdik. O'zi odatda shunaqa tartibda yoziladi ekan. Va Headerni pastgi qismi Sign Up button bilan Logo'ni joylashtirdik. Pastgi qismi faqat HomePage'da bo'ladi, OtherPage'larda esa faqat tepa qismi. 
commit -m fix: modify homeNavbar header component

2) Footer develop - Footer ham Reusable=Common component hisoblanadi. Va biz u Componentni *styled-components* orqali customized component qurdik. Yani CSS-in-JS va u componentni xoxlagan joyimizda chaqirib ishlataveramiz. Va oxirida tayyor yozilgan Basketni ham qo'shdik.
   
commit -m "feat: integration footer and basket source"
==============================================================================================================================================
#62 HomePage - develop(REACT)

1) HomePage Screen Componentiga tegishli bo'lgan Sectional Componentlarni hosil qilamiz - HomePage screen componentni ichiga kiradigan sectional componentlarni hosil qildik. Ichida *Advertisement* & *Events* faqat *div*ni ichiga joyladik, a qolganlarini esa ham *div* ham *container*ga joyladik.
   
*commit -m "fix: organize homepage related sectional components"

1) Statistics Sectional Component develop - *stack*lar orqali har bitta blockni yaratib oralariga tayyor yasalgan *Divider*ni qo'shdik.

*commit -m "fix: modify statistics sectional component"
   
1) PopularDishes Sectional Component develop - MUIni o'zidan emas MUI Joy package'ni o'rnatib ichidan tayyor 2ta cardni olib o'zimizga customize card yaratdik. Mantiq bitta card uchun yozilgan. Shuni uchun tepada yozib qoldirdik Array'ni ichiga taomlarni malumotlarini yozib shu Array'ni Map qildik.

*commit -m "feat: develop popular dishes sectional component"
==============================================================================================================================================
#63 HomePage - develop davomi (REACT)

1) Target Play - bizga oxirgi natija ko'rsatiladi a publishing jarayonini esa o'zimiz qilamiz.
   
2) New Dishes component - NewDishes sectional componentni ham hozircha Arrayni ichida taomlar haqida malumot qoldirib hard coding qildik. Keyinchalik DBga ulaymiz ekan.

*commit -m "feat: develop newDishes sectional component"
*commit -m "fix: modify popular and new dishes components(length=0)"
    
1) Advertisement component - videoni shunchaki *div* ichiga joylashtirdik, *container*siz. Yana width:100% qildik, ekran qancha katta bo'lsa moslashib ketaveradi.

*commit -m "feat: develop advertisement sectional component"
   
1) Active Users component - 
   
2) HomePage Events component - 

