'use strict';

const {Type} = require('avsc');

const Entity = Type.forSchema({
    type: 'enum',
    symbols: ['product', 'vendor', 'picture', 'category', 'navnode'],
});

const Product = Type.forSchema({
    type: 'record',
    fields: [
        {name: 'showUid', type: 'string'},
        {name: 'entity', type: 'Entity'},
        {
            name: 'vendor',
            type: {
                type: 'record',
                fields: [
                    {name: 'entity', type: 'Entity'},
                    {name: 'id', type: 'int'},
                    {name: 'name', type: 'string'},
                    {name: 'description', type: 'string'},
                    {name: 'website', type: 'string'},
                    {
                        name: 'logo',
                        type: {
                            type: 'record',
                            fields: [
                                {name: 'entity', type: 'Entity'},
                                {name: 'url', type: 'string'}
                            ]
                        },
                    },
                    {name: 'filter', type: 'string'}
                ]
            },
        },
        {
            name: 'titles',
            type: {
                type: 'record',
                fields: [
                    {name: 'raw', type: 'string'},
                    {
                        name: 'highlighted',
                        type: {
                            type: 'array',
                            items: {
                                type: 'record',
                                fields: [{name: 'value', type: 'string'}]
                            }
                        }
                    }
                ]
            }
        },
        {name: 'description', type: 'string'},
        {name: 'eligibleForBookingInUserRegion', type: 'boolean'},
        {
            name: 'categories',
            type: {
                type: 'array',
                items: {
                    type: 'record',
                    fields: [
                        {name: 'entity', type: 'Entity'},
                        {name: 'id', type: 'int'},
                        {name: 'name', type: 'string'},
                        {name: 'fullName', type: 'string'},
                        {name: 'type', type: {type: 'enum', symbols: ['guru', 'simple']}},
                        {name: 'cpaType', type: 'string'},
                        {name: 'isLeaf', type: 'boolean'}
                    ]
                }
            }
        },
        {name: 'cpc', type: 'string'},
        {
            name: 'urls',
            type: {
                type: 'record',
                fields: [
                    {name: 'encrypted', type: 'string'},
                    {name: 'decrypted', type: 'string'},
                    {name: 'direct', type: 'string'}
                ]
            }
        },
        {
            name: 'navnodes',
            type: {
                type: 'array',
                items: {
                    type: 'record',
                    fields: [
                        {name: 'entity', type: 'Entity'},
                        {name: 'id', type: 'int'},
                        {name: 'name', type: 'string'},
                        {name: 'fullName', type: 'string'},
                        {name: 'isLeaf', type: 'boolean'}
                    ]
                }
            }
        },
        {
            name: 'pictures',
            type: {
                type: 'array',
                items: {
                    type: 'record',
                    fields: [
                        {name: 'entity', type: 'Entity'},
                        {
                            name: 'original',
                            type: {
                                type: 'record',
                                fields: [
                                    {name: 'containerWidth', type: 'int'},
                                    {name: 'containerHeight', type: 'int'},
                                    {name: 'url', type: 'string'},
                                    {name: 'width', type: 'int'},
                                    {name: 'height', type: 'int'}
                                ]
                            }
                        },
                        {
                            name: 'thumbnails',
                            type: {
                                type: 'array',
                                items: {
                                    type: 'record',
                                    fields: [
                                        {name: 'containerWidth', type: 'int'},
                                        {name: 'containerHeight', type: 'int'},
                                        {name: 'url', type: 'string'},
                                        {name: 'width', type: 'int'},
                                        {name: 'height', type: 'int'}
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        },
        {
            name: 'filters',
            type: {
                type: 'array',
                items: {
                    type: 'record',
                    fields: [
                        {name: 'id', type: 'string'},
                        {name: 'type', type: {type: 'enum', symbols: ['enum', 'number', 'boolean']}},
                        {name: 'name', type: 'string'},
                        {name: 'xslname', type: 'string'},
                        {name: 'subType', type: 'string'},
                        {name: 'kind', type: 'int'},
                        {name: 'position', type: 'int'},
                        {name: 'noffers', type: 'int'},
                        {
                            name: 'values',
                            type: {
                                type: 'array',
                                items: {
                                    type: 'record',
                                    fields: [
                                        {name: 'initialFound', type: ['null', 'int'], default: null},
                                        {name: 'found', type: ['null', 'int'], default: null},
                                        {name: 'value', type: ['null', 'string'], default: null},
                                        {
                                            name: 'vendor',
                                            type: [
                                                'null',
                                                {
                                                    type: 'record',
                                                    fields: [
                                                        {name: 'name', type: 'string'},
                                                        {name: 'entity', type: 'Entity'},
                                                        {name: 'id', type: 'int' }
                                                    ]
                                                }
                                            ],
                                            default: null
                                        },
                                        {name: 'id', type: 'string'},
                                        {name: 'group', type: ['null', 'string'], default: null},
                                        {name: 'code', type: ['null', 'string'], default: null},
                                        {name: 'max', type: ['null', 'string'], default: null},
                                        {name: 'initialMax', type: ['null', 'string'], default: null},
                                        {name: 'initialMin', type: ['null', 'string'], default: null},
                                        {name: 'min', type: ['null', 'string'], default: null}
                                    ]
                                }
                            }
                        },
                        {name: 'unit', type: ['null', 'string'], default: null},
                        {name: 'precision', type: ['null', 'int'], default: null}
                    ]
                }
            }
        },
        {
            name: 'type', type: {type: 'enum', symbols: ['model', 'cluster', 'group']}
        },
        {name: 'id', type: 'string'},
        {name: 'offers', type: {type: 'record', fields: [{name: 'count', type: 'int'}]}},
        {name: 'isNew', type: 'boolean'},
        {
            name: 'prices',
            type: {
                type: 'record',
                fields: [
                    {name: 'min', type: 'string'},
                    {name: 'max', type: 'string'},
                    {name: 'currency', type: 'string'},
                    {name: 'avg', type: 'string'}
                ]
            }
        },
        {name: 'opinions', type: 'int'},
        {name: 'rating', type: 'int'},
        {name: 'reviews', type: 'int'},
        {
            name: 'specs',
            type: {
                type: 'record',
                fields: [{name: 'friendly', type: {type: 'array', items: 'string'}}]
            }
        },
        {
            name: 'lingua',
            type: {
                type: 'record',
                fields: [
                    {
                        name: 'type',
                        type: {
                            type: 'record',
                            fields: [
                                {name: 'nominative', type: 'string'},
                                {name: 'genitive', type: 'string'},
                                {name: 'dative', type: 'string'},
                                {name: 'accusative', type: 'string'}
                            ]
                        }
                    }
                ]
            }
        },
        {name: 'retailersCount', type: 'int'},
        {name: 'inCart', type: 'boolean'}
    ]
}, {registry: {Entity}});

const Result = Type.forSchema({
    type: 'array',
    items: 'Product'
}, {registry: {Product}});

exports.name = 'avsc';

exports.encode = data => Result.toBuffer(data);

exports.decode = data => Result.fromBuffer(data);
