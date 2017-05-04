export default

class JsonFilter{

    static filter(req) {
        var contype = req.headers['content-type']

		if (!contype || contype.indexOf('application/json') !== 0
			|| 'undefined' === typeof req.body || 'null' === typeof req.body)
			return "notjson"

		return JSON.parse(JSON.stringify(req.body))
    }
}