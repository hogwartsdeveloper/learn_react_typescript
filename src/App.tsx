import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Zhannur Freelanser', email: 'web_developer@gmail.com', address: {city: 'Tokyo', street: 'Lenina', zipcode: "0001"}},
    {id: 2, name: 'Web Freelanser', email: 'web_developer@gmail.com', address: {city: 'Pekin', street: 'Lenina', zipcode: "0001"}}
  ]
  return (
    <div>
      <Card
        onClick={(num) => console.log('click', num)}
        variant={CardVariant.outlined} 
        width="200px" 
        height="200px"
      >
        <button>Click</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
}

export default App;
