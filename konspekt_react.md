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
#61 Footer develop(REACT)

commit -m "fix: modify root index render logic"
commit -m "fix: homeNavbar menu part refactoring"

1) Header develop yakunlaymiz - 
commit -m fix: modify homeNavbar header component
2) Footer develop - 
