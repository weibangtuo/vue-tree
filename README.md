# Vue Tree View Component

  Support `Vue.js` 2.0+

## Usage

Add the following required resources.

```html
<link rel="stylesheet" href="[You Path]font-awesome/4.+/css/font-awesome.min.css">
<link rel="stylesheet" href="src/tree.vue.css">

<script src="[You Path]vue.js"></script>
<script src="src/tree.vue.js"></script>
```

Add the component in your vue view.

```html
<div id="app">
    <vue-tree :option="option"></vue-tree>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            option: {
                root: { //Root Node, see Node Options
                    name: 'Root Node',
                    isParent: true,
                    isOpen: true,
                    children: []
                }
            }
        }
</script>
```

## Node Options

  `[opt]` means optional property.

```javascript
{
  name: 'Node Name',
  title: 'Node Tag title attr',
  isParent: true, // Requested for parent node
  isOpen: false, // [opt] Control node to fold or unfold
  icon: 'fa fa-folder', //[opt] Icon class name
  openedIcon: 'fa fa-folder-open', // [opt] For parent. Show when isOpen == true, show icon if it's null or empty 
  closedIcon: 'fa fa-folder', // [opt] For parent. Show when isOpen != true, show icon if it's null or empty 
  children: [], // Requested for parent node
  buttons: [ // [opt]
    {
      title: 'icon button tag title attr', //[opt]
      icon: 'fa fa-edit',
      click: function (node) { //[opt]
          //
      }
    }
    //...
  ],
  showLoading: false, // [opt] For parent, when `node.showLoading && node._loading` and node is opened then show loading icon
  onOpened: function (node) {}, // [opt]
  onClosed: function (node) {} // [opt]
}
```




## License

Copyright (c) 2016 weibangtuo. Under MIT License.
