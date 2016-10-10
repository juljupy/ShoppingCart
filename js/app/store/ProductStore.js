/**
* @class ProductStore extiende Ext.data.Store
*/
Ext.define('ProductStore',{
	extend: 'Ext.data.Store',
	model : 'ProductModel',
	proxy: {
        type: 'ajax',
        url: 'js/data.json',
        reader: {
            root: 'products'
        }
    },
    autoLoad : true
});