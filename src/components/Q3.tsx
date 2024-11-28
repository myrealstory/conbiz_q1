import { useEffect, useState } from "react";

export const Q3 = () => {
    const items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
    const [uniqueItems, setUniqueItems] = useState<number[]>([]);

    useEffect(()=>{
        function getUniqueNumber (item:number[]) {
            return [...item].filter((value, index, self) => self.indexOf(value) === index);
        }
        setUniqueItems(getUniqueNumber(items));
    },[items])

    return (
        <div className="flex flex-col gap-3 text-left text-black text-sm h-full w-full px-10 py-6">
            <p className="text-base text-black/30 mb-1">Question 3:</p>
            <p className="">{`const item = [${items}];`}</p>
            <p className="mb-4">Please write down a function to console log unique value from this array.</p>
            <div className="border border-black/10 flex flex-col gap-2 p-4 font-medium">
            <p>{`function getUniqueNumber (item:number[]) {`}</p>
                        <p className="ml-2">{`return [...item].filter((value, index, self) => self.indexOf(value) === index);`}</p>
                        <p className="ml-1">{`}`}</p>
            </div>
            <div className="border border-black/10 flex items-center gap-3 ">
                <p className="text-base ">Output : </p>
                {uniqueItems.map((item, index) => (
                    <p key={index} className="text-black/50 text-sm">{item}</p>
                ))}
            </div>
        </div>
    );
}