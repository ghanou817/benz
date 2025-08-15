// src/utils/socket.js
import { io } from 'socket.io-client';

const URL = window.location.origin.replace('3000', '5000'); // يفترض أن الباك اند يعمل على 5000
const socket = io(URL, { autoConnect: false });

export default socket;
