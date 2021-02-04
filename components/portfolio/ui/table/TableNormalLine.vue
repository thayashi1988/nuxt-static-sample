<template>
  <tr>
    <th>{{ tableData.header }}</th>
    <td>{{ tableData.data }}</td>
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
