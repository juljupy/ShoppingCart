/**
* @class ProductList extiende Ext.view.View
*/
Ext.define('ProductList',{
	extend : 'Ext.view.View',

	store : Ext.create('ProductStore'),

	cls : 'layout',

	requires : [
        'ProductListViewController'
    ],

    controller : 'productcontroller',

	tpl : [
		'<tpl for=".">',
	        '<div class="product_item thumb-wrap">',
				'<img src="{img}" />',
				'<br/><span>{name:capitalize}</span>',
				'<hr>',
				'{price:usMoney}',
				'<div class="product_buttons">',
					'<tpl if="available">',
						'<a class="button-product fa fa-plus-square button-add"></a> &nbsp;',
					'</tpl>',
					'<a class="button-product fa fa-eye button-view"></a>',
				'</div>',
	        '</div>',
	    '</tpl>'
	],
	itemSelector: 'div.thumb-wrap',
	overItemCls : 'product_item_hover',
    emptyText: 'No hay productos disponibles',
    listeners : {
    	itemmousedown : 'onProductAddClick'/*,
    	itemclick : '',*/
    },
    renderTo: 'products_container'
});