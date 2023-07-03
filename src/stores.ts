import _ from 'lodash';
import { writable } from 'svelte/store';
import { BUNDLE_GROUPS } from './constants/community-center';
import type { BundleGroups } from './interfaces/community-center';

export const dateStore = writable(0);

const isBrowser = typeof window !== 'undefined';

const getCenterData = (): BundleGroups => {
	if (isBrowser) {
		return JSON.parse(localStorage.getItem('communityCenter') || JSON.stringify(BUNDLE_GROUPS));
	}
	return BUNDLE_GROUPS;
};

const createCenterStore = () => {
	const { subscribe, set, update } = writable(getCenterData());

	const updateItemCompletion = (itemPath: string[], newValue: boolean) => {
		update((cur) => {
			const copy = { ...cur };
			_.set(copy, itemPath, newValue);
			return copy;
		});
	};
	const reset = () => set(BUNDLE_GROUPS);

	return { subscribe, updateItemCompletion, reset };
};

export const commCenterStore = createCenterStore();
