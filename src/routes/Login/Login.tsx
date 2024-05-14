import { Button, Input, Checkbox } from "antd";
import { toast } from "sonner";
import { userLogin } from "@/utils/api";
import { useKeyPress } from "ahooks";
import { AppWrapper } from "@/AppWrapper";
import { Field } from "@/constant/names.const";
import { useEffect } from "react";
import { useReducerWrap } from "@/hook/useReducerWrap";

export default function login() {
  const [state, dispatch] = useReducerWrap({
    account: localStorage[Field.Account] || "",
    password: localStorage[Field.Password] || "",
    remember: !!localStorage[Field.Password],
  });

  useEffect(() => {
    localStorage[Field.Token] = "";
  }, []);

  const submit = async () => {
    if (!state.account) return toast.error("请输入账号");
    if (!state.password) return toast.error("请输入密码");
    const params = { account: state.account, password: state.password };
    const res = await userLogin(params);

    // 新账号登录, 清除全局缓存
    if (localStorage[Field.Account] && localStorage[Field.Account] !== state.account) {
      localStorage.removeItem(Field.GlobalStore);
    }

    // 保存token
    localStorage.setItem(Field.Token, res.token);

    // 记住账号
    localStorage[Field.Account] = state.account;

    // 记住密码
    if (state.remember) {
      localStorage[Field.Password] = state.password;
    } else {
      localStorage.removeItem(Field.Password);
    }

    // 刷新页面
    toast.success("登录成功", { position: "top-center" });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useKeyPress("Enter", submit);

  return (
    <AppWrapper>
      <div className="w-full h-full flex items-center justify-center bg-gray-100 select-none" style={{ height: "90vh" }}>
        <div className="h-[320px] w-[500px] bg-white shadow-sm relative">
          <div className="text-center my-6 tracking-widest text-lg text-gray-500 neon-bold">软件数据管理系统</div>
          <div className="space-y-2 px-10">
            <Input size="large" placeholder="邮箱" className="w-full" value={state.account} onChange={(e) => dispatch({ account: e.target.value })} />
            <Input
              size="large"
              placeholder="密码"
              className="w-full"
              type="password"
              value={state.password}
              onChange={(e) => dispatch({ password: e.target.value })}
            />
            <div>
              <Checkbox checked={state.remember} onChange={(e) => dispatch({ remember: e.target.checked })}>
                记住密码
              </Checkbox>
            </div>
            <div className="text-center pt-3">
              <Button size="large" className="w-full block" type="primary" onClick={submit}>
                登录
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
}
