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
    describe('Operations', function() {
      beforeEach(function() {
        instance = new CarriersV2.Operations();
      });

      it('should create an instance of Operations', function() {
        // TODO: update the code to test Operations
        expect(instance).to.be.a(CarriersV2.Operations);
      });

      it('should have the property operationType (base name: "OperationType")', function() {
        // TODO: update the code to test the property operationType
        expect(instance).to.have.property('operationType');
        // expect(instance.operationType).to.be(expectedValueLiteral);
      });

      it('should have the property operationTypeDescription (base name: "OperationTypeDescription")', function() {
        // TODO: update the code to test the property operationTypeDescription
        expect(instance).to.have.property('operationTypeDescription');
        // expect(instance.operationTypeDescription).to.be(expectedValueLiteral);
      });

      it('should have the property operationDate (base name: "OperationDate")', function() {
        // TODO: update the code to test the property operationDate
        expect(instance).to.have.property('operationDate');
        // expect(instance.operationDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
