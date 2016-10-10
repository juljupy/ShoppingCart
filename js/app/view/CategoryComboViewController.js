/**
* @class CategoryComboViewController extiende Ext.app.ViewController
*/
Ext.define('CategoryComboViewController',{
	extend: 'Ext.app.ViewController',
    alias: 'controller.categorycombocontroller',

    onSelectCategory : function(combo, newValue, oldValue, eOpts){
    	var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filterBy(function(rec){
    		return ( Ext.Array.indexOf(rec.get('categories'), newValue) > -1 );
    	});
    }
});