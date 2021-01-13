<template>
  <layout-wrraper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20">
      <h2 class="text-lg pb-5 border-b bordder-gray-500 border-solid font-bold">
        お知らせタイトル
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">2020.08.15</time>
      </div>
      <div class="mb-20">
        <h3>見出し見出し見出し見出し見出し見出し見出し見出し見出し見出し</h3>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <ul>
          <li>リストストストストストストストスト</li>
          <li>リストストストストストストストスト</li>
          <li>リストストストストストストストスト</li>
        </ul>
      </div>
      <base-button name="お知らせへ戻る" link="/information" />
    </div>
  </layout-wrraper>
</template>
<script></script>
