Ext.require(['Ext.Base', 'Ext.data.*', 'Ext.Component', 'Ext.view.*', 'Ext.form.field.*']);

Ext.util.Format.thousandSeparator = '.';
Ext.util.Format.decimalSeparator  = ',';

Ext.onReady(function(){
	Ext.create('ProductList', { id : 'productslist' });
	Ext.create('ProductCartList',{ id : 'cartlist' });
	Ext.create('ProductDetails', { id : 'productdetails' });

	Ext.create('CategoryStore',{
		listeners : {
			load : function(store, recs){
				var cc = document.getElementById('category_select');

				Ext.each(recs, function(r){
					var op = document.createElement("option");
					op.value = r.get('categori_id');
					op.text = r.get('name');
					cc.add(op);
				});
			}
		}
	});

	Ext.get('shopping-cart').dom.href = '#modal-text-cart';

	Ext.get('category_select').on('change', function(e, t){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filterBy(function(rec){
    		return ( Ext.Array.indexOf(rec.get('categories'), parseInt(t.value)) > -1 );
    	});
	});

	Ext.get('search_product').on('keyup', function(){ 
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filterBy(function(rec){
    		return ( rec.get('name').indexOf(me.dom.value) > -1 );
    	});
	});

	Ext.get('sort_name').on('click', function(){
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.sort('name');
	});

	Ext.get('sort_price').on('click', function(){
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.sort('price');
	});

	Ext.get('available').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filter('available', true);
	});

	Ext.get('not_available').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filter('available', false);
	});

	Ext.get('best_seller').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filter('best_seller', true);
	});

	Ext.get('max').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filterBy(function(rec){
    		return ( rec.get('price') > 30000 );
    	});
	});

	Ext.get('min').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();

    	productstore.filterBy(function(rec){
    		return ( rec.get('price') < 10000 );
    	});
	});

	Ext.get('clear_filters').on('click', function(){
		var me = this;
		var productlist = Ext.getCmp('productslist'),
    		productstore = productlist.getStore();

    	productstore.clearFilter();
	});
});