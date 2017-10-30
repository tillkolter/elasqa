<template>
  <div>
    <h2>Elastic Mapping</h2>
    <div id="mapping-editor">
      <selected-database-fields></selected-database-fields>
      <analyzer-editor></analyzer-editor>
    </div>
  </div>
</template>

<script>
  import SelectedDatabaseFields from './SelectedDatabaseFields'
  import AnalyzerEditor from './AnalyzerEditor'
  export default {
    components: {AnalyzerEditor, SelectedDatabaseFields}, name: 'MappingEditor'
  }
</script>

<style>
  #mapping-editor {
    display: flex;
    flex-direction: row;
  }
</style>