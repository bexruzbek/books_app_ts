"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.render('index', {
            title: 'Books'
        });
    }
}
exports.indexController = new IndexController();
