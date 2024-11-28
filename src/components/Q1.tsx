import { useEffect, useState } from "react";
import { CustomTable, dataProps } from "./CustomTable";

export const Q1 = () => {
    const [users, setUsers] = useState([
        { firstName: "Charlie", lastName: "Brown", customerID: "202", note: "", profession: "freelancer" },
        { firstName: "Alice", lastName: "Smith", customerID: "123", note: "", profession: "student" },
        { firstName: "Bob", lastName: "", customerID: "101", note: "", profession: "engineer" },
        { firstName: "Eve", lastName: "Johnson", customerID: "404", note: "", profession: "productOwner" },
        { firstName: "David", lastName: "Clark", customerID: "303", note: "", profession: "systemAnalytics" },
      ]);

    const [newSort, setNewSort] = useState<dataProps[]>([]);
    const [profession, setProfession] = useState<dataProps[]>([]);

    
    useEffect(() => {
        function sortUserName(user:dataProps[]) {
          return [...user].sort((a,b) => {
            const keyA = a.firstName + a.lastName + a.customerID;
            const keyB = b.firstName + b.lastName + b.customerID;
            return keyA.localeCompare(keyB);
          });
       }
       function sortByType(user:dataProps[]) {
        const professionalOrder = {
            systemAnalytics: 0,  engineer : 1,  productOwner: 2, freelancer: 3,  student: 4,
          }
          
          return [...user].sort((a,b) => {
          
            return professionalOrder[a.profession as keyof typeof professionalOrder] - professionalOrder[b.profession as keyof typeof professionalOrder]
          
          })
   }
        setNewSort(sortUserName(users));
        setProfession(sortByType(users));
    }, [users]);

    return (
        <div className="h-full w-full px-10 py-6">
            <p className="mb-2 text-lg text-black/60 text-left">Question: 1</p>
            <p className="text-black/40 text-sm text-left mb-4">
            {`There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.`}
            </p>
            <p className="text-base text-black text-left mb-4">Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.</p>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <div className="w-full border border-black/30 p-4">
                    <div className="flex flex-col gap-2 text-sm text-black text-left">
                        <p>{`function sortUserName(user) {`}</p>
                        <p className="ml-1">{`return users.sort((a,b) => {`}</p>
                        <p className="ml-2">{`const keyA = a.firstName + a.lastName + a.customerID;`}</p>
                        <p className="ml-2">{`const keyB = b.firstName + b.lastName + b.customerID;`}</p>
                        <p className="ml-2">{`return keyA.localeCompare(keyB);`}</p>
                        <p className="ml-1">{`});`}</p>
                        <p>{`};`}</p>
                    </div>
                </div>
                <div className="w-full border border-black/30 p-4 text-black text-sm text-center">
                    <CustomTable
                        setState={setUsers}
                        users={users}
                    />
                </div>
                <div className="w-full  pb-6 text-black text-sm text-center">
                    <p className="text-lg text-black mb-2 text-left">output</p>
                    <div className="border border-black/30 py-5">
                        <CustomTable 
                            setState={setNewSort}
                            users={newSort}
                            outputMode
                        />
                    </div>
                </div>
                <div className="w-full  pb-6 text-black text-sm text-center">
                <p className="text-base text-black text-left mb-2">{`Please sort by ‘profession’ to follow the principle.
            (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)`}</p>
            <div className="flex flex-col gap-2 text-sm text-black text-left border border-black/10 p-4">
                        <p>{`function sortByType(user:dataProps[]) {`}</p>
                        <p className="ml-1">{`const professionalOrder = {`}</p>
                        <p className="ml-2">{`systemAnalytics: 0,  engineer : 1,  productOwner: 2, freelancer: 3,  student: 4,`}</p>
                        <p className="ml-1">{`}`}</p>
                        <p className="ml-1">{`return [...user].sort((a,b) => {`}</p>
                        <p className="ml-2">{`return professionalOrder[a.profession as keyof typeof professionalOrder] -`}</p>
                        <p className="ml-2">{`professionalOrder[b.profession as keyof typeof professionalOrder]`}</p>
                        <p className="ml-1">{`});`}</p>
                        <p>{`};`}</p>
                    </div>
                    <p className="text-lg text-black mb-2 text-left">output</p>
                    <div className="border border-black/30 py-5">
                        <CustomTable 
                            setState={setProfession}
                            users={profession}
                            outputMode
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}