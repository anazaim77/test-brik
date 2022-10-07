import * as goodSelector from './goods/goodSelector';
export { default as goodReducer } from './goods/goodSlice';
export { default as goodActions } from './goods/goodActions';

import * as categorySelector from './categories/categorySelector';
export { default as categoryReducer } from './categories/categorySlice';
export { default as categoryActions } from './categories/categoryActions';

export { goodSelector, categorySelector };
