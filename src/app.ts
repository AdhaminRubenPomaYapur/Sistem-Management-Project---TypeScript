import 'dotenv/config';
import { Server } from './service/server.service';

const server = new Server();

server.listen();
