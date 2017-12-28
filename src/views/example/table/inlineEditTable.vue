<template>
  <div class="app-container calendar-list-container">

    <el-table :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="序号" width="80">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="时间">
        <template slot-scope="scope">
         <!-- <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>-->
          <span>{{scope.row.timestamp }}</span>
        </template>
      </el-table-column>

      <el-table-column width="120px" align="center" label="作者">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="重要性">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="状态" width="110">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column min-width="300px" label="标题">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.title"></el-input>
            <el-button class='cancel-btn' size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button>
          </template>
          <span v-else>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="编辑" width="120">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="success" @click="confirmEdit(scope.row)" size="small" icon="el-icon-circle-check-outline">完成</el-button>
          <el-button v-else type="primary" @click='scope.row.edit=!scope.row.edit' size="small" icon="el-icon-edit">编辑</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  import {fetchList} from '@/api/articles'
  export default {
    data() {
      return {
        list: null,
        listLoading: true,
        listQuery:{
          page:1,
          limit:10
        }
      }
    },
    created(){
      this.getList();
    },
    filters:{
      statusFilter(status){
        const statusMap = {
          published:'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    methods:{
     getList(){
       this.listLoading = true
        fetchList(this.listQuery).then(response=>{
        const items = response.data.items;
          this.list = items.map(v => {
            this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
            v.originalTitle = v.title //  will be used when user click the cancel botton
            return v
          })
          this.listLoading = false
       })
     },
      cancelEdit(row){
        row.title = row.originalTitle
        row.edit = false
        this.$message({
          message: '取消更新',
          type: 'warning'
        })
      },
      confirmEdit(row){
        row.edit = false
        row.originalTitle = row.title
        this.$message({
          message: '已更新',
          type: 'success'
        })
      }
    }
  }
</script>
<style scoped>
  .edit-input {
    padding-right: 100px;
  }
  .cancel-btn {
    position: absolute;
    right: 15px;
    top: 13px;
  }
</style>
