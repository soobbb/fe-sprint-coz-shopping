import BookMark from "./BookMark.js";
import DropDownList, { BookMark as Template } from "./BookMark.js";

export default {
  title: "Basic/BookMark", 
  component: Template, 
  parameters: {},
  controls: {},
};

export const Bookmark_on = (args) => <BookMark {...args} />;
Bookmark_on.args = {};
// export const Bookmark_off = (args) => <BookMark {...args} />;
// Bookmark_off.args = {
// };
