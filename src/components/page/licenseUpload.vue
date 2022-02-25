<template>
  <div class="tree-progress">
      <Tree 
        ref="treeContainer"
        :nodeSize="{x:190,y:38}"
        :initData="data"
        :translate="translate"
        pathFunc="diagonal"
      >
        <template slot-scope="scope">
            <div class="base-node salad-root" v-if="scope.depth === 0">
                <span  class="nodeLeft">
                    <i class="fa fa-cubes"></i>
                </span>
                <span>{{scope.data.name}}</span>
            </div>
            <div class="base-node salad" @click="handleClick(scope)" v-else>
                <span  class="nodeLeft">
                    <i class="fa fa-cubes"></i>
                </span>
                <span>{{scope.data.name}}</span>
            </div>
        </template>
      </Tree>
  </div>
</template>
<style lang="scss">
@import "../../assets/css/tree"; 
    
</style>
<script>
import Tree from "../tree/Tree";
export default {
  name:'horizontal',
  data() {
    return {
        data: [{
            name: '四大名著',
            type: "root",
            children: [
                {
                    name: '红楼梦',
                    children: [{
                        name: '贾宝玉',
                        type: 'property'
                    },
                    {
                        name: '林黛玉',
                        type: 'property'
                    },
                    {
                        name: '薛宝钗',
                        type: 'property'
                    }]
                },
                {
                    name: '西游记',
                    type: 'property',
                    children: [{
                        name: '唐僧',
                        type: 'property'
                    },
                    {
                        name: '孙悟空',
                        type: 'property'
                    }]
                },
                {
                    name: '三国演义',
                    type: 'property'
                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
                {
                    name: '水浒传',
                    type: 'property'

                },
            ]}, 
        ],
        translate: {
            x: 0,
            y: 0
        }
        };
    },
    components: {
        Tree
    },
  methods: {
    setTreeCenter() {
        const dimensions = this.$refs.treeContainer.$el.getBoundingClientRect();
        //移动未知
        this.translate = {
            x: 200,
            y: dimensions.height / 2
        };
    },
    handleClick(scope) {
      console.log(scope);
    },
    // pathFunc(linkData, start, end) {
    //   return "M" + end.x + "," + end.y + " " + start.x + "," + start.y;
    // }
  },
  mounted(){
      Object.assign(this.$data, this.$options.data.call(this));
      console.log(this.data);
    this.setTreeCenter();
  }
};
</script>
