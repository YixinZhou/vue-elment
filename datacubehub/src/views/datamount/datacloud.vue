<template>
	<div class="datacloud">
		<el-row :gutter ='20'>
		<el-col :span="8">
		<el-card class="input">
		<el-form :model="formData" label-width="90px">
			<el-form-item label="数据站点" >
				<el-input v-model="formData.name" placeholder="请输入数据站点" style="width: 200px"/>
			</el-form-item>
			<!-- <el-form-item label="密钥ID" >
				<el-input v-model="formData.keyID" placeholder="请输入密钥ID" style="width: 300px"/>
			</el-form-item>
			<el-form-item label="密钥" >
				<el-input v-model="formData.key" placeholder="请输入密钥" style="width: 300px"/>
			</el-form-item>
			<el-form-item label="访问区域">
				<el-select v-model="area_value" placeholder="选择访问区域" style="width: 150px">
					<el-option
					v-for="item in areas"
					:value="item"
					/>
				</el-select>
			</el-form-item>

			<el-form-item label="访问路径" >
				<el-input v-model="formData.accesspath" placeholder="请输入访问路径" style="width: 300px"/>
			</el-form-item>
			<el-form-item label="虚拟路径" >
				<el-input v-model="formData.virtualpath" placeholder="请输入虚拟路径" style="width: 300px"/>
			</el-form-item>

			<el-form-item label="数据类型">
				<el-select v-model="types_value" placeholder="选择数据类型" multiple style="width: 300px">
					<el-option
					v-for="item in types"
					:value="item"
					/>
				</el-select>
			</el-form-item>
			<el-form-item label="数据集组织顺序">
				<el-select v-model="order_value" placeholder="Select" style="width: 150px">
					<el-option
					v-for="item in order"
					:value="item"
					/>
				</el-select>
			</el-form-item> -->
			<el-form-item>
				<el-button type="primary" @click="onSubmit">新增</el-button>
				<el-button>取消</el-button>
			</el-form-item>

			
		</el-form>
	</el-card>
    </el-col>

	<el-col :span="16">
      <el-card>
		<img src="./temp.png"/>
	  </el-card>
    </el-col>
    </el-row>
	</div>

</template>



<script setup>
import { ElMessage } from "element-plus";
import { reactive ,ref} from "vue";

const area_value = ref('')
const areas = (['us-east-1','us-east-2','us-west-1','us-west-2'])
const types_value = ref('none')
const types = (['none','landsat5', 'landsat8', 'sentinel2'])
const order_value = ref('none')
const order = (['none','time','space'])

// do not use same name with ref
const formData = reactive({
	name: "",
	key: "",
	keyID: "",
	accesspath: "",
	virtualpath: ""
});


const onSubmit = () => {
	ElMessage.success("数据站点新增成功");
};
</script>

<style >
</style>
