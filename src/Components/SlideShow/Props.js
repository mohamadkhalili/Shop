const defaultProps = {
    time: 1000
};

export const getProps = componentProps => ({
    ...defaultProps,
    ...componentProps
});

export const propTypes = {
    duration: 'number'
};

export const validatePropTypes = props => {
    for (const key in props) {
        const propValueType = typeof props[key];
        if (propTypes[key]) {
            if (Array.isArray(propTypes[key]) && !propTypes[key].includes(propValueType)) {
                console.warn(`${key} must be of one of type ${propTypes[key].join(', ')}`);
            } else if (!Array.isArray(propTypes[key]) && propValueType !== propTypes[key]) {
                console.warn(`${key} must be of type ${propTypes[key]}`);
            }
        }
    }
};