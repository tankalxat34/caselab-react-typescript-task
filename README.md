# Большая задача React+TypeScript


## Описание

По этой ссылке лежит небольшое React приложение: https://github.com/kontur-web-courses/typescript/tree/master/react-typescript-task, в котором можно просматривать цены автомобилей.

Для того, чтобы это приложение полностью заработало, нужно выполнить 3 задачи:

1. Починить типизацию компонентов Table и TableItem. Для этого стоит обратить внимание на использование Table в компоненте App.
2. Добавить колонку "Тип ТС". В этой колонке нужно отобразить тип транспортного средства словом.
3. Написать компонент Filter. Для этого можно воспользоваться заготовкой в файле Filter.tsx.

- компонент должен уметь задавать подстроку для названия транспортного средства и давать возможность выбирать конкретный тип ТС
- при любом изменение данных в компоненте Filter нужно вызывать метод `VehicleApi.search` и изменять данные таблицы. Метод `VehicleApi.search` специально сделан синхронно для упрощения
- для выбора типа транспортного можно воспользоваться компонентом `VehicleTypeSelect`

Для выполнения задачи можно пользоваться: https://codesandbox.io/s/vehicle-filter-table-task-51uil?file=/README.md или клонировать репозиторий с первой ссылки.


<details>
<summary>Задача</summary>

## Задача

Перед вами небольшое React приложение, в котором можно просматривать цены автомобилей. Для того, чтобы это приложение
полностью заработало, нужно выполнить 3 задачи:

1. Починить типизацию компонентов Table и TableItem. Для этого стоит обратить внимание на использование Table в компоненте 
App
2. Добавить колонку "Тип ТС". В этой колонке нужно отобразить тип транспортного средства словом.
3. Написать компонент Filter. Для этого можно воспользоваться заготовкой в файле `Filter.tsx`.
  - компонент должен уметь задавать подстроку для названия транспортного средства и давать возможность выбирать конкретный
  тип ТС
  - при любом изменение данных в компоненте Filter нужно вызывать метод `VehicleApi.search` и изменять данные таблицы. 
  Метод `VehicleApi.search` специально сделан синхронно для упрощения
  - для выбора типа транспортного средства можно воспользоваться компонентом `VehicleTypeSelect`
  
## IDE

Для выполнения задания можно склонировать этот репозиторий и выполнять его в любой IDE. Или можно перейти в 
[CodeSandbox](https://codesandbox.io/s/vehicle-filter-table-task-51uil?file=/README.md) и выполнять его в онлайн-IDE.
  
## Запуск
Этот проект создан на основе [CRA](https://create-react-app.dev/docs/getting-started/). Для запуска приложения нужно:
- "подтянуть" зависимости командой `npm install` или `yarn`
- выполнить команду `npm start` или `yarn start` для запуска сервера
- приложение доступно по `http://localhost:3000/`


</details>