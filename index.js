module.exports = async (seneca, options = {}, bases = [], next = () => {}) => {
  const dns = require('dns');
  if (!options.bases || options.bases.length < 1) next();

  const result = await Promise.all(
    options.bases.map(async (base) => {
      const [host, port] = base.split(':');
      const ip = await new Promise((resolve, reject) => {
        dns.lookup(host, (err, res) => {
          if (err) return reject(err);
          return resolve(res);
        });
      });

      return `${ip}:${port}`;
    }),
  );

  next(result);
};
