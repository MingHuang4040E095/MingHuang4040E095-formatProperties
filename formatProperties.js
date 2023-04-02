console.log(11)

export class FormatProperties {
    constructor(data, type = 'lowerCamel') {
        // 英文字母-大寫
        this.englishAlphabetUpperCase = [
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ]
        // 英文字母-小寫
        this.englishAlphabetLowerCase = this.englishAlphabetUpperCase.map((item) => item.toLocaleLowerCase())

        this.data = data
        this._typeList = [
            'lowerCamel', // 小駝峰
            'UpperCamel', // 大駝峰
            'snake_case', // 蛇型
        ]
        this.type = type // 命名方式 預設小駝峰

        // 判斷輸入的類型是否正確
        if (!this._typeList.includes(this.type)) throw new Error('type only lowerCamel,UpperCamel,snake_case')
        this.main(data, type)
    }

    // 主要函式
    main(data) {
        const dataType = typeof data // 資料類型

        if (dataType !== 'object') throw new Error('data only object!')

        const isArray = Array.isArray(data) // 是不是陣列

        if (isArray) {
            // 如果是陣列
        } else {
            // 物件
            Object.keys(data).forEach((property) => {
                const value = data[property]
                this.format(property, value)
            })
        }
    }

    /**
     * 格式化
     * @param {[String]} property 屬性
     * @param {[*]} value 值
     */
    format(property = '', value) {
        const strArray = property.split('') // 切割字串

        // 取得原本的命名方式
        const typeOriginal = this.getTypeOriginal(property)
        console.log(typeOriginal)
        let newPropertyName = ''
        if (typeOriginal === this.type) {
            newPropertyName = property
        } else if (typeOriginal === 'snake_case') {
            if (this.type === 'lowerCamel') {
                newPropertyName = this.snakeCaseToLowerCamel(property) // 蛇型轉小駝峰
            } else if (this.type === 'UpperCamel') {
                newPropertyName = this.snakeCaseToUpperCamel(property) // 蛇型轉大駝峰
            }
        } else if (typeOriginal === 'UpperCamel') {
            if (this.type === 'snake_case') {
                newPropertyName = this.upperLowerCamelToSnakeCase(property) // 大駝峰轉蛇型
            } else if (this.type === 'lowerCamel') {
                newPropertyName = this.upperCamelToLowerCamel(property) // 大駝峰轉小駝峰
            }
        } else if (typeOriginal === 'lowerCamel') {
            if (this.type === 'snake_case') {
                newPropertyName = this.upperLowerCamelToSnakeCase(property) // 小駝峰轉蛇型
                // console.log('aa')
            } else if (this.type === 'UpperCamel') {
                newPropertyName = this.lowerCamelToUpperCamel(property) // 小駝峰轉大駝峰
            }
        } else {
            newPropertyName = property
        }
        console.log(newPropertyName)

        return {
            [newPropertyName]: value,
        }
    }

    // -------------------------  轉換成蛇型  -----------------------------
    // 大or小駝峰轉蛇型
    upperLowerCamelToSnakeCase(property = '') {
        const strArray = property.split('') // 切割字串
        // 抓大寫字母位置
        const upperCaseIndex = []
        strArray.forEach((item, index) => {
            if (this.englishAlphabetUpperCase.includes(item)) upperCaseIndex.push(index)
        })
        // 大寫字母前面+底線
        let newPropertyName = ''
        strArray.forEach((item, index) => {
            if (upperCaseIndex.includes(index)) {
                newPropertyName = newPropertyName
                    ? newPropertyName + '_' + item.toLocaleLowerCase()
                    : item.toLocaleLowerCase()
            } else {
                newPropertyName = newPropertyName + item
            }
        })
        return newPropertyName
    }
    // -------------------------  轉換成小駝峰  -----------------------------
    // 蛇型轉小駝峰
    snakeCaseToLowerCamel(property = '') {
        const strArray = property.split('_').filter((item) => item) // 切割字串
        // 蛇型轉小駝峰
        const newPropertyName = strArray.map((item, index) => {
            // 如果是第一個單字就轉小寫，否則單字的第一個字母大寫其他小寫 ex:user 轉 User
            return index === 0 ? item.toLocaleLowerCase() : this.handleUpperWord(item)
        })
        return newPropertyName.join('')
    }

    // 大駝峰轉小駝峰
    upperCamelToLowerCamel(property = '') {
        const strArray = property.split('') // 切割字串
        // 抓大寫字母位置
        const upperCaseIndex = []
        strArray.forEach((item, index) => {
            if (this.englishAlphabetUpperCase.includes(item)) upperCaseIndex.push(index)
        })

        let newPropertyName = ''
        strArray.forEach((item, index) => {
            if (upperCaseIndex.includes(index)) {
                // 如果是大寫字母
                // 如果是第一個字就轉小寫，否則一樣大寫
                const str = index === 0 ? item.toLocaleLowerCase() : item
                newPropertyName = newPropertyName + str
            } else {
                // 不是大寫字母
                newPropertyName = newPropertyName + item.toLocaleLowerCase() // 其餘轉小寫
            }
        })
        return newPropertyName
    }

    // -------------------------  轉換成大駝峰  -----------------------------
    // 小駝峰轉大駝峰
    lowerCamelToUpperCamel(property = '') {
        const strArray = property.split('') // 切割字串
        // 抓大寫字母位置
        const upperCaseIndex = []
        strArray.forEach((item, index) => {
            if (this.englishAlphabetUpperCase.includes(item)) upperCaseIndex.push(index)
        })
        let newPropertyName = ''
        strArray.forEach((item, index) => {
            if (index === 0) {
                newPropertyName = item.toLocaleUpperCase()
            } else if (upperCaseIndex.includes(index)) {
                // 如果是大寫字母
                newPropertyName = newPropertyName + item
            } else {
                // 不是大寫字母
                newPropertyName = newPropertyName + item.toLocaleLowerCase() // 其餘轉小寫
            }
        })
        return newPropertyName
    }
    // 蛇型轉大駝峰
    snakeCaseToUpperCamel(property = '') {
        const strArray = property.split('_').filter((item) => item) // 切割字串
        const newPropertyName = strArray.map((item) => {
            return this.handleUpperWord(item) // 單字的第一個字母大寫其他小寫 ex:user 轉 User
        })

        return newPropertyName.join('')
    }
    // 單字的第一個字母大寫其他小寫 ex:user 轉 User
    handleUpperWord(word = '') {
        const itemStrArray = word.split('')
        const firstEnglishAlphabet = itemStrArray[0].toLocaleUpperCase() // 第一個字母轉大寫
        itemStrArray.shift() // 移除第一筆
        itemStrArray.map((str) => str.toLocaleLowerCase()) // 其他字母轉小寫
        const itemStrLowerCaseArray = itemStrArray.join('')
        return firstEnglishAlphabet + itemStrLowerCaseArray
    }

    // 取得原本的命名方式
    getTypeOriginal(property = '', index = 0) {
        // 判斷原本屬性是哪種命名方式
        let typeOriginal = ''
        if (property.includes('_')) {
            typeOriginal = 'snake_case' // 蛇型
        } else {
            const strArray = property.split('') // 切割字串
            // 字是大寫還是小寫
            const englishAlphabet = strArray[index]
            const isUpperCase = this.englishAlphabetUpperCase.includes(englishAlphabet)
            const isLowerCase = this.englishAlphabetLowerCase.includes(englishAlphabet)

            if (isUpperCase) typeOriginal = 'UpperCamel' // 大駝峰
            else if (isLowerCase) typeOriginal = 'lowerCamel' // 小駝峰
            else {
                // 如果都找不到
                const nextEnglishAlphabetIndex = index + 1 // 下一個英文字母的索引
                if (nextEnglishAlphabetIndex < strArray.length) {
                    // 找下一個字母
                    typeOriginal = this.getTypeOriginal(property, nextEnglishAlphabetIndex)
                } else {
                    typeOriginal = 'none' // 都找不到
                }
            }
        }
        return typeOriginal
    }
}

export const formatProperties = (data) => {
    const dataType = typeof data // 資料類型

    if (dataType !== 'object') throw new Error('only object!')

    const isArray = Array.isArray(data) // 是不是陣列

    if (isArray) {
        // 如果是陣列
    } else {
        // 物件
    }
}
