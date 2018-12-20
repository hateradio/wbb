module.exports = function (grunt) {

  const fs = require('fs');
  const js = fs.readFileSync('whutbbcode.user.js', 'utf8');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  function getVersions() {
    let version, rawVersion, updateVersion;

    version = js.match(/version\s+(\d+(?:.+)?)/)[1];
    rawVersion = version.replace(/[.]/g, '').padEnd(4, '0'); // padEnd requires node >= 8.x
    updateVersion = js.match(/version\:\s?(\d+)/)[1];

    return {
      version,
      rawVersion,
      updateVersion
    };
  }

  function writeJson(obj, filename) {
    const pretty = JSON.stringify(obj, null, 2) + '\n';

    fs.writeFileSync(filename, pretty, 'utf8');

    grunt.log.write(`Updated ${filename}`).ok();

    return true;
  }

  grunt.registerTask('version', 'Check version', function () {
    const {
      version,
      rawVersion,
      updateVersion
    } = getVersions();

    if (updateVersion !== rawVersion) {
      grunt.log.error('Versions do not match. Update them correctly!');
      grunt.log.write(version, rawVersion, updateVersion);
      return false;
    }

    grunt.log.write(`Script versions are ${version} and ${updateVersion}`).ok();
  })

  grunt.registerTask('update', 'Generate update.json', function () {
    const update = {
      name: 'WhutBBCode?',
      version: +getVersions().updateVersion,
      page: "https://greasyfork.org/en/scripts/1024-whutbbcode"
    };

    return writeJson(update, './docs/wbb.json');
  });

  grunt.registerTask('package', 'Update package.json', function () {
    const pkg = JSON.parse(fs.readFileSync('package.json'));

    const [major, minor = 0, mod = 0, fix = 0] = getVersions().version.split(/[.]/);

    pkg.version = `${major}.${minor}.${mod}.${fix}`;

    return writeJson(pkg, 'package.json');
  });

  grunt.registerTask('readme', 'Generate readme.md', function () {
    let template, updates, md;

    template = fs.readFileSync('readme.template.md', 'utf8');
    updates = js.substring(js.indexOf('### Updates'), js.indexOf('// #Updates') - 1).trim();
    md = template.replace('### Updates', updates) + '\n';

    fs.writeFileSync('readme.md', md, 'utf8');

    grunt.log.write('Updated readme.md').ok();
  });

  grunt.registerTask('default', `Let's Go!`, function () {
    grunt.log.write('Ensuring all is right . . .').ok();

    grunt.task.run('version');
    grunt.task.run('readme');
    grunt.task.run('update');
    grunt.task.run('package');

    grunt.log.write(`PS: don't forget about @updated`);
  });

};
