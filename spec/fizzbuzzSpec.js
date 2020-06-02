describe('Fizzbuzz', function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new Fizzbuzz();
    });

    describe('multiples of 3', function() {
        it('fizzes for 3', function() {
          expect(fizzbuzz.play(3)).toEqual('Fizz');
        });
        
        it('fizzes for 6', function() {
            expect(fizzbuzz.play(6)).toEqual('Fizz');
        });
    });

    describe('multiples of 5', function() {
        it('buzzes for 5', function(){
            expect(fizzbuzz.play(5)).toEqual('Buzz')
        });

        it('buzzes for 10', function(){
            expect(fizzbuzz.play(10)).toEqual('Buzz')
        });
    });

    describe('multiples of 15', function() {
        it('We have a Fizzbuzz for 15', function() {
            expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
        });
    });
});
