# formatProperties
![npm](https://img.shields.io/npm/dt/@syuminghuang/format-properties)   
🙂format naming convention
轉換命名規則

## 😎使用方法 (usage)
```
    npm install --save @syuminghuang/format-properties
```

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
    const newData = new FormatProperties(data, 'lowerCamel') // snakeCase & UpperCamel to lowerCamel 蛇型轉小駝峰
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
