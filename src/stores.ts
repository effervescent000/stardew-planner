import _ from 'lodash';
import { derived, writable } from 'svelte/store';
import { BUNDLE_GROUPS } from './constants/community-center';
import type { BundleGroups } from './interfaces/community-center';
import type { Person } from './interfaces/people';
import { PEOPLE } from './constants/people-constants';

export const dateStore = writable(0);

export const birthdayStore = derived(dateStore, ($dateStore) => {
	const upcoming: Person[] = [];

	PEOPLE.forEach((person) => {
		const birthdayDelta = person.birthday - $dateStore;
		if (birthdayDelta >= 0 && birthdayDelta <= 5) {
			upcoming.push(person);
		}
	});
	return { upcoming };
});

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
