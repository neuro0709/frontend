// 新規社員登録画面
import Form from "../../components/Form.js";
import { RegisterProvider } from "../../context/registerContext.js";

export default function Home() {
  return (
    <RegisterProvider>
        <h1>新しい個人情報を登録</h1>
        <Form/>
    </RegisterProvider>
  );
}
