/**
* @class CategoryCombo extiende Ext.form.field.ComboBox
*/
Ext.define('CategoryCombo',{
	extend : 'Ext.form.field.ComboBox',

	requires : [
        'CategoryComboViewController'
    ],

    controller : 'categorycombocontroller',

	fieldLabel: 'Categorías',
    store: Ext.create('CategoryStore'),
    queryMode: 'local',
    displayField: 'name',
    valueField: 'categori_id',
    renderTo: 'categories',
    listeners : {
    	change : 'onSelectCategory'
    }
});