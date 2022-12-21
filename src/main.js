import { addIcons, OhVueIcon } from "oh-vue-icons";
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import { BiMoonStarsFill, CoBehance , FaInstagram, SiTiktok, MdDesignservices, RiCodeBoxFill, MdQuestionanswerSharp } from "oh-vue-icons/icons";

addIcons(BiMoonStarsFill, CoBehance , FaInstagram, SiTiktok, MdDesignservices, RiCodeBoxFill, MdQuestionanswerSharp );

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
