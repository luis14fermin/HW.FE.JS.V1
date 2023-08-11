<template>
<div class="tableWrapper">
    <table class="userTable" :style="props.customStyles.table">
        <thead
            :style="props.customStyles.tableHead"
            v-if="props.people.length !== 0">
            <tr class="userTableHeadRow">
                <!--Map headers using the grid columns array-->
                <th
                class="userTableHeadCell"
                v-for="(column, index) in props.gridColumns"
                :key="index">
                    {{ column.name }}
                </th>
            </tr>
        </thead>
        <tbody :style="props.customStyles.tableBody">
            <!--Map each row using the people array-->
            <tr
            v-for="(person, personIndex) in props.people"
            :class="['userTableBodyRow', {noBorder: personIndex === props.people.length - 1 }]"
            :key="person.id">
                <!-- Map each data cell -->
                <!-- handleCellType() uses the grid column types to access and format each cell value for person -->
                <!-- v-html to convert potential html tags from strings -->
                <td
                v-for="(column, columnIndex) in props.gridColumns"
                :key="columnIndex"
                class="userTableBodyCell"
                v-html="handleCellType(column, person)">
                </td>
            </tr>
        </tbody>
    </table>
    <div
        class="noResults"
        v-if="props.people.length === 0">
        No Results Found
    </div>
</div>
</template>

<script setup>
import { defineProps } from 'vue'
import { formatText, formatDate, formatList, formatAddress } from '../services/formatServices'

const props = defineProps({
  gridColumns: Array,
  people: Array,
  customStyles: Object
})

const handleCellType = (column, person) => {
  // switch case to determine the data type and formatting it accordingly
  switch (column.properties.renderer.type) {
    case 'text':
      return formatText(column.field, person)
    case 'date':
      return formatDate(person[column.field])
    case 'list':
      return formatList(person[column.field])
    case 'address':
      return formatAddress(column, person)
    default:
      return 'Not Found'
  }
}
</script>

<style scoped>
.tableWrapper {
    width: 100%;
    min-height: 360px;
}
.userTable {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border-spacing: 0px;
    border-collapse: collapse;
    animation: floatUp 0.5s ease-out forwards;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.userTableHeadRow, .userTableBodyRow {
    border-bottom: 1px solid #222;
    transition: background-color 0.3s;
}
.userTableBodyRow {
    height: 80px;
}
.userTableBodyRow:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
}
.userTableHeadCell, .userTableBodyCell {
    padding: 5px 15px;
    text-align: center;
}
.noResults {
    margin-top: 150px;
    width: 100%;
    text-align: center;
    font-weight: 600;
}
.noBorder {
    border-bottom: none;
}
@keyframes floatUp {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
