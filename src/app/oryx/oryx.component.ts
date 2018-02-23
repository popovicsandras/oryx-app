import { Component, OnInit } from '@angular/core';

declare var ORYX: any;

@Component({
    selector: 'app-home',
    templateUrl: './oryx.component.html',
    styleUrls: ['./oryx.component.css']
})
export class OryxComponent implements OnInit {

    editor: any;
    testData = {
        modelId: 1,
        name: 'Retek',
        description: 'Retek desc',
        stencilSetId: 0,
        stencilSetVersion: 0,
        lastUpdated: '2018-02-20T14:35:14.624+0000',
        lastUpdatedBy: ' Administrator',
        model: {
            id: 'canvas',
            resourceId: 'canvas',
            stencilset: {
                namespace: 'http://b3mn.org/stencilset/bpmn2.0#'
            },
            properties: {
                process_id: 'Retek',
                name: 'Retek',
                documentation: 'Retek desc'
            },
            childShapes: [{
                bounds: {
                    lowerRight: {
                        x: 130,
                        y: 193
                    },
                    upperLeft: {
                        x: 100,
                        y: 163
                    }
                },
                childShapes: [],
                dockers: [],
                outgoing: [],
                resourceId: 'startEvent1',
                stencil: {
                    id: 'StartNoneEvent'
                }
            }],
            modelType: 'model'
        }
    };

    constructor() {
        console.log('c');
    }

    ngOnInit() {
        this.editor = new ORYX.Editor(this.testData);
    }

}
