import React, {useMemo, useState} from "react";

export default {
    title: 'nemoSelectList'
}


type SelectTypeData = {
    id: number
    city: string
    land: string
}

const arrCity:Array<SelectTypeData> = [
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
    const [value, setValue]  = useState('')
            console.log(value)
    const memArr = useMemo(() => {
        return cityList
            .filter(c => c.city.toLowerCase().indexOf('m'))
            .map((c: SelectTypeData) => <option value={c.city}>{c.city}</option>
            )
    }, []);

    return (
        <select onChange={e => setValue(e.currentTarget.value)}>
            {memArr}
        </select>
    )
}



export const Select2 = () => {


    const [cityList, setCityList] = useState(arrCity);
    const [value, setValue]  = useState('')
    console.log(value)


    const memArr = useMemo(() => {
        return cityList
            .filter(c => c.city.toLowerCase().indexOf('m'))
            .map((c: SelectTypeData) => <option value={c.city}>{c.city}</option>
            )
    }, []);


    return (
        <select onChange={e => setValue(e.currentTarget.value)}>
            {memArr}
        </select>
    )
}


export const Select3 = () => {

    const [cityList, setCityList] = useState(arrCity);
    const [value, setValue]  = useState('')
    console.log(value)

    const memArr = useMemo(() => {
        return cityList
            .filter(c => (c.city.length < 5))
            .map((c: SelectTypeData) => <option value={c.city}>{c.city}</option>
            )
    }, []);


    return (
        <select onChange={e => setValue(e.currentTarget.value)}>
            {memArr}
        </select>
    )
}

