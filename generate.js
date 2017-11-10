'use strict';

const crypto = require('crypto');

function string(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

function number(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function boolean() {
    return Math.random() >= .5;
}

function generate(count) {
    const samples = [];

    for (let i = 0; i < count; ++i) {
        samples.push(generateSample());
    }

    return samples;
}

function generateSample() {
    return {
        'showUid': string(24),
        'entity': 'product',
        'vendor': {
            'entity': 'vendor',
            'id': number(150000, 160000),
            'name': string(8),
            'description': string(22),
            'website': string(18),
            'logo': {
                'entity': 'picture',
                'url':  string(71),
            },
            'filter': string(14)
        },
        'titles': {
            'raw': string(14),
            'highlighted': [
                {
                    'value': string(14)
                }
            ]
        },
        'description': string(166),
        'eligibleForBookingInUserRegion': boolean(),
        'categories': [
            {
                'entity': 'category',
                'id': number(90000, 100000),
                'name': string(18),
                'fullName': string(18),
                'type': 'guru',
                'cpaType': string(26),
                'isLeaf': boolean()
            }
        ],
        'cpc': string(76),
        'urls': {
            'encrypted': string(730),
            'decrypted': string(760),
            'direct': string(54),
        },
        'navnodes': [
            {
                'entity': 'navnode',
                'id': number(50000, 60000),
                'name': string(18),
                'fullName': string(16),
                'isLeaf': boolean(),
            }
        ],
        'pictures': [
            {
                'entity': 'picture',
                'original': {
                    'containerWidth': number(300, 400),
                    'containerHeight': number(400, 500),
                    'url': string(71),
                    'width': number(300, 400),
                    'height': number(400, 500)
                },
                'thumbnails': [
                    {
                        'containerWidth': number(500, 600),
                        'containerHeight': number(500, 600),
                        'url': string(70),
                        'width': number(500, 600),
                        'height': number(500, 600)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(70),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(40, 60),
                        'containerHeight': number(40, 60),
                        'url': string(70),
                        'width': number(40, 60),
                        'height': number(40, 60)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(70),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(40, 60),
                        'containerHeight': number(40, 60),
                        'url': string(70),
                        'width': number(40, 60),
                        'height': number(40, 60)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(70),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(40, 60),
                        'containerHeight': number(40, 60),
                        'url': string(70),
                        'width': number(40, 60),
                        'height': number(40, 60)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(70),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(500, 600),
                        'containerHeight': number(500, 600),
                        'url': string(70),
                        'width': number(500, 600),
                        'height': number(500, 600)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(70),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                ]
            },
            {
                'entity': 'picture',
                'original': {
                    'containerWidth': number(400, 500),
                    'containerHeight': number(300, 400),
                    'url': string(71),
                    'width': number(400, 500),
                    'height': number(300, 400)
                },
                'thumbnails': [
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                ]
            },
            {
                'entity': 'picture',
                'original': {
                    'containerWidth': number(400, 500),
                    'containerHeight': number(300, 400),
                    'url': string(71),
                    'width': number(400, 500),
                    'height': number(300, 400)
                },
                'thumbnails': [
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                    {
                        'containerWidth': number(100, 120),
                        'containerHeight': number(100, 120),
                        'url': string(60),
                        'width': number(100, 120),
                        'height': number(100, 120)
                    },
                ]
            },
        ],
        'filters': [
            {
                'id': string(7),
                'type': 'enum',
                'name': string(13),
                'xslname': string(7),
                'subType': string(0, 1),
                'kind': number(1, 2),
                'position': number(1, 2),
                'noffers': number(1, 2),
                'values': [
                    {
                        'initialFound': number(1, 2),
                        'found': number(1, 2),
                        'value': string(7),
                        'vendor': {
                            'name': string(7),
                            'entity': 'vendor',
                            'id': number(150000, 160000)
                        },
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(7),
                'type': 'enum',
                'name': string(4),
                'xslname': string(15),
                'subType': string(7),
                'kind': number(1, 5),
                'position': number(1, 2),
                'noffers': number(1, 2),
                'values': [
                    {
                        'initialFound': number(1, 7),
                        'group': string(7),
                        'found': number(1, 5),
                        'value': string(7),
                        'code': string(7),
                        'id': string(8)
                    },
                    {
                        'initialFound': number(1, 7),
                        'group': string(7),
                        'found': number(1, 5),
                        'value': string(7),
                        'code': string(7),
                        'id': string(8)
                    },
                    {
                        'initialFound': number(1, 7),
                        'group': string(7),
                        'found': number(1, 5),
                        'value': string(7),
                        'code': string(7),
                        'id': string(8)
                    },
                    {
                        'initialFound': number(1, 7),
                        'group': string(7),
                        'found': number(1, 5),
                        'value': string(7),
                        'code': string(7),
                        'id': string(8)
                    },
                    {
                        'initialFound': number(1, 7),
                        'group': string(7),
                        'found': number(1, 5),
                        'value': string(7),
                        'code': string(7),
                        'id': string(8)
                    },
                ]
            },
            {
                'id': string(7),
                'type': 'enum',
                'name': string(13),
                'xslname': string(7),
                'subType': string(0, 1),
                'kind': number(1, 2),
                'position': number(1, 2),
                'noffers': number(1, 2),
                'values': [
                    {
                        'initialFound': number(1, 2),
                        'found': number(1, 2),
                        'value': string(7),
                        'vendor': {
                            'name': string(7),
                            'entity': 'vendor',
                            'id': number(150000, 160000),
                        },
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(7),
                'type': 'enum',
                'name': string(13),
                'xslname': string(7),
                'subType': string(0, 1),
                'kind': number(1, 2),
                'position': number(1, 2),
                'noffers': number(1, 2),
                'values': [
                    {
                        'initialFound': number(1, 2),
                        'found': number(1, 2),
                        'value': string(7),
                        'vendor': {
                            'name': string(7),
                            'entity': 'vendor',
                            'id': number(150000, 160000),
                        },
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            },
            {
                'id': string(8),
                'type': 'number',
                'name': string(16),
                'xslname': string(15),
                'subType': string(0, 1),
                'kind': number(0, 9),
                'unit': string(1),
                'position': number(0, 9),
                'noffers': number(0, 9),
                'precision': number(0, 9),
                'values': [
                    {
                        'max': string(1),
                        'initialMax': string(1),
                        'initialMin': string(1),
                        'min': string(1),
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(7),
                'type': 'enum',
                'name': string(13),
                'xslname': string(7),
                'subType': string(0, 1),
                'kind': number(1, 2),
                'position': number(1, 2),
                'noffers': number(1, 2),
                'values': [
                    {
                        'initialFound': number(1, 2),
                        'found': number(1, 2),
                        'value': string(7),
                        'vendor': {
                            'name': string(7),
                            'entity': 'vendor',
                            'id': number(150000, 160000),
                        },
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            },
            {
                'id': string(8),
                'type': 'number',
                'name': string(16),
                'xslname': string(15),
                'subType': string(0, 1),
                'kind': number(0, 9),
                'unit': string(1),
                'position': number(0, 9),
                'noffers': number(0, 9),
                'precision': number(0, 9),
                'values': [
                    {
                        'max': string(1),
                        'initialMax': string(1),
                        'initialMin': string(1),
                        'min': string(1),
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'number',
                'name': string(16),
                'xslname': string(15),
                'subType': string(0, 1),
                'kind': number(0, 9),
                'unit': string(1),
                'position': number(0, 9),
                'noffers': number(0, 9),
                'precision': number(0, 9),
                'values': [
                    {
                        'max': string(1),
                        'initialMax': string(1),
                        'initialMin': string(1),
                        'min': string(1),
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            },
            {
                'id': string(8),
                'type': 'number',
                'name': string(16),
                'xslname': string(15),
                'subType': string(0, 1),
                'kind': number(0, 9),
                'unit': string(1),
                'position': number(0, 9),
                'noffers': number(0, 9),
                'precision': number(0, 9),
                'values': [
                    {
                        'max': string(1),
                        'initialMax': string(1),
                        'initialMin': string(1),
                        'min': string(1),
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'number',
                'name': string(16),
                'xslname': string(15),
                'subType': string(0, 1),
                'kind': number(0, 9),
                'unit': string(1),
                'position': number(0, 9),
                'noffers': number(0, 9),
                'precision': number(0, 9),
                'values': [
                    {
                        'max': string(1),
                        'initialMax': string(1),
                        'initialMin': string(1),
                        'min': string(1),
                        'id': string(6)
                    }
                ]
            },
            {
                'id': string(8),
                'type': 'boolean',
                'name': string(10),
                'xslname': string(10),
                'subType': string(0, 1),
                'kind': 1,
                'position': 5,
                'noffers': 1,
                'values': [
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                    {
                        'initialFound': number(0, 9),
                        'found': number(0, 9),
                        'value': string(1),
                        'id': string(1)
                    },
                ]
            }
        ],
        'type': 'model',
        'id': string(6),
        'offers': {
            'count': number(50, 90)
        },
        'isNew': boolean(),
        'prices': {
            'min': string(4),
            'max': string(4),
            'currency': 'RUR',
            'avg': string(4)
        },
        'opinions': number(3, 6),
        'rating': number(2, 5),
        'reviews': number(3, 9),
        'specs': {
            'friendly': [
                string(35),
                string(30),
                string(29),
                string(33),
            ]
        },
        'lingua': {
            'type': {
                'nominative': string(8),
                'genitive': string(8),
                'dative': string(8),
                'accusative': string(8)
            }
        },
        'retailersCount': number(50, 90),
        'inCart': boolean()
    }
}

module.exports = generate;
