import {
    BackTop, Badge,
    Button,
    Card, Carousel,
    Col,
    ConfigProvider, DatePicker,
    Divider,
    Dropdown,
    Form,
    Input,
    Menu,
    Row,
    Select,
    Tag
} from "ant-design-vue";

/**
 * 手动注册 antd-vue 组件，按需
 * @param app
 */
export default function loadComponent(app: any) {
    app.use(Button)
    app.use(Card)
    app.use(Row)
    app.use(Col)
    app.use(Tag)
    app.use(Form)
    app.use(Input)
    app.use(Dropdown)
    app.use(Menu)
    app.use(Divider)
    app.use(ConfigProvider)
    app.use(Select)
    app.use(DatePicker)
    app.use(BackTop)
    app.use(Badge)
    app.use(Carousel)
}
