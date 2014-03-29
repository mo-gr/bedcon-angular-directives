describe('Noise Directive', function () {
    var HowlerSpy, playSpy, scope, element;
    // Load module
    beforeEach(module('Example'));
    // prepare mocks
    beforeEach(inject(function ($window) {
        playSpy = jasmine.createSpy('play');
        HowlerSpy = jasmine.createSpy('Howl').andReturn({play: playSpy});
        $window.Howl = HowlerSpy;
    }));
    // prepare directive
    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<div noise="test.mp3">Test</div>');
        $compile(element)(scope);
    }));
    // actual tests
    it('should create a new Howl', function() {
        expect(HowlerSpy).toHaveBeenCalled();
    });
    it('should play on click', function() {
        element.triggerHandler('click');
        expect(playSpy).toHaveBeenCalled();
    })
});