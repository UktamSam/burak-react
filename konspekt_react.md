Library () -- faqatgina bitta massalani hal qilolasiz.(qo'shimcha boshqa narsalarni o'rnatish kerak: rooter...)
Framework -- hamma masalani hal qiloladi (o'zini ichida hamma kerak narsalar bor).
Redux + Router + сборку → получается почти framework.

REACT = REAL DOM + Virtual DOM (ikkalasini bog'lovchi)
REAL DOM -- ko'rinib turgan browser page.
Virtual DOM -- REAL DOM'ni virtual ko'rinishi(kodi).

REACT - (Component-Based) (Declarative Single) (Page Application)

CssBaseline - browserlardan CSSni yo'qotib beradi, MIUni yuqoriroq qo'yadi.

Qizil Ferrarini kapotini qoraga o'zgartmoqchi bo'lsak REAL DOM butunlay mashinani buzib boshidan quradi a VIRTUAL DOM esa qora rangli FERRARIni eskizini chizib hozirgi butunlay qizil FERRARI bilan solishtirib faqat farqli qilgan joyini=kapotini o'zgartadi. 

--(minusi) REACT - birinchi marta reactni browserda ochganda sekinroq ishlaydi (data'ni browserni кэшга саклаб олади). Кейинги сафар тез ишлайди.

npm - BACKENDda ishlatadi.

yarn - FRONTENDda ishlatadi. npm'ga qaraganda engilroq va tez ishlaydi. FEda o'gir fayllar ko'pligi uchun(video, html)

REACT - JS library for building UI(users interfaces):
1) Component-Based -  (bironta mantiqni gruppasi(ovqatlarni cards, statistics ...)). <Statistics/>... - component

2) Declarative - Design View (componentlarni clean qiladi va delelopni tezlashtiradi)

//GLOBAL INTEGRATIONS (butun loyihada ishlatadigan narsalar)=> REDUX MUI (malumotlar storage)

    <Provider store={store}> -- Redux
      <ThemeProvider theme={theme}> -- ичида child бор шуни учун очиб хам ёпябмиз. -- MUI provider
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

CSS-in-JS:

REACT - library

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
    
3) Advertisement component - videoni shunchaki *div* ichiga joylashtirdik, *container*siz. Yana width:100% qildik, ekran qancha katta bo'lsa moslashib ketaveradi.

*commit -m "feat: develop advertisement sectional component"
   
4) Active Users component - newDishes sectional component bilan o'xshash joyligi ko'pligi uchun shundan olib qildim. Kerak emas joylarini o'chirib.
commit -m "feat: develop activeUsers sectioanl component"

5) HomePage Events component - Events sectional component MIUni SWIPER orqali hosil qilingan.
==============================================================================================================================================
#64 ProductsPage - publishing (REACT)

1) ProductsPage Screen Componentida nested routing tizmini hosil qilamiz - bizda avval App.tsx ichida hamma page'larni routingi hosil qilingan edi. Endi esa alohoda ProductsPage'ni ichida yana routing hosil qilamiz - nested routing. 
Nested routing - routing'ni ichida yangi router'larni hosil qilish.

2) ProductsPage Screen Componentida Sectional Componentlarni qurib olamiz - sectional componentlarni Stacklar orqali hosil qilganmiz. Umuman page'ga background berish kerak bo'lgan "Our Family Brands" bilan Google Map'ni div'ga o'rab Container'ga soldim.

3) Products list sectional Componentini publishing qilamiz - productlarni ro'yhatini card'lar orqali hosil qildim. Va category'ga bo'lish tizmini ham tepada button orqali qildim. Pastda esa yana Pagination qo'shdim.
==============================================================================================================================================
#65 ProductsPage - screen component publishing davomi (REACT)

1) ChosenProduct Sectional Component puvlishing - bu mantiqni esa tayyor holatida qo'ydim.
==============================================================================================================================================
#66 OrdersPage - orderlar sahifasini publish qilamiz (REACT)

1) MUIning Tap Panel Component - очилиб турган OrderPageни яна сахифа(панель)ларга булиш. Мисол учун Paused / Processed / Finished order. Va har bitta Tab ichida TapPanel=content bo'ladi.
   
2) OrdersPage Screen Componenti va uning Sectional Componentlarini publishing - Target Play orqali mantiqlarni yozdik.
==============================================================================================================================================
#68 UserPage va HelpPage Screen Componentlarini publish qilamiz (REACT)

1) Tayyor file'larni yukladik, bizga yangi bo'lgan narsa bu *Accordion*, savol ko'rinib turadi va savolga bosilsa javobi ham ko'rinadi.

===================================================================================================================================================
#78 Hooks - useState va useEffect React Hooks

1) React Class & Functional Components - React 16.8dan keyin mantiqi kopligi sabab Class'lar ishlatilmaydi, hozir faqat Functional Component ishlatiladi. React Classni farqi - React.Componentdan inheritance oladi va result'da View render qilib yuboradi.
   
2) Lifecycle methods -  Mount(component render bo'lganda) | Update (yangilanganda) | Unmount (o'chirilganda=component yopilganda). Bironta mantiqni tochno biron vaqtda ishga tushishi uchun ishlatiladi, ko'pincha DBdan data olishda.
   
3) useState hook - class'ni ishlatmaslik uchun sunniy State yaratilgan. Class'da biz hamma state'larni property qismida berib ketardik. useState esa shunchaki o'zini ichida saqloladi render(page refresh) bo'lgan taqdirda ham.
   
4) useEffect hook - bu esa Lifecycle methods'ni o'rniga yaratilgan. 
[] useEffect Array Dependency. Har o'zgarganda mantiq boshidan ishlaydi. 
Mantiqda eng ko'p DidMount | DidUpdate ishlatiladi


HOOK  -- qarmoq, крючок.
useEffect - lifecycle qurib beradi.
useState - sunniy state qurib beradi.
===================================================================================================================================================
#79 Redux - Loyihamiz storage architecturasi

1) Loyihamiz qanday tarzda run bo'lyotgani - TS baribir JSga uguriladi run bo'lganda.
   
2) REDUX Architecture - Redux ham MVC kabi Pattern lekin FEda ko'proq ishlatilad. Data Flow tomondan MVC -- bidirectional = bir aniq malumotlar oqimiga ega emas (bir biridan mustaqil bo'lgan Controller mavjud). Redux -- unidirectional data flow, bir aniq malumotlar oqimi bor.
UI (user bironta input/click qiladi) → dispatch(action) (nima bo'lganini aytadi) → reducer (Функция получает state и action и создаёт новый state) → store (Yangi state saqlaydi) → subscribe (UIga yangi state'ni oboradi) → UI update
   
3) Redux Toolkit - oddiy Redux'da ko'p mantiq yozishimiz kerak(action types, action creators, reducers, store configuration). A Redux Toolkit shu mantiqlarni Automatic qiladi.

boilerplate - mantiq uchun emas, kodni ishlashi uchun kod yozish.
===================================================================================================================================================
#80 HomePage - Redux Slice va Selectorlarini tashkil etamiz*

1) HomePage Screen Componentiga type integration - Redux faqat BITTA STORE'dan iborat. Yani uni hamma componentlarda chaqirib ishlatishimiz mumkin.
    
   Type Integartion: Screen Component Based | Target Oriented 
_id: string type'da yuborish kerak. BE'ga o'xshab ObjectId.

2) HomePage Screen Componentiga Redux storage configuratsiya - 2ta file yaratamiz Slice (DBdan malumotni olib Reducer orqali Store'ga joylashtiradi) Selector (Store'da yangi joylangan malumotni UI'ga berish)
   
  REDUX STRUCTURE:  1) SLICE (dispatch => Action => Reducers => Store)
                    1) SELECTOR (Store => subscribe)
3) Redux logger middleware - Logging Standart (BE -- Morgen)
4) HomePage Redux Architecture test - 

initial state - бошлангич холат
Обычный REACT: Component → useState → UI обновляется
REACT via REDUX: UI → dispatch(action) → reducer → store → selector → UI

Полный круг в Redux:

1. Компонент (UI) решает, что нужны данные
Ваш компонент HomePage загружается на экране. Срабатывает хук useEffect, внутри которого у вас есть массив с едой (result). Компонент понимает: "Мне нужно сохранить эти блюда в глобальное хранилище".

TypeScript
// Файл: screens/homePage/index.tsx
useEffect(() => {
    const result = [ /* Шаурма, Кебаб, Карам Шорва */ ];
    setPopularDishes(result); // <-- Начинаем процесс!
}, []);

1. Dispatch (Курьер)
Функция setPopularDishes(result) не идет в базу напрямую. Она вызывает dispatch, который работает как курьер. В вашем коде вы обернули это в удобную функцию actionDispatch.

TypeScript
// Файл: screens/homePage/index.tsx
const actionDispatch = (dispatch: Dispatch) => ({
  // dispatch берет экшен setPopularDishes и данные (data) и несет их в Redux
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)), 
});

3. Reducer (Обработчик) принимает посылку
Курьер (dispatch) приносит данные в homePageSlice. Там Reducer смотрит на название действия (setPopularDishes) и выполняет инструкцию: берет присланные данные (action.payload — это ваш массив result) и записывает их в состояние.

TypeScript
// Файл: screens/homePage/slice.ts
reducers: {
    setPopularDishes: (state, action) => {
        // state.popularDishes до этого был пуст: []
        // теперь мы кладем туда наш массив
        state.popularDishes = action.payload; 
    },
}

4. Store (Хранилище) обновляется
Теперь в вашем главном хранилище store, в разделе homePage, лежат три популярных блюда.

TypeScript
// Файл: store.ts
export const store = configureStore({
  reducer: {
    homePage: HomePageReducer, // <-- Данные теперь живут здесь
  },
});

5. Selector (Получатель) достает новые данные
Чтобы безопасно забрать данные из хранилища, у вас написан селектор. Он знает точный путь к нужной полке: state ➔ homePage ➔ popularDishes.

TypeScript
// Файл: screens/homePage/selector.ts
export const retrievePopularDishes = createSelector(
    selectHomePage,
    (HomePage) => HomePage.popularDishes // <-- Берем только массив популярных блюд
);

6. Компонент (UI) получает данные и перерисовывается
Хук useSelector в вашем компоненте HomePage постоянно "слушает" селектор. Как только на шаге 4 данные в Store обновились, useSelector мгновенно это замечает, вытягивает новый массив и кладет его в переменную popularDishes.

TypeScript
// Файл: screens/homePage/index.tsx
// Эта строчка автоматически получит массив с едой, как только он попадет в Redux
const {popularDishes} = useSelector(popularDishesRetriever);
Теперь у вас в HomePage есть готовая переменная popularDishes с актуальными данными из Redux, и вы можете передать её в <PopularDishes />, чтобы отрисовать карточки на экране.

===================================================================================================================================================
#81 HomePage - Backend olingan malumotlar orqali develop yakunlaymiz*

1) FE kerak environmental variable & configuration file - .env file hosil qilib uni ichida biz ishlatadigan URLni bitta uzun const'ga tengladik. config.ts'da esa ana shu uzun *REACT_APP_API_URL*ni qisqa *serverApi* const'ga tengladik va shu config'da yana biz ishlatadigan ERRORlarni hosil qilib qo'ydik.

2) BEdan malumot olish uchun API service - 
   
3) API Servicelar orqali olingan malumotlar asosida HomePage Screen Component develop - 
===================================================================================================================================================
#82 RestaurantPage - Redux Slice va Selectorlarni tashkil qilamiz

1) ProductsPage Type integration - 
2) ProductsPage Slice & Selector develop - 

===================================================================================================================================================
#83 RestaurantPage - Backend olingan malumotlar orqali develop yakunlaymiz

1) Products Componentida Service API asosida develop - 
2) User interaction uchun Handlerlar - 
3) productsSearch object develop & data fetch - 
4) ChosenProducts Server API asosida develop

{ withCredentials: true } - “cookies request bilan birga chiqadi(BE FEga cookies joylaydi)”
"withCredentials" ishlashi uchun BE & FE bitta domenda va *https* protokolda bo'lish kerak. 
===================================================================================================================================================
#84 Basket - Savatimizni buziness mantiqini develop qilamiz

1) Basketga yangi product qo'shish mantiq - 
2) Basket mantiqi hooklar orqali - 
3) Basket bilan bog'liq boshqa mantiqlar - 
===================================================================================================================================================
#85 Token Authentication develop qilamiz
1) Authentication modal Component publishing - 
2) Authentication develop - 

===================================================================================================================================================
#86 Token Authentication davom ettiramiz
1) Global variablelar uchun customized hook - 
2) Hooklarga context integration - 
3) User authenticated bo'lganda hook ishlashi - 
4) Logout develop - 