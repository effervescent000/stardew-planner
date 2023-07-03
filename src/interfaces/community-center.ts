export interface BundleGroup {
	location: string; // the room the bundle is located in,
	name: string; // description of the bundle
	bundles: Bundle[];
	completed: boolean;
}

export interface Bundle {
	name: string; // name of the bundle
	completed: boolean;
	items: BundleItem[];
}

export interface BundleItem {
	completed: boolean;
	name: string;
	methods: ItemMethod[];
}

type MethodKey = 'foraging' | 'fishing' | 'farming' | 'cart';

export interface ItemMethod {
	season: number[];
	method: MethodKey;
}
