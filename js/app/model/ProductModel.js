/**
* @class ProducModel extiende Ext.data.Model
*/
Ext.define('ProductModel',{
	extend: 'Ext.data.Model',
	fields : [
		{ name : 'id', type : 'int'},
		{ name : 'name', type : 'string'},
		{ 
			name : 'price',
			convert : function(val){
				return parseInt(val.replace('.',''));
			}
			//type : 'int'
		},
		{ name : 'available', type : 'bool'},
		{ name : 'best_seller', type : 'bool'},
		{ name : 'categories'},
		{ name : 'img', type : 'string'},
		{ name : 'description', type : 'string'}
	],
	idProperty: 'id'
});