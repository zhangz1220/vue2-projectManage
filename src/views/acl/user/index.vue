<template>
  <div>
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="username" label="用户名" width="300" />
      <el-table-column prop="province" label="权限" width="300" />
      <el-table-column prop="address" label="地址" width="">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { UserList } from '@/api/acl/user';
export default {
  name: 'App',
  mounted() {
    this.getList()
  },
  components: {

  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getList() {
      UserList().then(res => {
        console.log(res.data)
        this.tableData = res.data
      })
    },
    handleClick(row) {
      console.log(row);
    }
  },
}
</script>
<style lang="scss" scoped></style>