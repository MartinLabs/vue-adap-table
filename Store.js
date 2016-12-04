(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdapStore = function () {
    function AdapStore(defaultColumn, callback) {
        _classCallCheck(this, AdapStore);

        this.orderBy = defaultColumn;
        this.callback = callback;
        this.asc = true;
        this.count = 0;
        this.currentPage = 0;
        this.pageCount = 0;
        this.pageSize = 20;
        this.query = "";

        this.searchByQuery = this.debounce(this._searchByQuery, 500);
    }

    _createClass(AdapStore, [{
        key: "setOrder",
        value: function setOrder(column, asc) {

            if (asc != null) {
                this.asc = asc;
            } else if (this.orderBy == column) {
                this.asc = !this.asc;
            } else {
                this.asc = true;
            }

            this.orderBy = column;
            this.currentPage = 0;
            this.search();
        }
    }, {
        key: "setCount",
        value: function setCount(count) {
            this.count = count;
            if (this.pageSize) {
                this.pageCount = Math.floor(this.count / this.pageSize);
            }
        }
    }, {
        key: "setCurrentPage",
        value: function setCurrentPage(page) {
            this.currentPage = page;
            this.search();
        }
    }, {
        key: "setPageSize",
        value: function setPageSize(pageSize) {
            this.pageSize = pageSize;
            if (this.pageSize) {
                this.currentPage = 0;
                this.pageCount = Math.floor(this.count / this.pageSize);
                this.search();
            }
        }
    }, {
        key: "previousPage",
        value: function previousPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
                this.search();
            }
        }
    }, {
        key: "nextPage",
        value: function nextPage() {
            if (this.currentPage < this.pageCount) {
                this.currentPage++;
                this.search();
            }
        }
    }, {
        key: "_searchByQuery",
        value: function _searchByQuery() {
            if (!this.query || !this.query.length || this.query.length > 2) {
                this.currentPage = 0;
                this.search();
            }
        }
    }, {
        key: "search",
        value: function search() {
            if (this.callback && !this.callingBack) {
                this.callingBack = true;
                this.callback({
                    query: this.query,
                    page: this.currentPage,
                    limit: this.pageSize,
                    orderBy: this.orderBy,
                    ascending: this.asc
                });
                this.callingBack = false;
            }
        }
    }, {
        key: "debounce",
        value: function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this,
                    args = arguments;
                var later = function later() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
    }]);

    return AdapStore;
}();

exports.default = AdapStore;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RvcmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sUztBQUNGLHVCQUFZLGFBQVosRUFBMkIsUUFBM0IsRUFBcUM7QUFBQTs7QUFDakMsYUFBSyxPQUFMLEdBQWUsYUFBZjtBQUNBLGFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGFBQUssR0FBTCxHQUFXLElBQVg7QUFDQSxhQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsYUFBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBSyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxhQUFLLGFBQUwsR0FBcUIsS0FBSyxRQUFMLENBQWMsS0FBSyxjQUFuQixFQUFtQyxHQUFuQyxDQUFyQjtBQUNIOzs7O2lDQUVRLE0sRUFBUSxHLEVBQUs7O0FBRWxCLGdCQUFJLE9BQU8sSUFBWCxFQUFpQjtBQUNiLHFCQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0gsYUFGRCxNQUVPLElBQUksS0FBSyxPQUFMLElBQWdCLE1BQXBCLEVBQTRCO0FBQy9CLHFCQUFLLEdBQUwsR0FBVyxDQUFDLEtBQUssR0FBakI7QUFDSCxhQUZNLE1BRUE7QUFDSCxxQkFBSyxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUVELGlCQUFLLE9BQUwsR0FBZSxNQUFmO0FBQ0EsaUJBQUssV0FBTCxHQUFtQixDQUFuQjtBQUNBLGlCQUFLLE1BQUw7QUFDSDs7O2lDQUVRLEssRUFBTztBQUNaLGlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsZ0JBQUksS0FBSyxRQUFULEVBQW1CO0FBQ2YscUJBQUssU0FBTCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsR0FBYSxLQUFLLFFBQTdCLENBQWpCO0FBQ0g7QUFDSjs7O3VDQUVjLEksRUFBTTtBQUNqQixpQkFBSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsaUJBQUssTUFBTDtBQUNIOzs7b0NBRVcsUSxFQUFVO0FBQ2xCLGlCQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxnQkFBSSxLQUFLLFFBQVQsRUFBbUI7QUFDZixxQkFBSyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EscUJBQUssU0FBTCxHQUFpQixLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsR0FBYSxLQUFLLFFBQTdCLENBQWpCO0FBQ0EscUJBQUssTUFBTDtBQUNIO0FBQ0o7Ozt1Q0FFYztBQUNYLGdCQUFJLEtBQUssV0FBTCxHQUFtQixDQUF2QixFQUEwQjtBQUN0QixxQkFBSyxXQUFMO0FBQ0EscUJBQUssTUFBTDtBQUNIO0FBQ0o7OzttQ0FFVTtBQUNQLGdCQUFJLEtBQUssV0FBTCxHQUFtQixLQUFLLFNBQTVCLEVBQXVDO0FBQ25DLHFCQUFLLFdBQUw7QUFDQSxxQkFBSyxNQUFMO0FBQ0g7QUFDSjs7O3lDQUVnQjtBQUNiLGdCQUFJLENBQUMsS0FBSyxLQUFOLElBQWUsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUEzQixJQUFxQyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQTdELEVBQWdFO0FBQzVELHFCQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxxQkFBSyxNQUFMO0FBQ0g7QUFDSjs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBSyxRQUFMLElBQWlCLENBQUMsS0FBSyxXQUEzQixFQUF3QztBQUNwQyxxQkFBSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EscUJBQUssUUFBTCxDQUFjO0FBQ1YsMkJBQU8sS0FBSyxLQURGO0FBRVYsMEJBQU0sS0FBSyxXQUZEO0FBR1YsMkJBQU8sS0FBSyxRQUhGO0FBSVYsNkJBQVMsS0FBSyxPQUpKO0FBS1YsK0JBQVcsS0FBSztBQUxOLGlCQUFkO0FBT0EscUJBQUssV0FBTCxHQUFtQixLQUFuQjtBQUNIO0FBQ0o7OztpQ0FFUSxJLEVBQU0sSSxFQUFNLFMsRUFBVztBQUNuQyxnQkFBSSxPQUFKO0FBQ0EsbUJBQU8sWUFBVztBQUNqQixvQkFBSSxVQUFVLElBQWQ7QUFBQSxvQkFBb0IsT0FBTyxTQUEzQjtBQUNBLG9CQUFJLFFBQVEsU0FBUixLQUFRLEdBQVc7QUFDdEIsOEJBQVUsSUFBVjtBQUNBLHdCQUFJLENBQUMsU0FBTCxFQUFnQixLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO0FBQ2hCLGlCQUhEO0FBSUEsb0JBQUksVUFBVSxhQUFhLENBQUMsT0FBNUI7QUFDQSw2QkFBYSxPQUFiO0FBQ0EsMEJBQVUsV0FBVyxLQUFYLEVBQWtCLElBQWxCLENBQVY7QUFDQSxvQkFBSSxPQUFKLEVBQWEsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNiLGFBVkQ7QUFXSTs7Ozs7O1FBSWlCLE8sR0FBYixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIEFkYXBTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoZGVmYXVsdENvbHVtbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vcmRlckJ5ID0gZGVmYXVsdENvbHVtbjtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmFzYyA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gMjA7XG4gICAgICAgIHRoaXMucXVlcnkgPSBcIlwiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFyY2hCeVF1ZXJ5ID0gdGhpcy5kZWJvdW5jZSh0aGlzLl9zZWFyY2hCeVF1ZXJ5LCA1MDApO1xuICAgIH1cbiAgICBcbiAgICBzZXRPcmRlcihjb2x1bW4sIGFzYykge1xuICAgICAgICBcbiAgICAgICAgaWYgKGFzYyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFzYyA9IGFzYztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9yZGVyQnkgPT0gY29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLmFzYyA9ICF0aGlzLmFzYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXNjID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5vcmRlckJ5ID0gY29sdW1uO1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gICAgXG4gICAgc2V0Q291bnQoY291bnQpIHtcbiAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICAgICAgICBpZiAodGhpcy5wYWdlU2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMuY291bnQgLyB0aGlzLnBhZ2VTaXplKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgIH1cbiAgICBcbiAgICBzZXRQYWdlU2l6ZShwYWdlU2l6ZSkge1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VTaXplKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcbiAgICAgICAgICAgIHRoaXMucGFnZUNvdW50ID0gTWF0aC5mbG9vcih0aGlzLmNvdW50IC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByZXZpb3VzUGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlLS07XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IHRoaXMucGFnZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlKys7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIF9zZWFyY2hCeVF1ZXJ5KCkge1xuICAgICAgICBpZiAoIXRoaXMucXVlcnkgfHwgIXRoaXMucXVlcnkubGVuZ3RoIHx8IHRoaXMucXVlcnkubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2sgJiYgIXRoaXMuY2FsbGluZ0JhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGluZ0JhY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgcGFnZTogdGhpcy5jdXJyZW50UGFnZSxcbiAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgICAgICAgICBvcmRlckJ5OiB0aGlzLm9yZGVyQnksXG4gICAgICAgICAgICAgICAgYXNjZW5kaW5nOiB0aGlzLmFzY1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhbGxpbmdCYWNrID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdHZhciB0aW1lb3V0O1xuXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXHRcdHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGltZW91dCA9IG51bGw7XG5cdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHR9O1xuXHRcdHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cdFx0aWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdH07XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgeyBBZGFwU3RvcmUgYXMgZGVmYXVsdCB9Il19
