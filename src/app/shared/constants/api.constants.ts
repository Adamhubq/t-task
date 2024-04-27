export const API_KEY_SCHEDULE = 'a267d745-b654-4483-922e-46dfc1c541d4';
export const API_KEY_SEARCH_CITY = 'ce81af0e-6d67-4d21-b50b-3d2bb7575b44';

export const DOMAIN_SHEDULE = '/v3.0/';
export const DOMAIN_SEARCH_CITY = 'https://geocode-maps.yandex.ru/1.x/';

export const LANG = 'RU';
export const LAT = 55.751244;
export const LNG = 37.618423;
export const DISTANCE = 10;

export const mock = {
    "response": {
        "GeoObjectCollection": {
            "metaDataProperty": {
                "GeocoderResponseMetaData": {
                    "request": "мос",
                    "results": "10",
                    "found": "10"
                }
            },
            "featureMember": [
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Москва, Московский",
                                "kind": "locality",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Москва, Московский",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Центральный федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Москва"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "Новомосковский административный округ"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "поселение Московский"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Московский"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Москва, Московский",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Москва",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "Новомосковский административный округ",
                                                "Locality": {
                                                    "LocalityName": "Московский"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский",
                        "description": "Москва, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "37.337244 55.580375",
                                "upperCorner": "37.382753 55.613697"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzA2Mjg0MhIw0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCc0L7RgdC60L7QstGB0LrQuNC5IgoN3mIVQhWaaF5C",
                        "Point": {
                            "pos": "37.346551 55.602149"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Тюменский район, посёлок Московский",
                                "kind": "locality",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Тюменский район, посёлок Московский",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Уральский федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Тюменская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "Тюменский район"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "посёлок Московский"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Тюменский район, посёлок Московский",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Тюменская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "Тюменский район",
                                                "Locality": {
                                                    "LocalityName": "посёлок Московский"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "посёлок Московский",
                        "description": "Тюменский район, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "65.39994 57.09716",
                                "upperCorner": "65.460316 57.119493"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE1OTQxMxJQ0KDQvtGB0YHQuNGPLCDQotGO0LzQtdC90YHQutC40Lkg0YDQsNC50L7QvSwg0L_QvtGB0ZHQu9C-0Log0JzQvtGB0LrQvtCy0YHQutC40LkiCg1n3YJCFXVvZEI,",
                        "Point": {
                            "pos": "65.432423 57.108844"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Санкт-Петербург, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Санкт-Петербург, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Северо-Западный федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Санкт-Петербург"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Санкт-Петербург"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Санкт-Петербург, Московский район",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Санкт-Петербург",
                                            "Locality": {
                                                "LocalityName": "Санкт-Петербург",
                                                "DependentLocality": {
                                                    "DependentLocalityName": "Московский район"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Санкт-Петербург, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "30.198979 59.744315",
                                "upperCorner": "30.38114 59.912955"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE4MzY2MRJM0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywg0JzQvtGB0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSIKDamV8kEVoWhvQg,,",
                        "Point": {
                            "pos": "30.323073 59.852176"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Беларусь, Минск, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "BY",
                                    "formatted": "Беларусь, Минск, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Беларусь"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Минск"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Минск"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Беларусь, Минск, Московский район",
                                        "CountryNameCode": "BY",
                                        "CountryName": "Беларусь",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Минск",
                                            "Locality": {
                                                "LocalityName": "Минск",
                                                "DependentLocality": {
                                                    "DependentLocalityName": "Московский район"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Минск, Беларусь",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "27.419313 53.835489",
                                "upperCorner": "27.553585 53.907031"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE4MzY4NRI50JHQtdC70LDRgNGD0YHRjCwg0JzRltC90YHQuiwg0JzQsNGB0LrQvtGe0YHQutGWINGA0LDRkdC9IgoNm_HbQRXte1dC",
                        "Point": {
                            "pos": "27.492966 53.871021"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Рязань, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Рязань, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Центральный федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Рязанская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "городской округ Рязань"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Рязань"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Рязань, Московский район",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Рязанская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "городской округ Рязань",
                                                "Locality": {
                                                    "LocalityName": "Рязань",
                                                    "DependentLocality": {
                                                        "DependentLocalityName": "Московский район"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Рязань, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "39.634057 54.630018",
                                "upperCorner": "39.702149 54.651969"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=CgoxNDg3NjIyNzg3EjvQoNC-0YHRgdC40Y8sINCg0Y_Qt9Cw0L3RjCwg0JzQvtGB0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSIKDQCiHkIV_41aQg,,",
                        "Point": {
                            "pos": "39.658203 54.638669"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Узбекистан, Андижанская область, Шахрихан",
                                "kind": "locality",
                                "Address": {
                                    "country_code": "UZ",
                                    "formatted": "Узбекистан, Андижанская область, Шахрихан",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Узбекистан"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Андижанская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "Шахриханский район"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Шахрихан"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Узбекистан, Андижанская область, Шахрихан",
                                        "CountryNameCode": "UZ",
                                        "CountryName": "Узбекистан",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Андижанская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "Шахриханский район",
                                                "Locality": {
                                                    "LocalityName": "Шахрихан"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Шахрихан",
                        "description": "Андижанская область, Узбекистан",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "72.010912 40.68399",
                                "upperCorner": "72.085238 40.732341"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=CgoxNTA4NTQ3MjgyEilPyrt6YmVraXN0b24sIEFuZGlqb24gdmlsb3lhdGksIFNoYWhyaXhvbiIKDRYakEIVrtgiQg,,",
                        "Point": {
                            "pos": "72.050949 40.711605"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Нижний Новгород, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Нижний Новгород, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Приволжский федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Нижегородская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "городской округ Нижний Новгород"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Нижний Новгород"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Нижний Новгород, Московский район",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Нижегородская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "городской округ Нижний Новгород",
                                                "Locality": {
                                                    "LocalityName": "Нижний Новгород",
                                                    "DependentLocality": {
                                                        "DependentLocalityName": "Московский район"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Нижний Новгород, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "43.547621 56.305134",
                                "upperCorner": "43.93069 56.359065"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE3NzEyMBJM0KDQvtGB0YHQuNGPLCDQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCwg0JzQvtGB0LrQvtCy0YHQutC40Lkg0YDQsNC50L7QvSIKDS58L0IVVE5hQg,,",
                        "Point": {
                            "pos": "43.871275 56.326492"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Чувашская Республика, городской округ Чебоксары, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Чувашская Республика, городской округ Чебоксары, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Приволжский федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Чувашская Республика"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "городской округ Чебоксары"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Чувашская Республика, городской округ Чебоксары, Московский район",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Чувашская Республика",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "городской округ Чебоксары",
                                                "Locality": {
                                                    "DependentLocality": {
                                                        "DependentLocalityName": "Московский район"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "городской округ Чебоксары, Чувашская Республика, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "47.047233 56.077167",
                                "upperCorner": "47.428424 56.298857"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE3NzEwNxKIAdCg0L7RgdGB0LjRjywg0KfRg9Cy0LDRiNGB0LrQsNGPINCg0LXRgdC_0YPQsdC70LjQutCwLCDQs9C-0YDQvtC00YHQutC-0Lkg0L7QutGA0YPQsyDQp9C10LHQvtC60YHQsNGA0YssINCc0L7RgdC60L7QstGB0LrQuNC5INGA0LDQudC-0L0iCg3SyDxCFWSLYEI,",
                        "Point": {
                            "pos": "47.196111 56.136126"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Кыргызстан, Чуйская область, Московский район",
                                "kind": "area",
                                "Address": {
                                    "country_code": "KG",
                                    "formatted": "Кыргызстан, Чуйская область, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Кыргызстан"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Чуйская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Кыргызстан, Чуйская область, Московский район",
                                        "CountryNameCode": "KG",
                                        "CountryName": "Кыргызстан",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Чуйская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "Московский район"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Чуйская область, Кыргызстан",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "73.90712 42.358675",
                                "upperCorner": "74.250906 43.193366"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgo0NTQ3NTM3ODYxEkTQmtGL0YDQs9GL0LfRgdGC0LDQvSwg0KfSr9C5INC-0LHQu9GD0YHRgywg0JzQvtGB0LrQstCwINGA0LDQudC-0L3RgyIKDRcvlEIV414rQg,,",
                        "Point": {
                            "pos": "74.091976 42.842661"
                        }
                    }
                },
                {
                    "GeoObject": {
                        "metaDataProperty": {
                            "GeocoderMetaData": {
                                "precision": "other",
                                "text": "Россия, Калининград, Московский район",
                                "kind": "district",
                                "Address": {
                                    "country_code": "RU",
                                    "formatted": "Россия, Калининград, Московский район",
                                    "Components": [
                                        {
                                            "kind": "country",
                                            "name": "Россия"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Северо-Западный федеральный округ"
                                        },
                                        {
                                            "kind": "province",
                                            "name": "Калининградская область"
                                        },
                                        {
                                            "kind": "area",
                                            "name": "городской округ Калининград"
                                        },
                                        {
                                            "kind": "locality",
                                            "name": "Калининград"
                                        },
                                        {
                                            "kind": "district",
                                            "name": "Московский район"
                                        }
                                    ]
                                },
                                "AddressDetails": {
                                    "Country": {
                                        "AddressLine": "Россия, Калининград, Московский район",
                                        "CountryNameCode": "RU",
                                        "CountryName": "Россия",
                                        "AdministrativeArea": {
                                            "AdministrativeAreaName": "Калининградская область",
                                            "SubAdministrativeArea": {
                                                "SubAdministrativeAreaName": "городской округ Калининград",
                                                "Locality": {
                                                    "LocalityName": "Калининград",
                                                    "DependentLocality": {
                                                        "DependentLocalityName": "Московский район"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "name": "Московский район",
                        "description": "Калининград, Россия",
                        "boundedBy": {
                            "Envelope": {
                                "lowerCorner": "20.294317 54.630878",
                                "upperCorner": "20.653733 54.708477"
                            }
                        },
                        "uri": "ymapsbm1://geo?data=Cgg1MzE3NzI1NBJF0KDQvtGB0YHQuNGPLCDQmtCw0LvQuNC90LjQvdCz0YDQsNC0LCDQnNC-0YHQutC-0LLRgdC60LjQuSDRgNCw0LnQvtC9IgoNcuqjQRUPulpC",
                        "Point": {
                            "pos": "20.489476 54.681701"
                        }
                    }
                }
            ]
        }
    }
}

export const mocStation = {
    "pagination": {
        "total": 253,
        "limit": 100,
        "offset": 0
    },
    "stations": [
        {
            "type": "station",
            "title": "1-й микрорайон Московского",
            "short_title": "",
            "popular_title": "",
            "code": "s9807877",
            "lat": 55.60291200527806,
            "lng": 37.34901368186223,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.1764869304613176,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9807877/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9807877/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Школа профсоюзов",
            "short_title": "",
            "popular_title": "",
            "code": "s9807876",
            "lat": 55.600391203674256,
            "lng": 37.34996854826187,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.2904177564052624,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9807876/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9807876/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Центр спорта",
            "short_title": null,
            "popular_title": null,
            "code": "s9845682",
            "lat": 55.5980513148364,
            "lng": 37.3472908322807,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.45813513338714856,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9845682/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9845682/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Московский",
            "short_title": "",
            "popular_title": "",
            "code": "s9745964",
            "lat": 55.604613,
            "lng": 37.354925,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.5932658516752886,
            "majority": 1,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745964/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745964/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Физкультурно-спортивный комплекс",
            "short_title": null,
            "popular_title": null,
            "code": "s9745960",
            "lat": 55.60153275306397,
            "lng": 37.356108441802704,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.6044523106479875,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745960/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745960/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Город Московский",
            "short_title": null,
            "popular_title": null,
            "code": "s9745963",
            "lat": 55.607846,
            "lng": 37.349842,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.6665408918868521,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745963/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745963/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "3-й микрорайон Московского",
            "short_title": null,
            "popular_title": null,
            "code": "s9845681",
            "lat": 55.5957519427216,
            "lng": 37.3479077403542,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.7166106219416046,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9845681/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9845681/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Институт Полиомиелита",
            "short_title": null,
            "popular_title": null,
            "code": "s9744032",
            "lat": 55.603936,
            "lng": 37.335212,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.7396830369656827,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9744032/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9744032/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Атласова",
            "short_title": "",
            "popular_title": "",
            "code": "s9745274",
            "lat": 55.597627,
            "lng": 37.355618,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 0.760003489762312,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745274/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745274/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Радужный проезд",
            "short_title": null,
            "popular_title": null,
            "code": "s9848661",
            "lat": 55.59295052398221,
            "lng": 37.36297491733199,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 1.4532893474422035,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848661/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848661/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Радужная улица, 2",
            "short_title": null,
            "popular_title": null,
            "code": "s9848660",
            "lat": 55.594275114723196,
            "lng": 37.36724499408365,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 1.567855951029533,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848660/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848660/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Мешково",
            "short_title": null,
            "popular_title": null,
            "code": "s9735276",
            "lat": 55.599832,
            "lng": 37.319511,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 1.718560837763485,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9735276/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9735276/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Радужная улица, 10",
            "short_title": null,
            "popular_title": null,
            "code": "s9848659",
            "lat": 55.5917599697044,
            "lng": 37.3718154782451,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 1.9636998848062681,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848659/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848659/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Град Московский",
            "short_title": "",
            "popular_title": "",
            "code": "s9807874",
            "lat": 55.587974834378,
            "lng": 37.3725259260762,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 2.269441116377725,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9807874/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9807874/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Зимёнки, поворот",
            "short_title": null,
            "popular_title": null,
            "code": "s9807873",
            "lat": 55.5818098941291,
            "lng": 37.3594850258526,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 2.4038710017270137,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9807873/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9807873/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Верхнее Валуево",
            "short_title": "",
            "popular_title": "",
            "code": "s9736429",
            "lat": 55.579408,
            "lng": 37.356971,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 2.612812495238313,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9736429/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9736429/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Администрация поселения Филимонковское",
            "short_title": "",
            "popular_title": "",
            "code": "s9736428",
            "lat": 55.576532,
            "lng": 37.353587,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 2.883401491502559,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9736428/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9736428/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Картмазово",
            "short_title": null,
            "popular_title": null,
            "code": "s9739569",
            "lat": 55.61735,
            "lng": 37.386085,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.004535482446982,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739569/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739569/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Валуево",
            "short_title": "",
            "popular_title": "",
            "code": "s9736431",
            "lat": 55.572887,
            "lng": 37.356898,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.319053220034049,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9736431/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9736431/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Парк \"Аллея Славы\"",
            "short_title": null,
            "popular_title": null,
            "code": "s9742025",
            "lat": 55.6084822437322,
            "lng": 37.2923744074095,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.4760739561638307,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9742025/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9742025/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Поворот на посёлок Радиоцентр",
            "short_title": null,
            "popular_title": null,
            "code": "s9877233",
            "lat": 55.571096524163025,
            "lng": 37.358759266924025,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.5380807532768737,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9877233/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9877233/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Аэропорт Внуково",
            "short_title": "",
            "popular_title": "",
            "code": "s9742024",
            "lat": 55.6072235886522,
            "lng": 37.2901523716885,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.588288657913322,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9742024/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9742024/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Внуково, Терминал А",
            "short_title": null,
            "popular_title": null,
            "code": "s9883716",
            "lat": 55.60556934628143,
            "lng": 37.28853325882041,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.6652245869312794,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883716/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883716/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Внуково",
            "short_title": null,
            "popular_title": null,
            "code": "s9600215",
            "lat": 55.605771,
            "lng": 37.288147,
            "station_type": "airport",
            "station_type_name": "аэропорт",
            "transport_type": "plane",
            "distance": 3.6917349908487918,
            "majority": 2,
            "type_choices": {
                "tablo": {
                    "desktop_url": "https://rasp.yandex.ru/station/9600215/tablo",
                    "touch_url": "https://t.rasp.yandex.ru/station/9600215/tablo"
                },
                "aeroex": {
                    "desktop_url": "https://rasp.yandex.ru/station/9600215/aeroex",
                    "touch_url": "https://t.rasp.yandex.ru/station/9600215/aeroex"
                }
            }
        },
        {
            "type": "station",
            "title": "МФЦ Внуково",
            "short_title": null,
            "popular_title": null,
            "code": "s9742029",
            "lat": 55.6112896185,
            "lng": 37.2875282037,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.845149965448346,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9742029/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9742029/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Федосьино",
            "short_title": null,
            "popular_title": null,
            "code": "s9849059",
            "lat": 55.6375142826907,
            "lng": 37.3374675756183,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 3.9747045926876,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9849059/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9849059/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "м. Новопеределкино",
            "short_title": "",
            "popular_title": "",
            "code": "s9848215",
            "lat": 55.638327,
            "lng": 37.353085,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.044815428853614,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848215/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848215/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Скульптора Мухиной, 7",
            "short_title": null,
            "popular_title": null,
            "code": "s9866953",
            "lat": 55.6395260309431,
            "lng": 37.3423738439483,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.1655767962438,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9866953/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9866953/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Центральная улица",
            "short_title": null,
            "popular_title": null,
            "code": "s9745259",
            "lat": 55.61425045733382,
            "lng": 37.28259252513107,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.237700255161052,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745259/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745259/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Филимонки",
            "short_title": "",
            "popular_title": "",
            "code": "s9737007",
            "lat": 55.56362477679337,
            "lng": 37.344112870391555,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.2876456356276655,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9737007/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9737007/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Просека",
            "short_title": null,
            "popular_title": null,
            "code": "s9886408",
            "lat": 55.57954242733635,
            "lng": 37.289757434738064,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.366364177522915,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886408/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886408/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "По требованию",
            "short_title": null,
            "popular_title": null,
            "code": "s9886409",
            "lat": 55.57668582355673,
            "lng": 37.29351252735891,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.374400213764921,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886409/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886409/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Скульптора Мухиной",
            "short_title": null,
            "popular_title": null,
            "code": "s9866952",
            "lat": 55.6419654232011,
            "lng": 37.3464078863067,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.428640738810677,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9866952/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9866952/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Голенищево",
            "short_title": null,
            "popular_title": null,
            "code": "s9886407",
            "lat": 55.581389991810376,
            "lng": 37.28497237385549,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.506764744429592,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886407/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886407/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Чоботовская улица, 1",
            "short_title": null,
            "popular_title": null,
            "code": "s9849052",
            "lat": 55.6425574816528,
            "lng": 37.3568116670337,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.540445327828784,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9849052/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9849052/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Сады \"Высокое\"",
            "short_title": null,
            "popular_title": null,
            "code": "s9886410",
            "lat": 55.572807801893134,
            "lng": 37.29559392155447,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.572799724521663,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886410/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886410/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Новопеределкино",
            "short_title": null,
            "popular_title": null,
            "code": "s9799753",
            "lat": 55.63765,
            "lng": 37.383677,
            "station_type": "station",
            "station_type_name": "станция",
            "transport_type": "train",
            "distance": 4.585738280365737,
            "majority": 4,
            "type_choices": {
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9799753/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9799753/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Чоботовская улица",
            "short_title": null,
            "popular_title": null,
            "code": "s9849053",
            "lat": 55.6452028400948,
            "lng": 37.3517261987415,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.799733827265146,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9849053/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9849053/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Валуевский лесопарк",
            "short_title": null,
            "popular_title": null,
            "code": "s9886406",
            "lat": 55.58216788757712,
            "lng": 37.27859944523611,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.814511162928299,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886406/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886406/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Братьев Бромлей",
            "short_title": null,
            "popular_title": null,
            "code": "s9883956",
            "lat": 55.569717360563196,
            "lng": 37.29568114235144,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.8205759278736,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883956/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883956/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Марьинское поле",
            "short_title": null,
            "popular_title": null,
            "code": "s9737009",
            "lat": 55.55892859820345,
            "lng": 37.33353944445788,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.876349017432751,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9737009/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9737009/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Ликова, поворот на Боровское шоссе",
            "short_title": null,
            "popular_title": null,
            "code": "s9745242",
            "lat": 55.61902,
            "lng": 37.274473,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.9015227013916425,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745242/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745242/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Цветочные Поляны",
            "short_title": null,
            "popular_title": null,
            "code": "s9883952",
            "lat": 55.56031094200657,
            "lng": 37.317694198585045,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 4.994628266016452,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883952/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883952/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Середнево",
            "short_title": null,
            "popular_title": null,
            "code": "s9883953",
            "lat": 55.566184406854184,
            "lng": 37.29883290479232,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.000030526799861,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883953/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883953/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Отдел соцзащиты",
            "short_title": null,
            "popular_title": null,
            "code": "s9849054",
            "lat": 55.6471563709863,
            "lng": 37.3449241166797,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.007043761482872,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9849054/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9849054/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Ликова",
            "short_title": null,
            "popular_title": null,
            "code": "s9739352",
            "lat": 55.620172,
            "lng": 37.272233,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.080924127983348,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739352/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739352/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Марьино, деревня",
            "short_title": null,
            "popular_title": null,
            "code": "s9880463",
            "lat": 55.55635011490135,
            "lng": 37.33762177349329,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.1248804519117135,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9880463/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9880463/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Аэропорт (старая платф.)",
            "short_title": null,
            "popular_title": null,
            "code": "s9654533",
            "lat": 55.610036,
            "lng": 37.265994,
            "station_type": "station",
            "station_type_name": "станция",
            "transport_type": "train",
            "distance": 5.136808060265049,
            "majority": 4,
            "type_choices": {
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9654533/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9654533/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Автовокзал Саларьево",
            "short_title": null,
            "popular_title": null,
            "code": "s9876347",
            "lat": 55.621057,
            "lng": 37.421688,
            "station_type": "bus_station",
            "station_type_name": "автовокзал",
            "transport_type": "bus",
            "distance": 5.167465212411498,
            "majority": 1,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9876347/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9876347/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Усадебный Парк",
            "short_title": null,
            "popular_title": null,
            "code": "s9883954",
            "lat": 55.56841560590849,
            "lng": 37.28932179162551,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.198115911669658,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883954/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883954/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Лукино",
            "short_title": null,
            "popular_title": null,
            "code": "s9880451",
            "lat": 55.64923898817104,
            "lng": 37.344333602666666,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.239493705530316,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9880451/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9880451/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Мичуринец",
            "short_title": null,
            "popular_title": null,
            "code": "s9601731",
            "lat": 55.646206,
            "lng": 37.316111,
            "station_type": "platform",
            "station_type_name": "платформа",
            "transport_type": "train",
            "distance": 5.259969371724211,
            "majority": 3,
            "type_choices": {
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9601731/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9601731/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Поворот на Солнцево / м. Саларьево",
            "short_title": null,
            "popular_title": null,
            "code": "s9876972",
            "lat": 55.62603443253806,
            "lng": 37.41916759101105,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.278779068865865,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9876972/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9876972/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Марьино Град",
            "short_title": null,
            "popular_title": null,
            "code": "s9745097",
            "lat": 55.554277354574324,
            "lng": 37.34387312429749,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.327245149010605,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745097/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745097/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Бурцево",
            "short_title": null,
            "popular_title": null,
            "code": "s9886405",
            "lat": 55.58164524056928,
            "lng": 37.26950139225759,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.352849274554435,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886405/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886405/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "м. Саларьево",
            "short_title": null,
            "popular_title": null,
            "code": "s9850953",
            "lat": 55.62142,
            "lng": 37.42466,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.354560153959512,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9850953/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9850953/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Река Алёшинка",
            "short_title": null,
            "popular_title": null,
            "code": "s9885861",
            "lat": 55.651566565104346,
            "lng": 37.34484934438566,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.497569272664643,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9885861/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9885861/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Аннино",
            "short_title": null,
            "popular_title": null,
            "code": "s9743448",
            "lat": 55.58564,
            "lng": 37.264044,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.500993683873439,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9743448/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9743448/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Середневский лес",
            "short_title": null,
            "popular_title": null,
            "code": "s9883955",
            "lat": 55.567880616094,
            "lng": 37.2828201169734,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.5297832695643825,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883955/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883955/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Светлый бульвар",
            "short_title": null,
            "popular_title": null,
            "code": "s9883967",
            "lat": 55.553005515804166,
            "lng": 37.329386106808506,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.571572697916004,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9883967/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9883967/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Изварино",
            "short_title": "",
            "popular_title": "",
            "code": "s9739354",
            "lat": 55.624151,
            "lng": 37.264959,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.67970643905125,
            "majority": 1,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739354/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739354/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Проектируемый проезд № 7035",
            "short_title": null,
            "popular_title": null,
            "code": "s9886404",
            "lat": 55.581183360652915,
            "lng": 37.26412624539173,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.681244283820499,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886404/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886404/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "м. Прокшино",
            "short_title": null,
            "popular_title": null,
            "code": "s9874018",
            "lat": 55.5863660487401,
            "lng": 37.433375852417,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.732221504459782,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9874018/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9874018/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Пенино-2",
            "short_title": "",
            "popular_title": "",
            "code": "s9807872",
            "lat": 55.5495382426,
            "lng": 37.3528975205,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.8652884644605985,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9807872/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9807872/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Платформа Переделкино, южная",
            "short_title": null,
            "popular_title": null,
            "code": "s9885860",
            "lat": 55.65569153721282,
            "lng": 37.351694341791664,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.964086822937137,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9885860/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9885860/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Школа",
            "short_title": "",
            "popular_title": "",
            "code": "s9737006",
            "lat": 55.550406415993926,
            "lng": 37.32163991778952,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 5.9644764008112805,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9737006/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9737006/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Подворье Патриарха",
            "short_title": null,
            "popular_title": null,
            "code": "s9880585",
            "lat": 55.65625595884403,
            "lng": 37.34733917314579,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.01831786905964,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9880585/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9880585/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Платформа Переделкино",
            "short_title": null,
            "popular_title": null,
            "code": "s9744768",
            "lat": 55.6562215680793,
            "lng": 37.350932682555,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.020579271594238,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9744768/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9744768/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Внуковский завод",
            "short_title": "",
            "popular_title": "",
            "code": "s9742026",
            "lat": 55.604584,
            "lng": 37.25053,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.039436945508536,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9742026/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9742026/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Переделкино",
            "short_title": "",
            "popular_title": "",
            "code": "s9602014",
            "lat": 55.656304,
            "lng": 37.355554,
            "station_type": "platform",
            "station_type_name": "платформа",
            "transport_type": "train",
            "distance": 6.0499280899161985,
            "majority": 4,
            "type_choices": {
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9602014/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9602014/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Попутная улица",
            "short_title": null,
            "popular_title": null,
            "code": "s9848208",
            "lat": 55.652342,
            "lng": 37.387288,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.140952931059495,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848208/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848208/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Школа",
            "short_title": "",
            "popular_title": "",
            "code": "s9739355",
            "lat": 55.633217,
            "lng": 37.264844,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.18702706048422,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739355/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739355/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Погодина",
            "short_title": null,
            "popular_title": null,
            "code": "s9880450",
            "lat": 55.657731609089566,
            "lng": 37.338379098653604,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.203503365029515,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9880450/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9880450/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Харлампиева",
            "short_title": null,
            "popular_title": null,
            "code": "s9879280",
            "lat": 55.54858366459833,
            "lng": 37.31325112191486,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.315096253527281,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9879280/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9879280/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Почта",
            "short_title": null,
            "popular_title": null,
            "code": "s9848570",
            "lat": 55.6542958263747,
            "lng": 37.3865199102932,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.319828908653396,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848570/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848570/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Городок Писателей",
            "short_title": null,
            "popular_title": null,
            "code": "s9739108",
            "lat": 55.659212529911024,
            "lng": 37.33291342327759,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.404466480176638,
            "majority": 2,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739108/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739108/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Станция Солнечная",
            "short_title": null,
            "popular_title": null,
            "code": "s9848569",
            "lat": 55.6559700151766,
            "lng": 37.3838162436062,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.427395953599725,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848569/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848569/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Солнцевский отдел ЗАГС",
            "short_title": null,
            "popular_title": null,
            "code": "s9848207",
            "lat": 55.654732,
            "lng": 37.393811,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.558432542014635,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9848207/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9848207/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Река Берёзовка",
            "short_title": null,
            "popular_title": null,
            "code": "s9886403",
            "lat": 55.577445578984715,
            "lng": 37.25162715138234,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.568762174979602,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886403/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886403/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Посёлок Минвнешторга",
            "short_title": null,
            "popular_title": null,
            "code": "s9739356",
            "lat": 55.63703132060068,
            "lng": 37.261831390212826,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.585336068464615,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739356/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739356/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Пенино-1",
            "short_title": null,
            "popular_title": null,
            "code": "s9744983",
            "lat": 55.54394615718272,
            "lng": 37.366759462981896,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.597227065712769,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9744983/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9744983/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Солнечная",
            "short_title": "",
            "popular_title": "",
            "code": "s9600981",
            "lat": 55.657359,
            "lng": 37.385518,
            "station_type": "station",
            "station_type_name": "станция",
            "transport_type": "train",
            "distance": 6.610314026379444,
            "majority": 3,
            "type_choices": {
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9600981/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9600981/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Посёлок Переделкино",
            "short_title": null,
            "popular_title": null,
            "code": "s9739109",
            "lat": 55.66090577739957,
            "lng": 37.328874865081126,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.628867734823841,
            "majority": 3,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739109/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739109/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Посёлок Марьино",
            "short_title": null,
            "popular_title": null,
            "code": "s9737008",
            "lat": 55.546552144969276,
            "lng": 37.305053137219254,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.711832416581151,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9737008/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9737008/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Администрация поселения Внуковское",
            "short_title": null,
            "popular_title": null,
            "code": "s9739351",
            "lat": 55.64485575534838,
            "lng": 37.26789029317496,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.853267139042021,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739351/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739351/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Станция Внуково",
            "short_title": "",
            "popular_title": "",
            "code": "s9739350",
            "lat": 55.648294215291465,
            "lng": 37.27162114022798,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.963110420896576,
            "majority": 1,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9739350/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9739350/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Терешково",
            "short_title": null,
            "popular_title": null,
            "code": "s9866950",
            "lat": 55.6574598892605,
            "lng": 37.3988075216217,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 6.972377969146211,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9866950/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9866950/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Внуково",
            "short_title": "",
            "popular_title": "",
            "code": "s9602271",
            "lat": 55.649107,
            "lng": 37.272524,
            "station_type": "train_station",
            "station_type_name": "вокзал",
            "transport_type": "train",
            "distance": 6.992156601839178,
            "majority": 2,
            "type_choices": {
                "tablo": {
                    "desktop_url": "https://rasp.yandex.ru/station/9602271/tablo",
                    "touch_url": "https://t.rasp.yandex.ru/station/9602271/tablo"
                },
                "suburban": {
                    "desktop_url": "https://rasp.yandex.ru/station/9602271/suburban",
                    "touch_url": "https://t.rasp.yandex.ru/station/9602271/suburban"
                }
            }
        },
        {
            "type": "station",
            "title": "Белорусская улица, 10",
            "short_title": null,
            "popular_title": null,
            "code": "s9886463",
            "lat": 55.66002623329398,
            "lng": 37.300138121856676,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.066381829535765,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9886463/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9886463/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Сады \"Садовник\"",
            "short_title": null,
            "popular_title": null,
            "code": "s9743955",
            "lat": 55.580243,
            "lng": 37.240887,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.0741684240008755,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9743955/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9743955/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "По требованию",
            "short_title": null,
            "popular_title": null,
            "code": "s9880461",
            "lat": 55.53942454149772,
            "lng": 37.37250666889032,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.165002946751337,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9880461/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9880461/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "ЖК \"Одинцовский Парк\", поворот",
            "short_title": null,
            "popular_title": null,
            "code": "s9874064",
            "lat": 55.6617042920566,
            "lng": 37.3028207970818,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.170627816259518,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9874064/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9874064/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Белорусская улица",
            "short_title": null,
            "popular_title": null,
            "code": "s9853227",
            "lat": 55.661668,
            "lng": 37.301915,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.188880317897697,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9853227/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9853227/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Одинцово-1, поворот",
            "short_title": null,
            "popular_title": null,
            "code": "s9874071",
            "lat": 55.652827023911904,
            "lng": 37.275408612557385,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.192377793443878,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9874071/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9874071/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Измалково",
            "short_title": null,
            "popular_title": null,
            "code": "s9741116",
            "lat": 55.6661845320202,
            "lng": 37.3292352883605,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.204925568045801,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9741116/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9741116/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Садовые участки \"Ручеёк\"",
            "short_title": "",
            "popular_title": "",
            "code": "s9808139",
            "lat": 55.5932116222916,
            "lng": 37.2319268320158,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.271580317387817,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9808139/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9808139/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Главмосстроя",
            "short_title": null,
            "popular_title": null,
            "code": "s9866949",
            "lat": 55.6589277221511,
            "lng": 37.4043436010284,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.283617387612627,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9866949/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9866949/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "ЖК \"Одинцовский парк\"",
            "short_title": null,
            "popular_title": null,
            "code": "s9863560",
            "lat": 55.663565,
            "lng": 37.3038,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.339509031680677,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9863560/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9863560/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Улица Старые Сосенки",
            "short_title": null,
            "popular_title": null,
            "code": "s9745261",
            "lat": 55.565334,
            "lng": 37.444317,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.385229880707998,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9745261/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9745261/schedule"
                }
            }
        },
        {
            "type": "station",
            "title": "Сосенки-2",
            "short_title": "",
            "popular_title": "",
            "code": "s9798917",
            "lat": 55.558513338851654,
            "lng": 37.43509271562154,
            "station_type": "bus_stop",
            "station_type_name": "автобусная остановка",
            "transport_type": "bus",
            "distance": 7.385368429827767,
            "majority": 4,
            "type_choices": {
                "schedule": {
                    "desktop_url": "https://rasp.yandex.ru/station/9798917/schedule",
                    "touch_url": "https://t.rasp.yandex.ru/station/9798917/schedule"
                }
            }
        }
    ]
}