import { Block } from "payload"

export const TableOfContent: Block = { //
    slug: 'tableRow', //
    labels: {
        singular: 'Table Row',
        plural: 'Table Rows',
    }, //
    fields: [
        {
            name:"Table_content",
            type:"array",
            fields:[
                {
            name: 'column1',
            type: 'text',
            label: 'Column 1',
        },
        {
            name: 'column2',
            type: 'number',
            label: 'Column 2',
        },
        {
            name: 'column3',
            type: 'text',
            label: 'Column 3',
        }
            ]
        },
    ],
};