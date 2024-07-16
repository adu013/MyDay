import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  // keyForAttribute(attr) {
  //   // Convert snake_case api fields to camelCase
  //   return attr.replace("/_(\w)/g", (_, letter) => letter.toUpperCase());
  // }
}
