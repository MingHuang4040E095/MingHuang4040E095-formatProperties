# formatProperties
<!-- ![npm](https://img.shields.io/npm/dt/@syuminghuang/format-properties)    -->
🙂format naming convention
轉換命名規則

## 😎使用方法 (usage)
```
    npm install --save @syuminghuang/format-properties
```
###### 轉小駝峰  (to lowerCamel)
```javascript
    // step1 import js
    import FormatProperties from '@syuminghuang/format-properties'
    // or
    const FormatProperties  = require("@syuminghuang/format-properties")

    // step2 set data & naming convention (設定資料和要轉換命名規則類型)
    // propertyName is snakeCase
    const data = {
        // snake_case(蛇型)
        user_id: 1,
        user_name: 'MH',
        user_birthday: '2023/04/02',
        user_tel: ['0900-000-000', '0911-111-111'],

        // UpperCamel(大駝峰)
        ProductName: 'name',
        ProductPrice: 2000,
        ProductQuantity: 99,
    }
    /**
     * FormatProperties(data, type)
     * @param {[Object]} data 要轉換的資料
     * @param {[String]} type 類型 lowerCamel(小駝峰)、UpperCamel(大駝峰)、snake_case(蛇型)
     * @return {[Object]}
     */
    const newData = new FormatProperties(data, 'lowerCamel') // snake_case & UpperCamel to lowerCamel 蛇型&大駝峰轉小駝峰
    // ---------- ↡  result 轉換結果 ↡ ----------------
    // newData = {
    //     userId: 1,
    //     userName: 'MH',
    //     userBirthday: '2023/04/02',
    //     userTel: ['0900-000-000', '0911-111-111'],
    //     productName: 'name',
    //     productPrice: 2000,
    //     productQuantity: 99,
    // }

```

###### 轉大駝峰  (to UpperCamel)
```javascript
    // step1 import js
    import FormatProperties from '@syuminghuang/format-properties'
    // or
    const FormatProperties  = require("@syuminghuang/format-properties")

    // step2 set data & naming convention (設定資料和要轉換命名規則類型)
    const data = {
        user_id: 1,
        user_name: 'MH',
        user_birthday: '2023/04/02',
        user_tel: ['0900-000-000', '0911-111-111'],
        productName: 'name',
        productPrice: 2000,
        productQuantity: 99,
    }

    /**
     * FormatProperties(data, type)
     * @param {[Object]} data 要轉換的資料
     * @param {[String]} type 類型 lowerCamel(小駝峰)、UpperCamel(大駝峰)、snake_case(蛇型)
     * @return {[Object]}
     */
    const newData = new FormatProperties(data, 'UpperCamel') // snake_case & lowerCamel to UpperCamel 蛇型&小駝峰轉大駝峰
    // ---------- ↡  result 轉換結果 ↡ ----------------
    // newData = {
    //     UserId: 1,
    //     UserName: 'MH',
    //     UserBirthday: '2023/04/02',
    //     UserTel: ['0900-000-000', '0911-111-111'],
    //     ProductName: 'name',
    //     ProductPrice: 2000,
    //     ProductQuantity: 99,
    // }
    
```

###### 轉蛇型  (to snake_case)
```javascript
    // step1 import js
    import FormatProperties from '@syuminghuang/format-properties'
    // or
    const FormatProperties  = require("@syuminghuang/format-properties")

    // step2 set data & naming convention (設定資料和要轉換命名規則類型)
    const data = {
        UserId: 1,
        UserName: 'MH',
        UserBirthday: '2023/04/02',
        UserTel: ['0900-000-000', '0911-111-111'],
        productName: 'name',
        productPrice: 2000,
        productQuantity: 99,
    }

    /**
     * FormatProperties(data, type)
     * @param {[Object]} data 要轉換的資料
     * @param {[String]} type 類型 lowerCamel(小駝峰)、UpperCamel(大駝峰)、snake_case(蛇型)
     * @return {[Object]}
     */
    const newData = new FormatProperties(data, 'snake_case') // UpperCamel & lowerCamel to snake_case 蛇型&小駝峰轉大駝峰
    // ---------- ↡  result 轉換結果 ↡ ----------------
    // newData = {
    //     user_id: 1,
    //     user_name: 'MH',
    //     user_birthday: '2023/04/02',
    //     user_tel: ['0900-000-000', '0911-111-111'],
    //     product_name: 'name',
    //     product_price: 2000,
    //     product_quantity: 99,
    // }
```