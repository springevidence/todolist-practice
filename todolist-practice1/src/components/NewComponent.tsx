import React from 'react';

type FilterType = 'all' | 'RUBLS' |'Dollars'
export type newComponentType = {
    onClickFilterHandler: (nameButton: FilterType) => void
    filteredMoney: Array<moneyType>
}
export type moneyType = {
    banknotes: string
    value: number
    number: string
}
const NewComponent = (props: newComponentType) => {
    return (
        <>
            <ul>
                {props.filteredMoney.map((objFromMoneyArr,index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknotes}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft:'35px'}}>
                <button onClick={()=> props.onClickFilterHandler('all')}>all</button>
                <button onClick={()=> props.onClickFilterHandler('RUBLS')}>ruble</button>
                <button onClick={()=> props.onClickFilterHandler('Dollars')}>dollar</button>
            </div>
        </>
    );
};

export default NewComponent;