/**
* @class ProductDetails extiende Ext.Component
**/
Ext.define('ProductDetails',{
	extend : 'Ext.Component',
	data : { name : ''},
	tpl : [
    	'<div class="modal-inner">',
        	'<header id="modal-label"></header>',
        	'<div class="modal-content">',
        		'<div class="product_img">',
        			'<img src="{img}" />',
        		'</div>',
        		'<div class="details">',
        			'<h3>{name}</h3><br>',
        			'<p>Varlor: {price:usMoney}</p>',
        			'Descripción:',
        			'<p>{description}</p>',
        		'</div>',
        	'</div>',
        	'<footer><!-- Footer --></footer>',
    	'</div>'
	],

	renderTo : 'product_details'
});