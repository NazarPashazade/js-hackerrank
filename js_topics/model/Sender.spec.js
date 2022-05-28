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
    describe('Sender', function() {
      beforeEach(function() {
        instance = new CarriersV2.Sender();
      });

      it('should create an instance of Sender', function() {
        // TODO: update the code to test Sender
        expect(instance).to.be.a(CarriersV2.Sender);
      });

      it('should have the property carrierCompany (base name: "carrierCompany")', function() {
        // TODO: update the code to test the property carrierCompany
        expect(instance).to.have.property('carrierCompany');
        // expect(instance.carrierCompany).to.be(expectedValueLiteral);
      });

      it('should have the property companyName (base name: "companyName")', function() {
        // TODO: update the code to test the property companyName
        expect(instance).to.have.property('companyName');
        // expect(instance.companyName).to.be(expectedValueLiteral);
      });

      it('should have the property isLocalCompany (base name: "isLocalCompany")', function() {
        // TODO: update the code to test the property isLocalCompany
        expect(instance).to.have.property('isLocalCompany');
        // expect(instance.isLocalCompany).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property countryName (base name: "countryName")', function() {
        // TODO: update the code to test the property countryName
        expect(instance).to.have.property('countryName');
        // expect(instance.countryName).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property trackingId (base name: "trackingId")', function() {
        // TODO: update the code to test the property trackingId
        expect(instance).to.have.property('trackingId');
        // expect(instance.trackingId).to.be(expectedValueLiteral);
      });

    });
  });

}));