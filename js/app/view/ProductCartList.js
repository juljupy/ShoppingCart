/**
* @class ProductCartList extiende Ext.view.View
*/
Ext.define('ProductCartList',{
	extend : 'Ext.view.View',

	store : Ext.create('ProductCartStore'),

	requires : [
        'ProductCartListViewController'
    ],

    controller : 'productcartcontroller',

	tpl : [
    	'<div class="modal-inner">',
        	'<header id="modal-label">Mi Carrito</header>',
        	'<div class="modal-content">',
        		'<tpl for=".">',
	        		'<div style="margin-bottom: 10px;" class="thumb-wrap">',
			          '<br/><span>{name:capitalize}</span> &nbsp;',
			          '<span class="product_quant_val">{quant}</span>&nbsp;<span class="product_value">{total_price:usMoney}</span>',
			          '&nbsp;<button><i class="fa fa-minus-square button-del"></i></button> <button><i class="fa fa-plus-square button-add"></i></button> <button><i class="fa fa-trash button-remove"></i></button>',
			          '<hr>',
			        '</div>',
			    '</tpl>',
        	'</div>',
        	'<footer><!-- Footer --></footer>',
    	'</div>'
	],
	itemSelector: 'div.thumb-wrap',
    emptyText: 'No hay productos en el carrito',
    listeners : {
    	//itemclick : 'onProductClick',
    	itemmousedown : 'onAddOrRemoveProductClick'
    },
    renderTo: 'products_cart_container'
});