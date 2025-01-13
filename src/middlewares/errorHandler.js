module.exports = (err, req, res) => {
  if (err.code) {
    res.status(500).json({ error: err.details || "gRPC Error" });
  } else {
    res
      .status(err.status || 500)
      .json({ error: err.message || "Internal Server Error" });
  }
};
