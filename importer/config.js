module.exports = {
  remoteOsmUrl: 'http://download.geofabrik.de/europe/belgium-latest.osm.pbf',
  osmFilePath: './tmp/belgium-latest.osm.pbf',
  postgisConnection: 'postgis://gis:gis@autocomplete-addr-postgis/gis',
  cacheDir: './tmp/cache',
  imposmLogFilePath: './tmp/imposm.log',
  imposmExecutablePath: './imposm-0.6.0-alpha.4-linux-x86-64/imposm',
  elasticConnection: 'autocomplete-addr-elastic:9200',
};
