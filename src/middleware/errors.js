export function notFound(req, res) { res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` }); }
export function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || (err.code === 'ER_DUP_ENTRY' ? 409 : 500);
  res.status(status).json({ error: err.code === 'ER_DUP_ENTRY' ? 'A record with this value already exists.' : (err.message || 'Internal server error') });
}
export function badRequest(message) { const e = new Error(message); e.status = 400; return e; }
