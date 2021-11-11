import React, { useState, useContext } from "react";
import { bag as dbBag } from "../Consts/cardItemList";

const BagContext = React.createContext();

export const useBag = () => useContext(BagContext);

export function BagProvider({children})
{
    const [bag, setBag] = useState(dbBag);

    const add = (item) =>
    {
        if (item) setBag(() => [item, ...bag]);
    }

    const remove = (item) =>
    {
        if (item) setBag(() => bag.filter(i => i !== item));
    } 
    
    return <BagContext.Provider value={{bag, add, remove}}>
        {children}
    </BagContext.Provider>
}