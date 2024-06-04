const handler = async () => {
    return {
  statuscode: 200,
  Headers: {"content-Type": "text/plain"},
  body: "brad".toUpperCase()
    }
}

module.exports = {handler}
