import React, {ReactNode, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(3);
    const [b, setB] = useState<number>(4);

    let resA = 1;
    let resB = 1;

    resA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()

            }
            tempResA = tempResA * i

        }
        return tempResA

    }, [a]);


    for (let i = 1; i <= b; i++) {
        resB = resB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result a : {resA}
        </div>
        <div>
            Result b : {resB}
        </div>
    </>
}


type SelectTypeData = {
    id: number
    city: string
    land: string
}

const arrCity: Array<SelectTypeData> = [
    {id: 1, city: 'Moscow', land: 'Russia'},
    {id: 2, city: 'Spb', land: 'Russia'},
    {id: 3, city: 'Rostov', land: 'Russia'},
    {id: 4, city: 'Minsk', land: 'Belarus'},
    {id: 5, city: 'Vitebsk', land: 'Belarus'},
    {id: 5, city: 'Ostrovec', land: 'Belarus'},
    {id: 6, city: 'Kiev', land: 'Ukraine'},
    {id: 7, city: 'Odessa', land: 'Ukraine'},
    {id: 8, city: 'Energodar', land: 'Ukraine'},
]

export const Select1 = () => {
    const [cityList, setCityList] = useState(arrCity);

    const memArr = useMemo(() => {
        return cityList
            .filter(c => c.city.toLowerCase().indexOf('m'))
            .map((c: SelectTypeData) => <option value={c.city}>{c.city}</option>
            )
    }, []);


    return (
        <select >
            {memArr}
        </select>
    )
}


// export const Select2 = () => {
//     const [cityList, setCityList] = useState(arrCity);
//
//     const newArr: any = cityList.filter(c => <select>{c.land.toLowerCase().indexOf('b') > -1}</select>)
//
//     return (
//         <select>
//             {newArr}
//         </select>
//     )
// }
// export const Select3 = () => {
//     const [cityList, setCityList] = useState(arrCity);
//
//     const newArr: any = cityList.filter(c => <select value={c.id}>{c.city.toLowerCase().indexOf('m') > -1}</select>)
//
//     const changeHandler = () => {
//         setCityList(cityList)
//     }
//
//     return (
//         <select onChange={changeHandler}>
//             {newArr}
//         </select>
//     )
// }