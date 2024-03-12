import Server from "./src/server";

const service = new Server(8080, "olaola");
service.__init__();