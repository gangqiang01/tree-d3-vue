<template>
  <div class="tree-progress">
      <Tree 
        ref="treeContainer"
        :nodeSize="{x:240,y:80}"
        :initData="data"
        :translate="translate"
        pathFunc="fish"
      >
      <template slot-scope="scope">
        <template v-if="scope.depth === 0">
            <div class="base-node salad-root">
              <p>{{scope.data.name}}</p>
            </div>
        </template>
        <template v-else>
          <div class="base-node salad" @click="handleClick(scope)">
            <p>{{scope.data.name}}</p>
          </div>
        </template>

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
            children: [
                {
                    name: '红楼梦',
                    children: [{
                        name: '贾宝玉',
                    },
                    {
                        name: '林黛玉',
                    },
                    {
                        name: '薛宝钗',
                    }]
                },
                {
                    name: '西游记',
                    children: [{
                        name: '唐僧',
                    },
                    {
                        name: '孙悟空',
                    },
                    {
                        name: '八戒',
                    }]
                },
                {
                    name: '三国演义',
                },
                {
                    name: '水浒传',

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
    pathFunc(linkData, start, end) {
      return "M" + end.x + "," + end.y + " " + start.x + "," + start.y;
    }
  },
  mounted(){
    this.setTreeCenter();
  }
};
</script>
