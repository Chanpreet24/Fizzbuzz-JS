describe('Fizzbuzz', function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new Fizzbuzz();
    });

    describe('multiples of 3', function() {
        it('fizzes for 3', function() {
          expect(fizzbuzz.play(3)).toEqual('Fizz');
        });
    });
});