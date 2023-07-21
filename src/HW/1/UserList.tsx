type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number
    name:string
    age: number
    address : AddressType
};

type UserListPropsType = {
    users:Array<UserType>

};

export const UserList = (props: UserListPropsType) => {
    console.log('component rendered')
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>

          {props.users.map((user) => {
            return ( <li key={user.id}>
                <strong>
                    {user.name}
                </strong>,
                {user.age},
                <strong>
                    Address:</strong> {user.address.street},
                    {user.address.city}

            </li>) })
          }
              </ul>
              </div>
  )}
