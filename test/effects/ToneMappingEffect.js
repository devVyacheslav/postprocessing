import test from "ava";
import { ToneMappingEffect } from "../../build/postprocessing.esm.js";

test("can be created and destroyed", t => {

	const object = new ToneMappingEffect();
	object.dispose();

	t.truthy(object);

});
