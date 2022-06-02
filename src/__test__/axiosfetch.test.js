

describe('fetcher function test', () => {
	it('Should be recive an url', async () => {
		const url = 'https://jsonplaceholder.typicode.com/comments';
		const response = await fetcher(url);
		expect(response.status).toBe(200);
	})	
})	