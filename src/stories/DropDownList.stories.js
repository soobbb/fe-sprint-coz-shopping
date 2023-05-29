import DropDownList, { DropDownList as Template } from "./DropDownList.js";

export default {
  title: "Basic/DropDown",
  component: Template, 
  parameters: {
    backgrounds: {},
  },
};

export const WithDropDownList = (args) => <DropDownList {...args} />;
WithDropDownList.args = {
  text1: "전수빈님, 안녕하세요!",
  text2: "상품 리스트 페이지",
  text3: "북마크 리스트 페이지",
};
