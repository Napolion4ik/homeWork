import css from './css/style.css'

import { usersURL } from "./script/data";
import { getUsers } from "./script/getUsers";
const listBlock = document.querySelector('.list');

getUsers(usersURL, listBlock);
