<template>
  <div class="index-mapper">
    <schema-inspector></schema-inspector>
    <selected-database-fields></selected-database-fields>
  </div>
</template>

<script>
  import SchemaInspector from './IndexMapper/SchemaInspector'
  import SelectedDatabaseFields from './IndexMapper/SelectedDatabaseFields'
  export default {
    components: {SelectedDatabaseFields, SchemaInspector},
    name: 'IndexMapper'
  }
</script>

<style lang="scss">
  .index-mapper {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .schema-view {
    padding: $global-padding 2*$global-padding;
    background-color: #fff;
    border: 1px solid $brand-color-dark;
    margin-right: 4 * $global-margin;
    &:last-child {
      margin-left: inherit !important;
    }
    height: 320px;
    overflow: scroll;
  }
  .database-schema {
    margin-bottom: $global-margin/2;
    border-top: 1px solid $brand-color-dark;
    padding: $global-padding 0;
    &:last-child {
      margin-bottom: inherit;
    }
    &:first-child {
      border-top: none;
    }
    &__details {
      padding: $global-padding 2*$global-padding;
    }
    &__tablename {
      cursor: pointer;
      &:hover {
        background-color: $green-color-4;
      }
    }
    &__feature {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      &:hover {
        background-color: $green-color-4;
      }
    }
  }
</style>