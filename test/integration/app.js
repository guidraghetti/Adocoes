describe('Routes Menores', () => {
	const defaultMenor = {
		id: 1,
		name: 'Menor Default'
	};

	describe('Route GET /menores', () => {
		it('Deve retornar uma lista de menores', done => {
			request
			   .get('/menores')
			   .end((err, res) => { 
			   	    expect(res.body[0].id).to.be.eql(defaultMenor.id);
			   	    expect(res.body[0].name).to.be.eql(defaultMenor.name);	
			   	    done(err);
			   });
		});
	});
});