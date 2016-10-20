(function () {
    'use strict';
    var addNode = function (node) {
        node.isOpen = true;
        node.children.push({
            name: 'child node',
            parent: node,
            isOpen: true,
            isParent: true,
            children: [],
            buttons: [
                {
                    title: 'Add',
                    icon: 'fa fa-plus',
                    click: addNode
                }, {
                    title: 'Delete',
                    icon: 'fa fa-trash',
                    click: function (node) {
                        node.parent && node.parent.children.$remove(node);
                    }
                }
            ]
        });
    };
    new Vue({
        el: '#demo',
        data: {
            title: 'Vue Tree Demo',
            option: {
                root: {
                    name: 'Root Node',
                    isParent: true,
                    isOpen: true,
                    openedIcon: 'fa fa-folder-open-o',
                    closedIcon: 'fa fa-folder-o',
                    children: [
                        {
                            name: 'Level1'
                        },
                        {
                            name: 'Level1 with icon',
                            icon: 'fa fa-cube',
                            title: '192.168.89.0'
                        },
                        {
                            name: 'Edit node',
                            buttons: [
                                {
                                    title: 'Edit',
                                    icon: 'fa fa-edit',
                                    click: function (node) {
                                        node.name = prompt('Editing node name, require string', node.name) || node.name;
                                    }
                                }
                            ]
                        },
                        {
                            name: 'Level1 has children',
                            icon: 'fa fa-folder',
                            openedIcon: 'fa fa-folder-open',
                            isOpen: false,
                            isParent: true,
                            children: [
                                {
                                    name: 'level2 - 1',
                                    icon: 'fa fa-file'
                                },
                                {
                                    name: 'level2 - 2',
                                    icon: 'fa fa-file'
                                },
                                {
                                    name: 'level2 - 3',
                                    icon: 'fa fa-file'
                                }
                            ]
                        },
                        {
                            name: 'Level1 add node',
                            isOpen: true,
                            isParent: true,
                            children: [],
                            buttons: [
                                {
                                    title: 'Add',
                                    icon: 'fa fa-plus',
                                    click: function (node) {
                                        node.isOpen = true;
                                        node.children.push({
                                            name: 'level2 node',
                                            parent: node,
                                            buttons: [
                                                {
                                                    title: 'Delete',
                                                    icon: 'fa fa-trash',
                                                    click: function (node) {
                                                        node.parent.children.$remove(node);
                                                    }
                                                }
                                            ]
                                        });
                                    }
                                }
                            ]
                        },
                        {
                            name: 'level1-addNode',
                            isOpen: true,
                            isParent: true,
                            children: [],
                            buttons: [
                                {
                                    title: 'Add',
                                    icon: 'fa fa-plus',
                                    click: addNode
                                }
                            ]
                        }
                    ]
                }
            }
        }
    });
})();