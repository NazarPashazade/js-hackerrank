/*
 * Carriers V2
 * Documentation for Carriers web apis
 *
 * OpenAPI spec version: Carriers V2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.33
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CarriersV2);
  }
}(this, function(expect, CarriersV2) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ECommerceGoodsGroupsList', function() {
      beforeEach(function() {
        instance = new CarriersV2.ECommerceGoodsGroupsList();
      });

      it('should create an instance of ECommerceGoodsGroupsList', function() {
        // TODO: update the code to test ECommerceGoodsGroupsList
        expect(instance).to.be.a(CarriersV2.ECommerceGoodsGroupsList);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property parentId (base name: "parentId")', function() {
        // TODO: update the code to test the property parentId
        expect(instance).to.have.property('parentId');
        // expect(instance.parentId).to.be(expectedValueLiteral);
      });

      it('should have the property goodsNameAz (base name: "goodsNameAz")', function() {
        // TODO: update the code to test the property goodsNameAz
        expect(instance).to.have.property('goodsNameAz');
        // expect(instance.goodsNameAz).to.be(expectedValueLiteral);
      });

      it('should have the property goodsNameEn (base name: "goodsNameEn")', function() {
        // TODO: update the code to test the property goodsNameEn
        expect(instance).to.have.property('goodsNameEn');
        // expect(instance.goodsNameEn).to.be(expectedValueLiteral);
      });

      it('should have the property goodsNameRu (base name: "goodsNameRu")', function() {
        // TODO: update the code to test the property goodsNameRu
        expect(instance).to.have.property('goodsNameRu');
        // expect(instance.goodsNameRu).to.be(expectedValueLiteral);
      });

      it('should have the property isDeleted (base name: "isDeleted")', function() {
        // TODO: update the code to test the property isDeleted
        expect(instance).to.have.property('isDeleted');
        // expect(instance.isDeleted).to.be(expectedValueLiteral);
      });

    });
  });

}));
