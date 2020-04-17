/**
 * Wrap a component to style it or change the props
 *
 * @param {object} Component
 * @param {object} config
 * @returns {object}
 */
function wrapComponent(Component, {
    wrappedComponentName = Component.name || 'no-name-component',
    name = ['wrapped', wrappedComponentName].join('-'),
    props = {},
} = {}) {
    return {
        name,

        props: {
            ...Component.props,
            ...props,
        },

        components: {
            [wrappedComponentName]: Component,
        },

        template: `
            <${ wrappedComponentName }
                v-bind="$props"
                v-on="$listeners"
            >
                <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
                <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData">
                    <slot :name="name" v-bind="slotData" />
                </template>
            </${ wrappedComponentName }>
        `,
    };
}

export default wrapComponent;
