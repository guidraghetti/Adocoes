export default

class ModelFilter{
	constructor(deps = {}) {
    }

    static filter(data, model, ignore) {
    	for(let modelProp in model)
    	{
    		if(ignore.indexOf(modelProp) >= 0) continue
    		if(!data.hasOwnProperty(modelProp)
    			|| typeof data[modelProp] != typeof model[modelProp]())
    			return false
    	}
    		
    	return true
    }
}