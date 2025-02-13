export const T =
{
    "dataSchema": {
        "datasenzaora": {
            "type": "date",
            "nullable": true,
            "constraints": {
                "max": "2023-07-23T08:04:33.565Z",
                "min": "2023-07-16T08:04:33.565Z",
                "regex": ""
            },
        },
        "dataconora": {
            "type": "datetime",
            "nullable": false,
            "constraints": {
                "max": "2023-06-29T22:00:00.341Z",
                "min": "2023-05-31T22:00:00.341Z",
                "regex": ""
            },
        },
        "secondonumero": {
            "type": "number",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "primonumero": {
            "type": "number",
            "nullable": false,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "terzonumero": {
            "type": "number",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "comune": {
            "type": "text",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "cap": {
            "type": "text",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "animalepreferito": {
            "type": "text",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "provincia": {
            "type": "text",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "soddisfazione": {
            "type": "text",
            "nullable": false,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        },
        "deltesto": {
            "type": "text",
            "nullable": true,
            "constraints": {
                "max": "100",
                "min": "10",
                "regex": ""
            },
        },
        "primonumerovisibile": {
            "type": "boolean",
            "nullable": true,
            "constraints": {
                "max": "",
                "min": "",
                "regex": ""
            },
        }
    },
    "config": {
        "isPreviewEnabled": true,
        "start": {
            "withConditions": false,
            "conditions": [],
            "defaultStartingPoint": "007"
        },
        "globalSettings" : {
            "dateFormat" : "dd/MM/yy",
            "dateTimeFormat" : "HH:mm:ss"
        }
    },
    "template": [
        {
            "id": "007",
            "pageName": "Test input testuale",
            "elements": [
                {
                    "id": "000",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "deltesto",
                            "label": "Prova per inserire del testo lungo con una textbox",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": true,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": false,
                                    "previewLabel": ""
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "002",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "secondonumero",
                            "label": "secondonumero",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 5,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "secondonumero"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": [
                                    {
                                        "label": "1",
                                        "value": "1"
                                    },
                                    {
                                        "label": "2",
                                        "value": "2"
                                    },
                                    {
                                        "label": "3",
                                        "value": "3"
                                    },
                                    {
                                        "label": "4",
                                        "value": "4"
                                    },
                                    {
                                        "label": "5",
                                        "value": "5"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "004",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "animalepreferito",
                            "label": "I tuoi animali preferiti?",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 5,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/animals",
                                    "method": "get"
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Un array di stringhe"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "003",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "primonumerovisibile",
                            "label": "Numero 1 visibile",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 5,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": false,
                                    "previewLabel": ""
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": [
                                    {
                                        "label": "SI",
                                        "value": "true"
                                    },
                                    {
                                        "label": "NO",
                                        "value": "false"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "001",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [
                        {
                            "condition": [
                                {
                                    "label": "primonumerovisibile",
                                    "value": "primonumerovisibile",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "SI",
                                    "value": "true",
                                    "type": 1
                                }
                            ]
                        },
                        {
                            "condition": [
                                {
                                    "label": "primonumerovisibile",
                                    "value": "primonumerovisibile",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "SI",
                                    "value": "true",
                                    "type": 1
                                },
                                {
                                    "label": "O",
                                    "value": "or",
                                    "type": 3
                                },
                                {
                                    "label": "secondonumero",
                                    "value": "secondonumero",
                                    "type": 0
                                },
                                {
                                    "label": "uguale a",
                                    "value": "=",
                                    "type": 2
                                },
                                {
                                    "label": "4",
                                    "value": "4",
                                    "type": 1
                                }
                            ]
                        }
                    ],
                    "queries": [
                        {
                            "key": "primonumero",
                            "label": "Effettivamente il primo numero",
                            "fieldAutoFillConditions":
                                [
                                    {
                                        "condition": [
                                            {
                                                "label": "animalepreferito",
                                                "value": "animalepreferito",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Tartaruga",
                                                "value": "Tartaruga",
                                                "type": 1
                                            }
                                        ],
                                        "effect": "999"
                                    },
                                    {
                                        "condition": [
                                            {
                                                "label": "animalepreferito",
                                                "value": "animalepreferito",
                                                "type": 0
                                            },
                                            {
                                                "label": "uguale a",
                                                "value": "=",
                                                "type": 2
                                            },
                                            {
                                                "label": "Topo",
                                                "value": "Topo",
                                                "type": 1
                                            },
                                            {
                                                "label": "OPPURE",
                                                "value": "xor",
                                                "type": 3
                                            },
                                            {
                                                "label": "secondonumero",
                                                "value": "secondonumero",
                                                "type": 0
                                            },
                                            {
                                                "label": "minore di",
                                                "value": "<",
                                                "type": 2
                                            },
                                            {
                                                "label": "5",
                                                "value": "5",
                                                "type": 1
                                            }
                                        ],
                                        "effectIsField" : false,
                                        "effect": "456"
                                    }
                                ],
                            "fieldObligatoryConditions": [

                                {
                                    "condition": [
                                        {
                                            "label": "secondonumero",
                                            "value": "secondonumero",
                                            "type": 0
                                        },
                                        {
                                            "label": "minore di",
                                            "value": "<",
                                            "type": 2
                                        },
                                        {
                                            "label": "4",
                                            "value": "4",
                                            "type": 1
                                        },
                                        {
                                            "label": "E",
                                            "value": "and",
                                            "type": 3
                                        },
                                        {
                                            "label": "animalepreferito",
                                            "value": "animalepreferito",
                                            "type": 0
                                        },
                                        {
                                            "label": "uguale a",
                                            "value": "=",
                                            "type": 2
                                        },
                                        {
                                            "label": "Gatto",
                                            "value": "Gatto",
                                            "type": 1
                                        }
                                    ]
                                }

                            ],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Valore primo numero"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "005",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "datasenzaora",
                            "label": "Una data senza ora o minuti",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": true,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 2,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Senza ora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": [
                                    {
                                        "label": "17/8/2023",
                                        "value": "2023-08-17T14:02:19.841Z"
                                    },
                                    {
                                        "label": "12/8/2023",
                                        "value": "2023-08-12T14:02:22.815Z"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "000",
            "pageName": "Test input in formato data",
            "elements": [
                {
                    "id": "000",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "datasenzaora",
                            "label": "Una data senza ora o minuti",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 4,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Senza ora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "001",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "dataconora",
                            "label": "Una data con ore e minuti",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": true,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 4,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Con ora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "002",
                    "formType": 2,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "datasenzaora",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "datasenzaora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "dataconora",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "dataconora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "006",
            "pageName": "Test per condizioni su array",
            "elements": [
                {
                    "id": "000",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "animalepreferito",
                            "label": "I tuoi animalo preferiti?",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 2,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/animals",
                                    "method": "get"
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Un array di stringhe"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "001",
                    "formType": 2,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "animalepreferito",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Per verificare operatori su array"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "001",
            "pageName": "Test input data in sezione",
            "elements": [
                {
                    "id": "000",
                    "formType": 4,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "datasenzaora",
                            "label": "datasenzaora",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 4,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Senza ora in sezione"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "dataconora",
                            "label": "dataconora",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": true,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 4,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Con ora in sezione"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "001",
                    "formType": 2,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "datasenzaora",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "datasenzaora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "dataconora",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "dataconora"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "003",
            "pageName": "Test input numerico in sezione",
            "elements": [
                {
                    "id": "001",
                    "formType": 4,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "secondonumero",
                            "label": "secondonumero",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 2,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "secondonumero"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": [
                                    {
                                        "label": "1",
                                        "value": "1"
                                    },
                                    {
                                        "label": "2",
                                        "value": "2"
                                    },
                                    {
                                        "label": "3",
                                        "value": "3"
                                    },
                                    {
                                        "label": "4",
                                        "value": "4"
                                    },
                                    {
                                        "label": "5",
                                        "value": "5"
                                    }
                                ]
                            }
                        },
                        {
                            "key": "terzonumero",
                            "label": "terzonumero",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 1,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "terzonumero"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "000",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "terzonumero",
                            "label": "Una dicitura più lunga per capire come si comporta con più caratteri da dover mostrate a schermo, va bene?",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": true,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 2,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Questo è il terzo numero"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": [
                                    {
                                        "label": "1",
                                        "value": "1"
                                    },
                                    {
                                        "label": "2",
                                        "value": "2"
                                    },
                                    {
                                        "label": "3",
                                        "value": "3"
                                    },
                                    {
                                        "label": "404",
                                        "value": "404"
                                    },
                                    {
                                        "label": "505",
                                        "value": "505"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "id": "002",
                    "formType": 3,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "",
                            "label": "### Un riassunto di quanto scritto\n\nSi può usare un elemento di rappresentazione testuale anche per creare una sintesi personalizzata di alcuni campi.\nPer esempio:\n\n- Il tuo comune di residenza è {{comune}}\n- Per questo, il valore di calcolato è {{terzonumero}}\n",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "004",
            "pageName": "Test input per CAP",
            "elements": [
                {
                    "id": "001",
                    "formType": 5,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "provincia",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Provincia"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "comune",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Comune"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        },
                        {
                            "key": "cap",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Codice di avviamento postale (CAP)"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "000",
                    "formType": 2,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "terzonumero",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Questo numero cambia con il valore del Comune"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "005",
            "pageName": "Soddisfazione",
            "elements": [
                {
                    "id": "001",
                    "formType": 3,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "",
                            "label": "Grazie per aver compilato il nostro form\n\nQuesto ci permetterà di:\n- Migliorare il software\n - Includendo nuove funzionalità\n - Migliorando quelle esistenti\n\n##### _Per mostrare che si possono usare elementi testuali come dicitura_\n\nIndica qui il tuo grado di soddisfazione",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                },
                {
                    "id": "000",
                    "formType": 0,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "soddisfazione",
                            "label": "",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 5,
                                "apiConfig": {
                                    "url": "http://localhost:51239/api/v1/numbers",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": "Soddisfazione del cliente"
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        },
        {
            "id": "002",
            "pageName": "Termine modulo",
            "elements": [
                {
                    "id": "001",
                    "formType": 3,
                    "aggregatedVisibilityConditions": [],
                    "queries": [
                        {
                            "key": "",
                            "label": "### Grazie per aver compilato questo modulo\nEcco un elenco di cose:\n- Markdown funziona\n- Il componente funziona\n- Le marche html funzionano\n\n*Alla prossima*",
                            "fieldAutoFillConditions": [],
                            "fieldObligatoryConditions": [],
                            "parameters": {
                                "isDateTimeEnabled": false,
                                "isFreeInputEnabled": false,
                                "isFieldRequired" : 2,
                                "isTextBox": false,
                                "responseType": 0,
                                "apiConfig": {
                                    "url": "",
                                    "method": ""
                                },
                                "previewConfig": {
                                    "isVisible": true,
                                    "previewLabel": ""
                                },
                                "additionalInformation": {
                                    "prefix": "",
                                    "suffix": ""
                                },
                                "options": []
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "flow": [
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "007",
            "stop": "000"
        },
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "000",
            "stop": "006"
        },
        {
            "condition": {
                "flowOption": 1,
                "aggregatedConditions": [
                    {
                        "condition": [
                            {
                                "label": "animalepreferito",
                                "value": "animalepreferito",
                                "type": 0
                            },
                            {
                                "label": "contiene",
                                "value": "contiene",
                                "type": 2
                            },
                            {
                                "label": "Tigre",
                                "value": "Tigre",
                                "type": 1
                            },
                            {
                                "label": "OPPURE",
                                "value": "xor",
                                "type": 3
                            },
                            {
                                "label": "secondonumero",
                                "value": "secondonumero",
                                "type": 0
                            },
                            {
                                "label": "uguale a",
                                "value": "=",
                                "type": 2
                            },
                            {
                                "label": "4",
                                "value": "4",
                                "type": 1
                            }
                        ],
                        "effect": "send"
                    },
                    {
                        "condition": [
                            {
                                "label": "animalepreferito",
                                "value": "animalepreferito",
                                "type": 0
                            },
                            {
                                "label": "uguale a",
                                "value": "=",
                                "type": 2
                            },
                            {
                                "label": "Valori multipli",
                                "value": "Gatto -- Tartaruga",
                                "type": 1
                            }
                        ],
                        "effect": "send"
                    }
                ]
            },
            "start": "006",
            "stop": "005"
        },
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "001",
            "stop": "003"
        },
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "003",
            "stop": "004"
        },
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "004",
            "stop": "005"
        },
        {
            "condition": {
                "flowOption": 0,
                "aggregatedConditions": []
            },
            "start": "005",
            "stop": "002"
        },
        {
            "condition": {
                "flowOption": 2,
                "aggregatedConditions": []
            },
            "start": "002",
            "stop": "send"
        }
    ]
}