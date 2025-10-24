import buildServer from "./app";
const server = buildServer();

const startServer = () => {
  try {
    const PORT = process.env.PORT || 3000;
    server.listen(
      {
        port: PORT,
        host: "0.0.0.0",
      },
      () => {
        console.log(`${new Date()}`);
        console.log(
          `Сервер запущен и доступен по адресу: http://localhost:${
            PORT || 3000
          }`
        );
      }
    );
  } catch (error) {
    console.log(`Серверная ошибка: ${error}`);
    process.exit(1);
  }
};

startServer();
