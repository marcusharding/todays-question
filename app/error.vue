<template>
    <NuxtLayout>
        <section class="page-404">
            <div class="site-content-container container">
                <h1 class="heading">404</h1>
                <p class="sub-heading">Oops! Page not found.</p>
                <p class="copy">
                    The page you are trying to access cannot be accessed at this time. Try going
                    back to our homepage.
                </p>
                <NuxtLink to="/" class="link">Back to Home</NuxtLink>
            </div>
        </section>
    </NuxtLayout>
</template>

<script>
// STORE
import { useGlobalStore } from '~/store/global';

export default {
    name: 'Error',
    layout: 'error',
    meta: { title: 'Page Not Found' },
    data() {
        return { globalStore: useGlobalStore() };
    }
};
</script>

<style lang="scss" scoped>
.page-404 {
    width: 100%;
    height: 100vh;

    background-color: color(TrueBlack);
}

.page-404 .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1 {
    @include typography('heading-1');
    color: color(AlmostWhite);
    font-size: clamp(rems(160), 30vw, rems(550));
    margin-bottom: 100px;
    line-height: 1;

    @include tablet-up {
        margin-bottom: 0;
    }
}

.page-404 p,
.page-404 a {
    color: color(AlmostWhite);
    margin-bottom: 12px;
}

.page-404 a {
    position: relative;
    padding-bottom: 5px;
    @include typography('body-s');
    font-weight: 700;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: color(AlmostWhite);
        height: 2px;
    }
}

.page-404 .sub-heading {
    @include typography('heading-7');
    margin-bottom: 12px;
}

.page-404 .copy {
    @include typography('body-xs');
    max-width: 310px;
    text-align: center;
}
</style>
