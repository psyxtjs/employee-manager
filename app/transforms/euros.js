import Transform from '@ember-data/serializer/transform';

/**
 * Convert between Cents and Euros
 */
export default class EurosTransform extends Transform {
  deserialize(serialized) {
    return serialized / 100;
  }

  serialize(deserialized) {
    return deserialized * 100;
  }
}
