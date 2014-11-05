var app = angular.module('algor', [])
    .controller('algorCtrl', function($scope, $interval) {
        $scope.data = [];
        var storgeArr = [];
        // init function
        var initFunc = function() {
            for (var i = 0; i < 10; i++) {
                $scope.data.push(Math.floor(Math.random() * 100 + 1));
            }
            storgeArr = $scope.data.slice(0);
        };
        // swap two array value
        var swapVal = function(arr, i, j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        };
        // bubble sort by step
        var bubbleSortStep = function(arr) {
            for (var i = 1; i < arr.length; i++) {
                if (arr[i - 1] < arr[i]) {
                    swapVal(arr, i - 1, i);
                }
            }
            // print info
            console.info('arr', $scope.data);
        };
        // bubble sort
        var bubbleSort = function(arr) {
            var start = new Date().getTime();
            for (var j = 0; j < arr.length; j++) {
                for (var i = 1; i < arr.length; i++) {
                    if (arr[i - 1] < arr[i]) {
                        swapVal(arr, i - 1, i);
                    }
                }
            }
            var time = new Date().getTime() - start ;
            $scope.useTime = "Used time : " + time ;
        };
        // scope function
        initFunc();
        $scope.bubbleSortStep = function(arr) {
            return bubbleSortStep(arr);
        };
        $scope.bubbleSort = function(arr) {
            return bubbleSort(arr);
        };
        $scope.resetFunc = function() {
            console.info('storgeArr',storgeArr);
            $scope.data = storgeArr.slice(0);
        };

    });
