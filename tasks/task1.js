"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

async function fetchUsers() {
  const response = "https://jsonplaceholder.typicode.com/users";
  try {
    const result = await fetch(response);
    const users = await result.json();
    return users.map(user => ({
      id: user.id,
      name: user.name
    }));
  } catch (error) {
    console.error("Помилка отримання даних:", error);
  }
}

console.log(fetchUsers());

module.exports = fetchUsers;

