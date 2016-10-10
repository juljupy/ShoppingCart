/**
* @class ProductListViewController extiende Ext.app.ViewController
*/
Ext.define('ProductListViewController',{
	extend: 'Ext.app.ViewController',
    alias: 'controller.productcontroller',

    onProductAddClick : function(dw, rec, item, index, e, eOpts){
        var me = this;

        var className = e.target.className;

        if(className.indexOf("button-add") != -1){
            var cart = Ext.getCmp('cartlist'),
                cartstore = cart.getStore(),
                cartrecindex = cartstore.find('id', rec.get('id'));

            if(cartrecindex > -1){
                
                var r = cartstore.getAt(cartrecindex);

                r.set({
                    quant: r.get('quant') + 1
                });

            } else {
                cartstore.add({
                    id : rec.get('id'),
                    name : rec.get('name'),
                    price : rec.get('price'),
                    quant: 1
                });
            }

            Ext.get('badge-cart').setHtml(cartstore.sum('quant'));
        }

        if(className.indexOf("button-view") != -1){
            var productdetails = Ext.getCmp('productdetails');
            e.target.href = '#modal-text';

            productdetails.update(rec.data);
        }
    }
});