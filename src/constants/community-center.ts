import type { BundleGroup, BundleGroups } from '../interfaces/community-center';

// export const BUNDLE_GROUPS: BundleGroup[] = [
// 	{
// 		location: 'crafts room',
// 		name: 'foraging',
// 		completed: false,
// 		bundles: [
// 			{
// 				name: 'spring foraging',
// 				completed: false,
// 				items: [
// 					{
// 						name: 'leek',
// 						completed: false,
// 						methods: [{ method: 'foraging', season: [0] }]
// 					}
// 				]
// 			}
// 		]
// 	}
// ];

export const BUNDLE_GROUPS: BundleGroups = {
	foraging: {
		location: 'crafts room',
		name: 'foraging',
		completed: false,
		bundles: {
			springForaging: {
				name: 'spring foraging',
				completed: false,
				items: {
					leek: {
						name: 'leek',
						completed: false,
						methods: [{ method: 'foraging', season: [0] }]
					}
				}
			}
		}
	}
};
