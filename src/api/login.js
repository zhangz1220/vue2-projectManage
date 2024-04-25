import fetch from '@/utils/fetch.js'

// 登录
export function Login(parames) {
  return fetch({
    url: "/api/login",
    method: "post",
    data: parames,
  });
}
// 获取用户信息
export function Userinfo(parames) {
  return fetch({
    url: "/api/userinfo",
    method: "post",
    data: parames,
  });
}

//退出登录
export function Logout(parames) {
  return fetch({
    url: "/api/logout",
    method: "get",
    data: parames,
  });
}
