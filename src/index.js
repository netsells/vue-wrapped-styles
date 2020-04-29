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

        props: {
            ...Component.props,
            ...props,
        },

        /**
         * Render child component
         *
         * @param {function} h
         * @returns {VNode}
         */
        render(h) {
            return h(
                Component,
                {
                    props: this.$props,
                    attrs: this.$attrs,
                    on: this.$listeners,
                },
                this.$children,
            );
        },
    };
}

export default wrapComponent;
