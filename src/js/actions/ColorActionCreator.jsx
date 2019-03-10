import ColorConstant from '../components/constants/ColorConstants.jsx';
import { v4 } from 'uuid';

export const removeColor = id => ({
    type: ColorConstant.REMOVE_COLOR,
    id
});

export const rateColor = (id, rating) => ({
    type: ColorConstant.RATE_COLOR,
    id,
    rating
});

export const sortColors = sortedBy => {
    if (sortedBy === 'rating') {
        return {
            type: ColorConstant.SORT_COLORS,
            sortBy: 'SORTED_BY_RATING'
        };
    } else if (sortedBy === 'title') {
        return {
            type: ColorConstant.SORT_COLORS,
            sortBy: 'SORTED_BY_TITLE'
        };
    } else {
        return {
            type: ColorConstant.SORT_COLORS,
            sortBy: 'SORTED_BY_DATE'
        };
    }
};

export const addColor = (title, color) => ({
    type: ColorConstant.ADD_COLORS,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
});