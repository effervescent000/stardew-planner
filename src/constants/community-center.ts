import type { BundleGroup } from '../interfaces/community-center';

export const BUNDLE_GROUPS: BundleGroup[] = [
	{
		location: 'crafts room',
		name: 'foraging',
		completed: false,
		bundles: [
			{
				name: 'spring foraging',
				completed: false,
				items: [
					{
						name: 'leek',
						completed: false,
						methods: [{ method: 'foraging', season: [0] }]
					}
				]
			}
		]
	}
];
