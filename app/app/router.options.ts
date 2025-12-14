import type { RouterOptions } from '@nuxt/schema';

export default <RouterOptions>{
    scrollBehavior() {
        // We are overriding the default scrollBehahavior settings on route change so that we can
        // customize them to work with our page transitions. Scroll position is reset to top via
        // window.scrollTo(0, 0) in the onAfterLeave() method in app/layouts/default.vue. This allows
        // us to wait for our page transition "leave" animations to complete before resetting the
        // scroll position.
        return undefined;
    }
};
