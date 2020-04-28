/**
 * Wrap a component to style it or change the props
 *
 * @param {object} Component
 * @param {object} config
 * @returns {object}
 */
function wrapComponent(Component, {
    wrappedComponentName = Component.name,
    name = ['wrapped', wrappedComponentName].join('-'),
    props = {},
} = {}) {
    return {
        name,

        functional: true,

        props: {
            ...Component.props,
            ...props,
        },

        /**
         * Render child component
         *
         * @param {function} h
         * @param {object} context
         * @returns {VNode}
         */
        render(h, { data, children }) {
            return h(
                Component,
                data,
                children,
            );
        },
    };
}

export default wrapComponent;
