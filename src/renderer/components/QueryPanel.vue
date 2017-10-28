<template>
  <div class="query-form">
    <form @submit.prevent="onSubmit">
      <input type="submit" value="Run Query">
    </form>
    <div class="query-panel" name="query"><pre><code class="code" ref="code" v-html="queryHtml" contenteditable></code></pre></div>
  </div>
</template>

<script>
  import { query } from '../store/database'
  import 'highlight.js/styles/default.css'
  import { getSelectionCoords } from '../utils/text'
  // import { getSelectionCoords } from '../utils/text'
  const highlight = require('highlight.js')
  export default {
    name: 'QueryPanel',
    data () {
      let query = 'SELECT * FROM artikel LIMIT 1'
      return {
        queryHtml: highlight.highlight('SQL', query, true).value,
        currentCaretPosition: query.length - 1,
        queryChanged: false
      }
    },
    watch: {
      queryHtml (value) {
        this.queryChanged = true
      }
    },
    methods: {
      onSubmit () {
        let vue = this
        let sql = this.$refs['code'].innerText
        query(sql, function (error, results, fields) {
          if (error) throw error
          vue.$store.commit('ADD_QUERY', sql)
          vue.$store.commit('ADD_RESULT', results)
        })
      },
      onKeyUp () {
        this.currentCaretPosition = getSelectionCoords()
        let codeElement = this.$refs['code']
        let content = codeElement.innerText
        this.queryHtml = highlight.highlight('SQL', content, true).value
      },
      getCaretPosition () {
        var savedRange
        if (window.getSelection && window.getSelection().rangeCount > 0) {
          savedRange = window.getSelection().getRangeAt(0).cloneRange()
        } else if (document.selection) {
          savedRange = document.selection.createRange()
        }
        return savedRange.endOffset
      }
    },
    mounted () {
      document.addEventListener('keyup', this.onKeyUp)
    },
    updated () {
      let position = this.currentCaretPosition
      if (this.queryChanged && position) {
        var range = document.caretRangeFromPoint(position.x, position.y)
        let sel = window.getSelection()
        sel.removeAllRanges()
        sel.addRange(range)
      }
    }
  }
</script>

<style lang="scss">
  .query-form {
    width: 100%;
  }
  .query-panel {
    padding: $global-padding;
    height: 240px;
    width: 100%;
    color: white;
    background-color: $brand-color-dark;
  }
  .code {
    &:focus {
      outline: none;
    }
  }
  .hljs-keyword {
    color: orange !important;
  }
  .hljs-number {
    color: $brand-color-green !important;
  }

</style>
