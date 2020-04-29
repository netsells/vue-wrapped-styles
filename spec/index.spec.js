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

    /**
     * Render
     *
     * @param {function} h
     * @returns {VNode}
     */
    render(h) {
        return h('div', {}, 'Text');
    },
};

describe('wrapComponent', () => {
    let Component;

    it('is a function', () => {
        expect(wrapComponent).toEqual(expect.any(Function));
    });

    describe('when called with a component', () => {
        beforeEach(() => {
            Component = wrapComponent(BaseComponent);
        });

        it('returns a component', () => {
            expect(Component).toEqual(expect.objectContaining({
                name: expect.any(String),
                props: expect.any(Object),
                render: expect.any(Function),
            }));
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
                expect(wrapper.html()).toEqual('<div>Text</div>');
            });

            describe('when props change', () => {
                beforeEach(() => {
                    wrapper.setProps({ foo: 'bar' });
                });

                it('updates the wrapped props', () => {
                    expect(wrapper.find(BaseComponent).props('foo')).toEqual('bar');
                });
            });
        });
    });
});
