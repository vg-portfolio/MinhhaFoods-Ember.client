import DS from 'ember-data';
import {ActiveModelSerializer} from 'active-model-adapter';
export default ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
    history: { embedded: 'always' },
    whyU: { embedded: 'always '},
    awards: { ebedded: 'always'}
  }
});
