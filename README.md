# formatProperties
🙂format naming convention
轉換命名規則

## 😎使用方法 (usage)
```
    npm install --save @syuminghuang/formatProperties
```

```javascript
    // step1 import js
    import { FormatProperties } from '@syuminghuang/formatProperties.js'
    // or
    const { FormatProperties } = require("@syuminghuang/formatProperties")

    // step2 set data & naming convention (設定資料和要轉換命名規則類型)
    // propertyName is snakeCase
    const data = {
        user_id: 1,
        user_name: 'MH',
        user_birthday: '2023/04/02',
        user_tel: ['0900-000-000', '0911-111-111'],
    }
    // new FormatProperties(data, type)
    // data only object (data只能傳物件)
    // typeValue: lowerCamel(小駝峰)、UpperCamel(大駝峰)、snake_case(蛇型)
    const newData = new FormatProperties(data, 'lowerCamel') // snakeCase to lowerCamel 蛇型轉小駝峰
    // ---------- ↡  result 轉換結果 ↡ ----------------
    // newData = {
    //     userId: 1,
    //     userName: 'MH',
    //     userBirthday: '2023/04/02',
    //     userTel: ['0900-000-000', '0911-111-111'],
    // }

```
