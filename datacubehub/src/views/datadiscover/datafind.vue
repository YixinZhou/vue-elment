<template>
  <div>
  <el-row :gutter="10">
  <el-col :span="16">
     <el-card>
     <iframe src="/static/map.html" ref="iframe" width="100%" height="500px" scrolling="no"></iframe>
  </el-card>
  </el-col>

  <el-col :span="8">
     <el-card class="input">
     <el-form :model="formData" label-width="70px">
     <el-form-item label="数据类型" >
	  <el-input v-model="formData.type" placeholder="数据类型" style="width: 100px"/>
	  </el-form-item>
     <el-form-item label="时间范围">
      <el-date-picker
        v-model="time_start"
        style="width:120px"
        placeholder="开始日期"
      />
      ~
      <el-date-picker
        v-model="time_end"
        style="width:120px"
        placeholder="结束日期"
      />
     </el-form-item>

     <el-form-item label="空间范围">
      <el-input v-model="left_longitude" placeholder="左上经度" style="width: 100px"/>
     ~
     <el-input v-model="left_latitude"  placeholder="左上纬度" style="width: 100px "/>
     </el-form-item>
     <el-form-item label-width="70px" >
     <el-input v-model="right_longitude" placeholder="右下经度" style="width: 100px"/>
     ~
     <el-input v-model="right_latitude" placeholder="右下纬度" style="width: 100px "/>
     </el-form-item>

     <el-form-item label="云量范围">
     <el-input v-model="cloud_start"  placeholder="0" style="width: 100px"/>
     ~
     <el-input v-model="cloud_end"  placeholder="100" style="width: 100px "/>
     </el-form-item>

     <el-form-item label="运行类型">
		<el-select v-model="types_value" placeholder="选择运行类型" style="width: 200px">
				<el-option
				v-for="item in types"
				:value="item"
				/>
			</el-select>
		</el-form-item>
		<el-form-item label="节点" label-width="70px" >
			<el-select v-model="node_value" placeholder="选择节点"  multiple style="width: 200px">
					<el-option
					v-for="item in node"
					:value="item"
					/>
				</el-select>
			</el-form-item>
	<el-form-item label-width="100px">
		<el-button type="primary" @click="onSubmit">发现</el-button>
		<el-button>重置</el-button>
	</el-form-item>

    </el-form>
     </el-card>
  </el-col>
 </el-row>
</div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { reactive ,ref} from "vue";

const types_value = ref('')
const types = (['所有节点','随机节点', '指定节点'])
const node_value = ref('')
const node = (['10.3.1.155','10.3.1.154','10.3.1.151'])
const time_start = ref('')
const time_end = ref('')
const left_latitude = ref('')
const left_longitude = ref('')
const right_latitude = ref('')
const right_longitude = ref('')
const cloud_start = ref('')
const cloud_end = ref('')

const formData = reactive({
	type: "",
});

const onSubmit = () => {
	ElMessage.success("数据发现成功");
};

// export default {

// data(){

//   return {

//     src: 'http://localhost:8088/WebTest/',

//     iframeWin: {}

//   }
// },

// methods:{
// //    onSubmit () {
// // 	ElMessage.success("数据集挂载成功");
// //   },
//   sendMessage () {

//     // 外部vue向iframe内部传数据

//     this.iframeWin.postMessage({

//       cmd: 'getFormJson',

//       params: {id:'接收到vue的传值'}

//     }, '*')

//   },


//   handleMessage (event) {

//   const data = event.data

//   switch (data.cmd) {

//     case 'returnFormJson':

//       alert("Test:"+data.params.success);

//       // 业务逻辑

//       break

//     case 'returnHeight':

//       alert("vue接收:"+data.params.data);

//       // 业务逻辑

//       break

//   }
//  }
// }
// }



</script>

<style scoped>
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 10px;
}

</style>

