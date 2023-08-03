import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSliice from "./ChatSliice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer: {
      app: appSlice,
      search: searchSlice,
      chat: ChatSliice,
    },

});

export default store;

