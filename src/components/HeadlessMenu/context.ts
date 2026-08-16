import { createContext } from 'react';
import type { ItemContextValue, MenuContextValue } from './types';

export const MenuContext = createContext<MenuContextValue | null>(null);
export const ItemContext = createContext<ItemContextValue | null>(null);
