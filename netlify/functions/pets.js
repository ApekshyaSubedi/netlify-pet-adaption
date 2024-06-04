const handler = async () => {
    return {
  statuscode: 200,
  Headers: { "Content-Type": "text/plain"},
  body: "brad".toUpperCase()
    }
}

module.exports = {handler}
