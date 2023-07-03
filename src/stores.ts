import _ from 'lodash';
import { writable } from 'svelte/store';
import { BUNDLE_GROUPS } from './constants/community-center';

export const dateStore = writable(0);

const createCenterStore = () => {
	const { subscribe, set, update } = writable(BUNDLE_GROUPS);

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

// commCenterStore.subscribe((val) => console.log(val));
