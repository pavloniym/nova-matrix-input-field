import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-matrix-input-field', IndexField)
  app.component('detail-nova-matrix-input-field', DetailField)
  app.component('form-nova-matrix-input-field', FormField)
})
