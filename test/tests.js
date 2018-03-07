var object = require('../src/index');
var expect = require('chai').expect;


describe('object测试', function() {
    it('合并对象', function() {
        expect(object.assign({a:0,b:1},{b:2,c:3})).to.be.deep.equal({a:0,b:2,c:3});
    });
});
