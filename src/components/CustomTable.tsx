import React from 'react';

export interface dataProps {
    firstName: string,
    lastName: string,
    customerID: string,
    note: string,
    profession: string
}

interface customTableProps {
    // Define props here
    setState: React.Dispatch<React.SetStateAction<dataProps[]>>;
    users: dataProps[];
    outputMode?: boolean;
}

export const CustomTable = ({setState,users,outputMode}: customTableProps) => {
 

  // Handle input changes
  const handleInputChange = (index: number, key: keyof dataProps, value: string) => {
    const updatedUsers = [...users];
    updatedUsers[index][key] = value;
    setState(updatedUsers);
  };

  return (
    <div className={`${outputMode ? "w-[811px]":"w-fit"} mx-auto`}>
    {!outputMode && <p className='text-left text-md text-black/30'>Noted: Editable / 可以Edit</p>}
      <table border={1} style={{ width: "100%", textAlign: "left", borderCollapse: "collapse", display:"table" }}>
        <thead className={`customThead ${outputMode && "fullThead"}`}>
          <tr className='bg-black/10 border'>
            <th >First Name</th>
            <th >Last Name</th>
            <th>Customer ID</th>
            <th>Note</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody className='customTBody'>
          {users.map((user, index) => (
            <tr key={index} >
              <td>
                {outputMode ? 
                <div>{user.firstName}</div> 
                :<input
                type="text"
                value={user.firstName}
                onChange={(e) => handleInputChange(index, "firstName", e.target.value)}                  
                />
            }
              </td>
              <td>
              {outputMode ? 
              <div>{user.lastName}</div>  
              :
                <input
                  type="text"
                  value={user.lastName}
                  onChange={(e) => handleInputChange(index, "lastName", e.target.value)}
                />
              }
              </td>
              <td>
              {outputMode ? user.customerID :
                <input
                  type="text"
                  value={user.customerID}
                  onChange={(e) => handleInputChange(index, "customerID", e.target.value)}
                />
              }
              </td>
              <td>
              {outputMode ? user.note :
                <input
                  type="text"
                  value={user.note}
                  onChange={(e) => handleInputChange(index, "note", e.target.value)}
                />
              }
              </td>
              <td>
              {outputMode ? user.profession :
                <input
                  type="text"
                  value={user.profession}
                  onChange={(e) => handleInputChange(index, "profession", e.target.value)}
                />
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

