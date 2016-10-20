(function () {
    'use strict';
    var VueTreeItem = Vue.extend({
        template: '<li :class="{parent_li: node.isParent}">' +
        '<i v-if="node.isParent" v-on:click="click(node)" class="fa icon-open-state" :class=\'{"fa-plus-square-o": !node.isOpen, "fa-minus-square-o": node.isOpen}\'></i>' +
        '<span :title="node.title">' +
        '<i v-if="showIcon(node)" :class="nodeClass(node)"></i> {{node.name}}</span>' +
        '<a v-for="btn in node.buttons" class="ml5" href="javascript:" :title="btn.title" v-on:click="btnClick(btn, node)"><i :class="btn.icon"></i></a>' +
        '<ul v-if="node.children && node.children.length" v-show="node.isOpen">' +
        '<vue-tree-item v-for="item in node.children" :node="item"></vue-tree-item>' +
        '</ul>' +
        '</li>',
        props: {
            node: {
                type: Object
            }
        },
        methods: {
            showIcon: function (node) {
                return node.icon || node.openedIcon || node.closedIcon;
            },
            nodeClass: function (node) {
                if (node.isOpen) {
                    return node.openedIcon || node.icon;
                } else {
                    return node.closedIcon || node.icon;
                }
            },
            click: function (node) {
                node.isOpen = !node.isOpen;
            },
            btnClick: function (btn, node) {
                if (typeof btn.click === 'function') {
                    btn.click(node);
                }
            }
        }
    });
    Vue.component('vue-tree-item', VueTreeItem);

    var VueTree = Vue.extend({
        template: '<div class="vue-tree"><ul>' +
        '<tree-item :node.sync="option.root"></tree-item>' +
        '</ul></div>',
        props: {
            option: {
                type: Object
            }
        },
        components: {
            'tree-item': VueTreeItem
        }
    });
    Vue.component('vue-tree', VueTree);
})();