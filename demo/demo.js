(function () {
    'use strict';
    var addNode = function (node) {
        node.isOpen = true;
        node.children.push({
            name: 'child node ' + node.children.length,
            parent: node,
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
                        node.parent.children.splice(node.parent.children.indexOf(node), 1);
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
                            isParent: true,
                            children: [],
                            buttons: [
                                {
                                    title: 'Add',
                                    icon: 'fa fa-plus',
                                    click: function (node) {
                                        node.isOpen = true;
                                        node.children.push({
                                            name: 'Level2 node ' + node.children.length,
                                            parent: node,
                                            buttons: [
                                                {
                                                    title: 'Delete',
                                                    icon: 'fa fa-trash',
                                                    click: function (node) {
                                                        node.parent.children.splice(node.parent.children.indexOf(node), 1);
                                                    }
                                                }
                                            ]
                                        });
                                    }
                                }
                            ]
                        },
                        {
                            name: 'Level1-addNode',
                            isParent: true,
                            children: [],
                            buttons: [
                                {
                                    title: 'Add',
                                    icon: 'fa fa-plus',
                                    click: addNode
                                }
                            ]
                        },
                        {
                            name: 'Level1 Ajax',
                            isParent: true,
                            children: [],
                            showLoading: true, // if (node.showLoading && node._loading) then show loading icon
                            onOpened: function (node) {
                                if (!node._loading) {
                                    Vue.set(node, 'children', []); // Clean old data
                                    node._loading = true; // Start Ajax
                                    setTimeout(function () { //
                                        node._loading = false; //Finish Ajax
                                        for (var i = 1; i < 6; i++) {
                                            node.children.push({name: 'Ajax Node ' + i});
                                        }
                                    }, 2000);
                                }
                            },
                            onClosed: function () {
                                // NOOP
                            }
                        }
                    ]
                }
            }
        }
    });
})();