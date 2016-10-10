/**
* @class ProducCartModel extiende Ext.data.Model
*/
Ext.define('ProductCartModel',{
	extend: 'Ext.data.Model',
	fields : [
		{ name : 'id', type : 'int'},
		{ name : 'name', type : 'string'},
		{ 
			name : 'price', 
			type : 'int'
		},
		{ name : 'quant', type : 'int'},
		{ 
			name : 'total_price',
			type : 'int',

			convert: function (val, rec) {
        		return rec.get('price') * rec.get('quant');
    		}
		}
	],
	idProperty: 'id'
});