const DOCUMENT_MAIN_TITLE = 'English Accents Map'
const DOCUMENT_DEFAULT_TITLE = 'Watch English Accent Videos - ' + DOCUMENT_MAIN_TITLE

export default function makeDocumentTitle (title = null) {
  return title ? title + ' - ' + DOCUMENT_MAIN_TITLE : DOCUMENT_DEFAULT_TITLE
}
