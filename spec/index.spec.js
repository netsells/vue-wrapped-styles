import { mount } from '@vue/test-utils';

import wrapComponent from '../src/index';

const BaseComponent = {
    name: 'base-component',

    props: {
        foo: {
            type: String,
            default: 'bar',
        },
    },

    template: `
        <div>
            Text
        </div>
    `,
};


describe('wrapComponent', () => {
    let Component;

    const sharedTests = () => {
        it('returns a component', () => {
            expect(Component).toEqual(expect.objectContaining({
                name: expect.any(String),
                props: expect.any(Object),
                components: expect.any(Object),
                template: expect.any(String),
            }))
        });

        it('should have matching props', () => {
            expect(Component.props).toEqual(BaseComponent.props);
        });

        describe('when mounted', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = mount(Component, {
                    propsData: {
                        foo: 'test',
                    },
                });
            });

            it('renders the template', () => {
                expect(wrapper.html()).toEqual(BaseComponent.template.trim());
            });
        });
    };

    it('is a function', () => {
        expect(wrapComponent).toEqual(expect.any(Function));
    });

    describe('when called with a component', () => {
        beforeEach(() => {
            Component = wrapComponent(BaseComponent);
        });

        sharedTests();

        it('should have the component registered', () => {
            expect(Component.components).toEqual({
                ['base-component']: BaseComponent,
            });
        });
    });

    describe('when called with a component with no name', () => {
        const ComponentWithNoName = {
            ...BaseComponent,

            name: undefined,
        };

        beforeEach(() => {
            Component = wrapComponent(ComponentWithNoName);
        });

        sharedTests();

        it('should have the component registered', () => {
            expect(Component.components).toEqual({
                ['no-name-component']: ComponentWithNoName,
            });
        });
    });
});
