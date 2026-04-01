<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { createElement } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { useData } from 'vitepress';
import { demoRegistry, type DemoName } from '../../../demos/registry';

const props = defineProps<{
  name: DemoName;
}>();

const mountTarget = ref<HTMLDivElement | null>(null);
const expanded = ref(false);
const copied = ref(false);
const { lang, page } = useData();

const demo = computed(() => demoRegistry[props.name]);
const isZh = computed(() => {
  if (lang.value) {
    return lang.value.startsWith('zh');
  }

  return page.value.relativePath.startsWith('zh/');
});

const labels = computed(() =>
  isZh.value
    ? {
        showCode: '展开代码',
        hideCode: '收起代码',
        copyCode: '复制代码',
        copied: '已复制',
        notFound: '未找到对应示例。',
      }
    : {
        showCode: 'Show Code',
        hideCode: 'Hide Code',
        copyCode: 'Copy Code',
        copied: 'Copied',
        notFound: 'Demo not found.',
      }
);

let root: Root | null = null;
let copyTimer: ReturnType<typeof setTimeout> | null = null;

const renderDemo = () => {
  if (!mountTarget.value || !demo.value) {
    return;
  }

  if (!root) {
    root = createRoot(mountTarget.value);
  }

  root.render(createElement(demo.value.component));
};

const handleCopy = async () => {
  if (!demo.value || typeof navigator === 'undefined' || !navigator.clipboard) {
    return;
  }

  await navigator.clipboard.writeText(demo.value.code);
  copied.value = true;

  if (copyTimer) {
    clearTimeout(copyTimer);
  }

  copyTimer = setTimeout(() => {
    copied.value = false;
  }, 1800);
};

onMounted(() => {
  renderDemo();
});

watch(demo, () => {
  renderDemo();
});

onBeforeUnmount(() => {
  if (copyTimer) {
    clearTimeout(copyTimer);
  }

  root?.unmount();
  root = null;
});
</script>

<template>
  <div v-if="demo" class="nova-demo">
    <div class="nova-demo__preview">
      <ClientOnly>
        <div ref="mountTarget" class="nova-demo__canvas" />
      </ClientOnly>
    </div>

    <div class="nova-demo__actions">
      <button class="nova-demo__button" type="button" @click="expanded = !expanded">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }"
        >
          <path
            d="M3 5.25L7 9.25L11 5.25"
            stroke="currentColor"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ expanded ? labels.hideCode : labels.showCode }}
      </button>

      <button class="nova-demo__button" type="button" @click="handleCopy">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.75 4.75V3.875C4.75 3.39175 5.14175 3 5.625 3H10.125C10.6082 3 11 3.39175 11 3.875V8.375C11 8.85825 10.6082 9.25 10.125 9.25H9.25M4.75 4.75H3.875C3.39175 4.75 3 5.14175 3 5.625V10.125C3 10.6082 3.39175 11 3.875 11H8.375C8.85825 11 9.25 10.6082 9.25 10.125V9.25M4.75 4.75H8.375C8.85825 4.75 9.25 5.14175 9.25 5.625V9.25"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {{ copied ? labels.copied : labels.copyCode }}
      </button>
    </div>

    <div v-if="expanded" class="nova-demo__code">
      <pre><code>{{ demo.code }}</code></pre>
    </div>
  </div>

  <p v-else class="nova-demo__error">
    {{ labels.notFound }}
  </p>
</template>
