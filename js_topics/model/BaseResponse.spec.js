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
    describe('BaseResponse', function() {
      beforeEach(function() {
        instance = new CarriersV2.BaseResponse();
      });

      it('should create an instance of BaseResponse', function() {
        // TODO: update the code to test BaseResponse
        expect(instance).to.be.a(CarriersV2.BaseResponse);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property exception (base name: "exception")', function() {
        // TODO: update the code to test the property exception
        expect(instance).to.have.property('exception');
        // expect(instance.exception).to.be(expectedValueLiteral);
      });

    });
  });

}));