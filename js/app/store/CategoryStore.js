/**
* @class CategoryStore extiende Ext.data.Store
*/
Ext.define('CategoryStore',{
	extend: 'Ext.data.Store',
	model : 'CategoryModel',
	proxy: {
        type: 'ajax',
        url: 'js/data.json',
        reader: {
            root: 'categories'
        }
    },
    autoLoad : true
});