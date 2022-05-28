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
    describe('CarriersDataType', function() {
      beforeEach(function() {
        instance = CarriersV2.CarriersDataType;
      });

      it('should create an instance of CarriersDataType', function() {
        // TODO: update the code to test CarriersDataType
        expect(instance).to.be.a('object');
      });

      it('should have the property declarations', function() {
        expect(instance).to.have.property('declarations');
        expect(instance.declarations).to.be("Declarations");
      });

      it('should have the property deletedDeclarations', function() {
        expect(instance).to.have.property('deletedDeclarations');
        expect(instance.deletedDeclarations).to.be("DeletedDeclarations");
      });

    });
  });

}));