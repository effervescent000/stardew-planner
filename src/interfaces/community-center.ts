export interface BundleGroups {
	[key: string]: BundleGroup;
}

export interface BundleGroup {
	location: string; // the room the bundle is located in,
	name: string; // description of the bundle
	// bundles: Bundle[];
	bundles: Bundles;
	completed: boolean;
}

export interface Bundle {
	name: string; // name of the bundle
	completed: boolean;
	// items: BundleItem[];
	items: BundleItems;
}

interface Bundles {
	[key: string]: Bundle;
}

interface BundleItems {
	[key: string]: BundleItem;
}

export interface BundleItem {
	completed: boolean;
	name: string;
	methods: ItemMethod[];
}

type MethodKey = 'foraging' | 'fishing' | 'farming' | 'cart';

interface ItemMethod {
	season: number[];
	method: MethodKey;
}
