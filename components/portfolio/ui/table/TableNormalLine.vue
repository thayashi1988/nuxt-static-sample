<template>
  <tr>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <th v-html="tableData.tableHeader"></th>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <td v-html="tableData.tableCellData"></td>
  </tr>
</template>
<script>
export default {
  name: 'TableNormalLine',
  props: {
    tableData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
