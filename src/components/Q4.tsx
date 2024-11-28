export const Q4 = () => {
    return (
        <div className="flex flex-col gap-3 text-left text-black text-sm h-full w-full px-10 py-6">
            <p className="text-base text-black/30 mb-1">Question 4:</p>
            <p className="mb-2 text-black/60 text-lg">Can you explain about Interface and Enum, and where will you be using, please make some examples.</p>
            <div>
                <p className="text-lg">Interface:</p>
                <p className="text-black/80 "><span className="bg-black/10">interface</span>
                     <span> in TypeScript is used to defind the shape (structure) of an object. It specifies what properties an object should have and their types. Interface are used to enforce type-checking in TypeScript</span>
                </p>
                <p className="font-medium text-base mt-4">When to Use:</p>
                <ul className="pointUL">
                    <li>To define the structure of an object</li>
                    <li>To enforce type-checking for function parametes, return value, or class implementations</li>
                    <li>To define contracts that must be adhered to by objects or classes</li>
                </ul>
                <div className="mt-4 border border-black/20 p-4">
                    <p>{`interface User {`}</p>
                    <p className="ml-3">{`id: number;`}</p>
                    <p className="ml-3">{`name: string;`}</p>
                    <p className="ml-3">{`age?: number;`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`const user1: User ={`}</p>
                    <p className="ml-3">{`id: 1,`}</p>
                    <p className="ml-3">{`name: "Alice",`}</p>
                    <p className="ml-3">{`age?: 25`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`const user2: User ={`}</p>
                    <p className="ml-3">{`id: 2,`}</p>
                    <p className="ml-3">{`name: "Bob",`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`function greet(user: User): string {`}</p>
                    <p className="ml-3">{`return 'Hello, `}{"${"}{"user.name}';"}</p>
                    <p>{`}`}</p>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-lg">Enum:</p>
                <p className="text-black/80 "><span className="bg-black/10">enum</span>
                    in TS is a way to define a set of name constant. It provides an easy way to organize a collection of related values and allows us to use those values in a type-safe manner.
                </p>
                <p className="font-medium text-base mt-4">When to Use:</p>
                <ul>
                    <li>To define a set of related values</li>
                    <li>when you need to assign meaningful names to numeric or string constants</li>
                    <li>To improve code readability and maintainability by avoiding "magic numbers" or hardcoded string</li>
                </ul>
                <div className="mt-4  border border-black/20 p-4">
                    <p>{`enum Role {`}</p>
                    <p className="ml-3">{`Admin = 1`}</p>
                    <p className="ml-3">{`User`}</p>
                    <p className="ml-3">{`Guest`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`const userRole: Role = Role.User;`}</p>
                    <p className="mt-3">{`if( userRole === Role.User ) {`}</p>
                    <p className="ml-3">{`console.log("This user is a regular user.")`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`enum Status ={`}</p>
                    <p className="ml-3">{`Active = "ACTIVE",`}</p>
                    <p className="ml-3">{`Inactive = "INACTIVE",`}</p>
                    <p className="ml-3">{`Suspended = "SUSPENDED",`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`const currentStatus: Status = Status.Active`}</p>
                    <p className="ml-3">{"console.log(currentStatus)"}</p>
                    <p>{`// Output: ACTIVE`}</p>
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-black/10">
                <p className="text-lg">use together:</p>
                <div className="mt-4 border border-black/20 p-4">
                    <p>{`enum Role {`}</p>
                    <p className="ml-3">{`Admin = "ADMIN",`}</p>
                    <p className="ml-3">{`User = "USER",`}</p>
                    <p className="ml-3">{`Guest = "GUEST",`}</p>
                    <p>{`}`}</p>
                    <p>{`interface User {`}</p>
                    <p className="ml-3">{`id: number;`}</p>
                    <p className="ml-3">{`name: string;`}</p>
                    <p className="ml-3">{`role: Role; // Use the enum as a type`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`const admin:User ={`}</p>
                    <p className="ml-3">{`id: 1,`}</p>
                    <p className="ml-3">{`name: "Alice",`}</p>
                    <p className="ml-3">{`role: Role.Admin,`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`function isAdmin(user: User): boolean {`}</p>
                    <p className="ml-3">{`return user.role === Role.Admin`}</p>
                    <p>{`}`}</p>
                    <p className="mt-3">{`console.log(isAdmin(admin))`}</p>
                    <p className="ml-3">{`// Output: true`}</p>
                </div>
            </div>
            
        </div>
    );
}