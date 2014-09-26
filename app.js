(function() {
	var app = angular.module('thirteenVirtues', []);

	app.controller('VirtuesController', function(){
		this.virtues = virtues;
	});

	var virtues = [
			{
				name: "Temperance",
				conditions: "Eat not to dullness, drink not to elevation.",
				status: true
			},
			{
				name: "Silence",
				conditions: "Speak not but what may benefit others or yourself; avoid trifling conversation.",
				status: true
			},
			{
				name: "Order",
				conditions: "Let all your things have their places; let each part of your business have its time.",
				status: true
			},
			{
				name: "Resolution",
				conditions: "Resolve to perform what you ought; perform without fail what you resolve.",
				status: true
			},
			{
				name: "Frugality",
				conditions: "Make no expense but to do good to others or yourself; i.e., waste nothing.",
				status: true
			},
			{
				name: "Industry",
				conditions: "Lose no time; be always employ'd in something useful; cut off all unnecessary actions.",
				status: true
			},
			{
				name: "Sincerity",
				conditions: "Use no hurtful deceit; think innocently and justly, and, if you speak, speak accordingly.",
				status: true
			},
			{
				name: "Justice",
				conditions: "Wrong none by doing injuries, or omitting the benefits that are your duty.",
				status: true
			},
			{
				name: "Moderation",
				conditions: "Avoid extremes; forbear resenting injuries so much as you think they deserve.",
				status: true
			},
			{
				name: "Cleanliness",
				conditions: "Tolerate no uncleanliness in body, clothes, or habitation.",
				status: true
			},
			{
				name: "Tranquility",
				conditions: "Be not disturbed at trifles, or at accidents common or unavoidable.",
				status: true
			},
			{
				name: "Chastity",
				conditions: "Rarely use venery but for health or offspring, never to dullness, weakness, or the injury of your own or another's peace or reputation.",
				status: true
			},
			{
				name: "Temperance",
				conditions: "Imitate Jesus and Socrates.",
				status: true
			}
		];
})();

document.addEventListener('DOMContentLoaded', function(e) {
  var closeButton = document.querySelector('#close-button');
  closeButton.addEventListener('click', function(e) {
    window.close();
  });
});


var now = new Date();
var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");