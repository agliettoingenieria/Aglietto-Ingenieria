/**
 * @type {import("@web/dev-server").DevServerConfig}
 */
export default {
  port: 5500,
  hostname: '127.0.0.1',
  watch: true,
  open: true,
  nodeResolve: {
    exportConditions: 'development',
  },
  appIndex: 'src/views/index.html',
  rootDir: '/',
};
