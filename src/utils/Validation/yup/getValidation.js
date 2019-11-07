const getValidation = (schema, options = {}) => values => {
    try {
        schema.validateSync(values, options);
    } catch (error) {
        const errors = error.inner.reduce(
            (formError, innerError) => ({
                ...formError,
                [innerError.path]: innerError.message,
            }),
            {}
        );

        return errors;
    }
};

export default getValidation;
