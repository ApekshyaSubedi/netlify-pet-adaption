const handler = async () => {

  
  return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: "BRAD".toUpperCase()
  };
};

module.exports = { handler };