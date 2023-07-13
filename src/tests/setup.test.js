import { executeFlow } from "../lib/flow";
import { request } from "../lib/request";
import { GATEWAY } from "../constants/servers";

export const options = {};

export function setup() { }

export const test = () => request({
	server: GATEWAY,
	method: "GET",
	path: "/",
})

export default function () {
	executeFlow([
		test
	]);
}