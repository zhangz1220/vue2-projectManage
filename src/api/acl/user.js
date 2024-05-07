import fetch from '@/utils/fetch.js'

// 获取用户列表
export function UserList(parames) {
  return fetch({
    url: "/api/userList",
    method: "post",
    data: parames,
  });
}

