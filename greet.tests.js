describe('Testing the Greet Function' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       // assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
    it('the moment you enter Bob it should return Hello Bob' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       // assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
});