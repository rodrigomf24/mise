'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Product name',
		trim: true
	},
	quantity: {
		type: Number,
		default: 0,
		required: 'Please fill Product quantity',
		trim: true
	},
	upc: {
		type: String,
		default: '',
		required: 'Please fill Product upc(unique product code)',
		trim: true
	},
	price: {
		type: Number,
		default: 0.0,
		required: 'Please fill Product price',
		trim: true
	},
	cost: {
		type: Number,
		default: 0.0,
		required: 'Please fill Product cost',
		trim: true
	},
	shipping: {
		type: Boolean,
		default: false,
		trim: true
	},
	imageThumb: {
		type: String,
		default: '',
		required: 'Please select Product thumbnail image',
		trim: true
	},
	image: {
		type: String,
		default: '',
		required: 'Please select Product image',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Product', ProductSchema);