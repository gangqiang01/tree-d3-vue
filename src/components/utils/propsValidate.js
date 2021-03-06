import {
    oneOf,
    typeOf
} from './assist'


export const treeProps = {
        initData: {
            type: Array,
            required: true
        },
        //拓扑图的方向
        orientation: {
            type: String,
            default: 'horizontal',
            // default: 'vertical',
            validator(value) {
                return oneOf(value, ['horizontal', 'vertical'])
            }
        },
        // 是否收缩
        collapsible: {
            type: Boolean,
            default: true
        }, 
        //调节父node和子node的距离       
        deepFactor: {
          type: Number,
          default: 0.65
        },
        nodeSvgShape: {
            type: String,
            default: 'circle'
        },
        nodeSvgShapeAttr: {
            type: Object,
            default () {
                return {
                    r: 10
                }
            }
        },
        pathFunc: {
            default: 'fish'
        },
        nodeSize: {
            type: Object,
            default () {
                return {
                    x: 182,
                    y: 32
                }
            }
        },
        //node之间的距离
        separation: {
            type: Object,
            default () {
                return {
                    siblings: 1.5,
                    nonSiblings: 1.5
                }
            }
        },
        zoomable: {
            type: Boolean,
            default: true
        },
        zoom: 1,
        scaleExtent: {
            type: Object,
            default () {
                return {
                    min: 0.1,
                    max: 1
                }
            }
        },
        translate: {
            type: Object,
            default () {
                return {
                    x: 0,
                    y: 0
                }
            },
            validator(value) {
                return typeOf(value.x) === 'number' && typeOf(value.y) === 'number'
            }
        },
        scale: {
            type: Number,
            default: 1
        },
        transitionDuration: {
            type: Number,
            default: 500
        },
        allowForeignObjects: {
            type: Boolean,
            default: true
        },
        renderForeignObjects: {
            type: Function,
            default () {
                return '';
            }
        }
    }
