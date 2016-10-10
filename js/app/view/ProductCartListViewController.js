/**
* @class ProductCartListViewController extiende Ext.app.ViewController
*/
Ext.define('ProductCartListViewController',{
	extend: 'Ext.app.ViewController',
    alias: 'controller.productcartcontroller',

    onProductClick : function(dw, rec, item, index, e, eOpts){
    	console.log(rec);
    },

    onAddOrRemoveProductClick : function(dw, rec, item, index, e, eOpts){
    	var me = this;

    	var className = e.target.className;

        if(className.indexOf("button-del") != -1){
            rec.set({
                quant : rec.get('quant') - 1
            });

            rec.set({
                total_price : rec.get('price') * rec.get('quant')
            });

            if(rec.get('quant') == 0){
                me.getView().getStore().remove(rec);
            }
        }

        if(className.indexOf("button-add") != -1){
            rec.set({
                quant : rec.get('quant') + 1
            });

            rec.set({
                total_price : rec.get('price') * rec.get('quant')
            });
        }

        if(className.indexOf("button-remove") != -1){
            me.getView().getStore().remove(rec);
        }

        Ext.get('badge-cart').setHtml(me.getView().getStore().sum('quant'));
    }
});