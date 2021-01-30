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
    // eslint-disable-next-line
    tableData: Object,
    // require: false,
    // default: () => ({ header: '', data: '' }),
  },
}
</script>
