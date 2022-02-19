function delivery () {
    let fieldName = null;
    let fieldPhone = null;
    let fieldEmail = null;
    let filedDelivaryMethods = null;
    let fieldDateCurrent = null;
    let fieldDistA = null;
    let fieldDistB = null;
    let fieldDateDeparture = null;
    let fieldDateDelivery = null;
    let dataArray = [fieldName, fieldPhone, fieldEmail, filedDelivaryMethods, fieldDateCurrent, fieldDistA, fieldDistB, fieldDateDeparture, fieldDateDelivery]


    let distances = [
        {
            a: 'Минск',
            b: 'Гомель',
            d: 313
        },
        {
            a: 'Минск',
            b: 'Брест',
            d: 548
        },
        {
            a: 'Минск',
            b: 'Могилев',
            d: 198
        },
        {
            a: 'Минск',
            b: 'Витебск',
            d: 290
        },
        {
            a: 'Минск',
            b: 'Гродно',
            d: 278
        },


        {
            a: 'Гомель',
            b: 'Минск',
            d: 313
        },
        {
            a: 'Гомель',
            b: 'Брест',
            d: 530
        },
        {
            a: 'Гомель',
            b: 'Могилев',
            d: 183
        },
        {
            a: 'Гомель',
            b: 'Витебск',
            d: 337
        },
        {
            a: 'Гомель',
            b: 'Гродно',
            d: 595
        },


        {
            a: 'Могилев',
            b: 'Минск',
            d: 198
        },
        {
            a: 'Могилев',
            b: 'Брест',
            d: 534
        },
        {
            a: 'Могилев',
            b: 'Гомель',
            d: 183
        },
        {
            a: 'Могилев',
            b: 'Витебск',
            d: 161
        },
        {
            a: 'Могилев',
            b: 'Гродно',
            d: 481
        },



        {
            a: 'Витебск',
            b: 'Минск',
            d: 290
        },
        {
            a: 'Витебск',
            b: 'Брест',
            d: 630
        },
        {
            a: 'Витебск',
            b: 'Гомель',
            d: 337
        },
        {
            a: 'Витебск',
            b: 'Могилев',
            d: 161
        },
        {
            a: 'Витебск',
            b: 'Гродно',
            d: 569
        },


        {
            a: 'Гродно',
            b: 'Минск',
            d: 278
        },
        {
            a: 'Гродно',
            b: 'Брест',
            d: 238
        },
        {
            a: 'Гродно',
            b: 'Гомель',
            d: 595
        },
        {
            a: 'Гродно',
            b: 'Могилев',
            d: 481
        },
        {
            a: 'Гродно',
            b: 'Витебск',
            d: 569
        },


        {
            a: 'Брест',
            b: 'Минск',
            d: 548
        },
        {
            a: 'Брест',
            b: 'Витебск',
            d: 630
        },
        {
            a: 'Брест',
            b: 'Гомель',
            d: 530
        },
        {
            a: 'Брест',
            b: 'Могилев',
            d: 534
        },
        {
            a: 'Брест',
            b: 'Гродно',
            d: 238
        }

    ]


    let prices = [
        {
            method: 'самолет',
            price: 300
        },
        {
            method: 'такси',
            price: 200
        },
        {
            method: 'частный водитель',
            price: 150
        },
        {
            method: 'курьер',
            price: 100
        },

    ]

    // function Distance (a, b, d) {
    //     this.a = a;
    //     this.b = b;

    // }

function showForm() {
    let doc = document;

    let deliveryMethods = ['самолет', 'такси', 'частный водитель', 'курьер'];
    let destinations = ['Минск', 'Гомель', 'Брест', 'Могилев', 'Витебск', 'Гродно'];

    
    let forma = doc.createElement('form');
    forma.setAttribute('class', 'form');

    let fio = doc.createElement('input');
    fio.setAttribute('type', 'text');
    fio.setAttribute('class', 'input');
    fio.setAttribute('placeholder', 'ФИО');
    fio.required = 'true';   //обязательно для заполнения

    let phone = doc.createElement('input');
    phone.setAttribute('type', 'tel');
    phone.setAttribute('class', 'input');
    phone.setAttribute('placeholder', 'Телефон');
    phone.required = 'true';


    let email = doc.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('class', 'input');
    email.setAttribute('placeholder', 'Почта');
    email.required = 'true';

    //выбор транспорта
    let typeDelivery = doc.createElement('select');
    typeDelivery.setAttribute('class', 'input');
    typeDelivery.setAttribute('name', 'typeDelivery');
    typeDelivery.required = 'true';

    //Разобраться как работает
    let typeDeliveryOptions = createSelects(deliveryMethods);
    typeDeliveryOptions.map(option => {
        typeDelivery.append(option)
    })

    let today = doc.createElement('input');
    today.setAttribute('type', 'datetime');
    today.setAttribute('class', 'input');
    let todayDay = new Date();
    today.value = `${todayDay.getFullYear()} / ${todayDay.getMonth() +1} / ${todayDay.getDate()}, ${todayDay.getHours()} : ${todayDay.getMinutes()}`

    //Пункт отправления
    let pointDeparture = doc.createElement('select');
    pointDeparture.setAttribute('class', 'input');
    pointDeparture.required = 'true';

   // pointDeparture.type = 'text';

    //Пункт назначения
    let pointArrival = doc.createElement('select');
    pointArrival.setAttribute('class', 'input');
    pointArrival.required = 'true';



    //Разобраться как работает select
    let optionArrival = createSelects(destinations);
    let optionDeparture = createSelects(destinations);
    optionDeparture.map(option => {
        pointDeparture.append(option);
    })

    optionArrival.map(option => {
        pointArrival.append(option);
    })

    //Дата отправления
    let datePointDeparture = doc.createElement('input');
    datePointDeparture.setAttribute('type', 'date');
    datePointDeparture.setAttribute('class', 'input');
    datePointDeparture.required = 'true';

    //Дата доставки
    let datePointArrival = doc.createElement('input');
    datePointArrival.setAttribute('type', 'date');
    datePointArrival.setAttribute('class', 'input');
    datePointArrival.required = 'true';

    let button = doc.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('class', 'but');
    button.innerText = 'Рассчитать стоимость';
    forma.addEventListener('submit', (e) => {
        formaHandler(e, forma, pointDeparture, pointArrival)
    })


    forma.append(fio, phone, email, typeDelivery, today, pointDeparture, pointArrival, datePointDeparture, datePointArrival, button);

    document.body.appendChild(forma);


    function createSelects(data) {
        return data.map(elem => {
            let option = doc.createElement('option');
            option.setAttribute('value', elem);
            option.innerText = elem;
            return option
        })
    }

    function formaHandler(e, conteiner, dep, dest) {
        e.preventDefault();
        if (dep.value == dest.value) return
        [...conteiner.children].map((elem, i ) => {
            if(elem.tagName != 'BUTTON') dataArray[i] = elem.value;
        });
       [fieldName, fieldPhone, fieldEmail, filedDelivaryMethods, fieldDateCurrent, fieldDistA, fieldDistB, fieldDateDeparture, fieldDateDelivery] = dataArray;
        console.log(dataArray);
        let price = calculation()
        showCalculation(price)
    }

    function calculation() {
        let distA = fieldDistA,
            distB = fieldDistB,
            method = filedDelivaryMethods;
        let dist = distances.find(elem => {
            if ((elem.a == distA || elem.b == distA ) && (elem.a == distB || elem.b == distB)) {
                return elem;
            }
        })
        let coof = prices.find(elem => elem.method == method ? elem : null)
        return dist.d * coof.price
    }
    
    function showCalculation(price) {
        if (doc.body.lastChild.className != 'price') {
            let priceFinaly = doc.createElement('div');
            priceFinaly.setAttribute('class', 'price');
            priceFinaly.innerText = `Дата расчета: ${fieldDateCurrent}, Способ доставки:${filedDelivaryMethods}, Путь доставки: ${fieldDistA}(${fieldDateDeparture}) -> ${fieldDistB}(${fieldDateDelivery}).
            Стоимость доставки ${price} руб.
            Информация о заказчике: ${fieldName}, ${fieldPhone}, ${fieldEmail} `;

            doc.body.append(priceFinaly)  
        } else {
            doc.body.lastChild.innerText = `Стоимость доставки ${price}`;
        }
        
    }
}  //?????
showForm()

}


window.addEventListener('DOMContentLoaded', delivery)

let style = document.createElement('style');
style.innerHTML = `
    body {
        background: rgb(231, 226, 226);  
}

.form {
    margin: 0 auto;
    gap: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 50%; 
    margin-bottom: 40px;
}
 .input {
    width: 100%;
    height: 40px;
    background: rgba(103, 170, 209, 0.315);
    border: 2px solid rgb(8, 46, 68);
}

.but {
    height: 40px;
    font-size: 18px;
} 
.price {
    margin: 0 auto;
    width: 70%;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    background-color: rgba(103, 170, 209, 0.315);
    padding: 20px;
    line-height: 1.5em;
}
`;

document.head.appendChild(style);