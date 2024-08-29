(function() {
    'use strict'
    
    angular
    .module('app')
    .factory('Store', function () {
  
        function Main () {
            this.items = []

            this.add = function (item) {
                this.items.push(item)
                return item
            }

            this.remove = function (id) {
                if (this.exist(id)) {
                    var item = this.find(function (item) {
                        return item._id === id
                    })

                    var items = item && _.without(this.items, item)
                    this.items = items 
                    return true // this.items.length !== items.length
                }

                return false
            }

            this.exist = function (id) {
                return this.find(function (item) {
                    return item._id === id
                }) ? true : false
            }

            this.drop = function () {
                this.items = []
                // return this.items
            }

            this.set = function (items) {
                this.items = items
            }

            this.list = function () {
                return this.items
            }

            this.load = function (items) {
                this.items = items
            }

            this.find = function (rule) {
                return _.find(this.items, function (item) {
                    return rule && rule(item) 
                })
            }

            this.assignKey = function (action, id, flag) {
                var _flag = flag || 'Visited'
                var item = this.find(function (item) {  return item._id === id})
                item && (item[action.concat(_flag)] = true) 
                return item
            }
        }
      return Main
    });
  
  })();
  