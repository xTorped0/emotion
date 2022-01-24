import { writable } from 'svelte/store';
import { Pages } from './types';

export const page = writable<Pages>(Pages.HOME);