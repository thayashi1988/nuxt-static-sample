<template>
  <tr>
    <th>{{ tableData.tableHeader }}</th>
    <td>{{ tableData.tableCellData }}</td>
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
