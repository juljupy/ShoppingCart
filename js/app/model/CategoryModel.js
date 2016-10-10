/**
* @class CategoryModel extiende Ext.data.Model
*/
Ext.define('CategoryModel',{
	extend: 'Ext.data.Model',
	fields : [
		{ name : 'categori_id', type : 'int'},
		{ name : 'name', type : 'string'}
	],
	idProperty: 'categori_id'
});