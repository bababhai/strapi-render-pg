import type { Schema, Struct } from '@strapi/strapi';

export interface TestingcomponantsTest01 extends Struct.ComponentSchema {
  collectionName: 'components_testingcomponants_test01s';
  info: {
    displayName: 'test01';
  };
  attributes: {
    test_field: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'testingcomponants.test01': TestingcomponantsTest01;
    }
  }
}
