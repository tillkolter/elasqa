export const getSelectionCoords = function (win) {
  win = win || window
  let doc = win.document
  let sel = doc.selection
  let range
  let rects
  let rect
  let x = 0
  let y = 0
  if (sel) {
    if (sel.type !== 'Control') {
      range = sel.createRange()
      range.collapse(true)
      x = range.boundingLeft
      y = range.boundingTop
    }
  } else if (win.getSelection) {
    sel = win.getSelection()
    if (sel.rangeCount) {
      range = sel.getRangeAt(0).cloneRange()
      if (range.getClientRects) {
        range.collapse(true)
        rects = range.getClientRects()
        if (rects.length > 0) {
          rect = rects[0]
        }
        x = rect.left
        y = rect.top
      }
      // Fall back to inserting a temporary element
      if (x === 0 && y === 0) {
        var span = doc.createElement('span')
        if (span.getClientRects) {
          // Ensure span has dimensions and position by
          // adding a zero-width space character
          span.appendChild(doc.createTextNode('\u200b'))
          range.insertNode(span)
          rect = span.getClientRects()[0]
          x = rect.left
          y = rect.top
          var spanParent = span.parentNode
          spanParent.removeChild(span)

          // Glue any broken text nodes back together
          spanParent.normalize()
        }
      }
    }
  }
  return { x: x, y: y }
}
