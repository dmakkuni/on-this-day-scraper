const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const test = require('node:test');

test('prints event descriptions returned by the API', () => {
	const script = `
    global.fetch = async () => ({
      ok: true,
      json: async () => ({
        date: 'November 11',
        events: [
          { year: '308', description: 'First historical event' },
          { year: '1918', description: 'Second historical event' }
        ]
      })
    });
    require('./dist/index.js');
  `;
	const result = spawnSync(process.execPath, ['-e', script], {
		cwd: require('node:path').resolve(__dirname, '..'),
		encoding: 'utf8'
	});

	assert.equal(result.status, 0, result.stderr);
	assert.match(result.stdout, /\[308\] First historical event/);
	assert.match(result.stdout, /\[1918\] Second historical event/);
	assert.doesNotMatch(result.stdout, /undefined/);
});
