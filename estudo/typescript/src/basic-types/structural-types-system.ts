type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const myUser = { username: "Jonatha", password: "123456" };
// Se a variável cumprir as restrições da função, o TypeScript não reclamará. Ou seja, a função verifyUser receberá um objeto que necessita ter username: string e password: string, mas isso não impossibilita do objeto recebido ter mais chaves.
const sentUser = {
  username: "Jonatha",
  password: "123456",
  outraChave: "outroValor",
};
console.log(verifyUser(myUser, sentUser)); // true

export default {};
