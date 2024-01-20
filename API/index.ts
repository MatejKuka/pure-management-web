import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {ITEMS_DEMO_DATA, USER_DEMO_DATA, WAREHOUSES_DEMO_DATA} from "@/utils/demo-data";

/*const myAxios = axios.create({
  baseURL: "https://localhost:7158/api/",
});*/

const mock = new MockAdapter(axios);

mock.onGet(`User/`, {params: {userId: 1}}).reply(200, {
  ...USER_DEMO_DATA,
});

mock.onGet(`Company/1`).reply(200, {
  data: ITEMS_DEMO_DATA
});



export default axios;