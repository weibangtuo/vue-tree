# Vue Tree View Component

  Support `Vue.js` 1.0+

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

```javascript
{
  name: 'Node Name',
  title: 'Node Tag title attr',
  isParent: true, //
  isOpen: true, // Control node to fold or unfold
  icon: 'fa fa-folder', // Or other custom icons call by class name
  openedIcon: 'fa fa-folder-open', // [option] For parent. Show when isOpen == true, show icon if it's null or empty 
  closedIcon: 'fa fa-folder', // [option] For parent. Show when isOpen != true, show icon if it's null or empty 
  children: [], // for parent node only
  buttons: [ // []
    {
      title: 'icon button tag title attr', //[option]
      icon: 'fa fa-edit',
      click: function (node) { //[option]
          //
      }
    }
    //...
  ]
}
```




## License

Copyright (c) 2016 weibangtuo. Under MIT License.
