<template>
    <div class="index container site-content-container">
        <p class="clickable" @click="handleClick">
            {{ showEasterEgg ? whatImWorkingOn : questionOfTheDay?.question }}
        </p>
        <div v-if="questionOfTheDay?.name && !showEasterEgg" class="question-attribution">
            <p class="question-name">{{ questionOfTheDay.name }}</p>
            <p v-if="questionOfTheDay.date" class="question-date">{{ formatDate(questionOfTheDay.date) }}</p>
            <p v-if="questionOfTheDay.location" class="question-location">{{ questionOfTheDay.location }}</p>
        </div>
    </div>
</template>

<script setup>
// QUERIES
import { homepageQuery } from '~/queries/pages/homepage';
import { metaQuery } from '~/queries/helpers/pageMeta';
import { onMounted, ref, computed } from 'vue';
import { useGlobalStore } from '~/store/global';

// DATA
const { data, error: dataError } = await useSanityQuery(homepageQuery);
const { data: meta, error: metaError } = await useSanityQuery(metaQuery('homepage'));

if (dataError.value) {
    console.error('Error fetching page data:', dataError.value);
}

if (metaError.value) {
    console.error('Error fetching meta data:', metaError.value);
}

// META
useMeta(meta?.value?.metaData, data?.value);

// STORE
const globalStore = useGlobalStore();

// EASTER EGG STATE
const clickCount = ref(0);
const showEasterEgg = ref(false);
let clickTimeout = undefined;

// COMPUTED
const questionOfTheDay = computed(() => {
    const list = data.value || [];
    if (!list.length) return undefined;

    const parts = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Toronto',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).formatToParts(new Date());

    const y = Number(parts.find((p) => p.type === 'year').value);
    const m = Number(parts.find((p) => p.type === 'month').value) - 1;
    const d = Number(parts.find((p) => p.type === 'day').value);
    const startOfYearUTC = Date.UTC(y, 0, 0);
    const todayUTC = Date.UTC(y, m, d);
    const dayOfYear = Math.floor((todayUTC - startOfYearUTC) / (1000 * 60 * 60 * 24));

    return list[dayOfYear % list.length];
});

const whatImWorkingOn = computed(() => {
    return globalStore.siteSettings?.whatImWorkingOn || 'Nothing specific at the moment.';
});

// METHODS
const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
};

const handleClick = () => {
    clickCount.value++;

    // Clear existing timeout
    if (clickTimeout) {
        clearTimeout(clickTimeout);
    }

    // If 10 clicks reached, show easter egg
    if (clickCount.value >= 10) {
        showEasterEgg.value = true;
        clickCount.value = 0;
    } else {
        // Reset click count after 2 seconds of inactivity
        clickTimeout = window.setTimeout(() => {
            clickCount.value = 0;
        }, 2000);
    }
};

const setVh = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
};

onMounted(() => {
    setVh();
    window.addEventListener('resize', setVh);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', setVh);
    if (clickTimeout) {
        clearTimeout(clickTimeout);
    }
});
</script>

<style lang="scss" scoped>
.index.container {
    height: 100dvh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.index p {
    @include typography('heading-6');

    @include laptop-up {
        @include typography('heading-4');
        text-align: center;
    }

    &.clickable {
        cursor: pointer;
        user-select: none;
        transition: opacity 0.2s ease;
        -webkit-tap-highlight-color: transparent;
        tap-highlight-color: transparent;

        &:hover {
            opacity: 0.8;
        }
    }
}

.question-attribution {
    position: absolute;
    bottom: 2rem;
    left: 24px;
    right: 24px;
    text-align: left;

    @include laptop-up {
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        right: auto;
    }
}

.question-attribution p {
    font-size: 16px !important;
    line-height: 1.4;
    font-style: italic;
    font-weight: 300 !important;
    margin: 0;

    @include laptop-up {
        font-size: 20px !important;
    }
}

.question-name {
    opacity: 0.5;
}

.question-date {
    margin-top: 0.25rem;
    opacity: 0.45;
}

.question-location {
    margin-top: 0.25rem;
    opacity: 0.45;
}
</style>
