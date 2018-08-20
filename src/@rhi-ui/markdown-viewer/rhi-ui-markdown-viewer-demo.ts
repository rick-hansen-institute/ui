/**
 * @license
 * Copyright (c) 2018 Rick Hansen Institute. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
'use strict';

import { RhiUiDemoSnippet } from '../../../node_modules/@rhi-ui/demo-snippet/rhi-ui-demo-snippet.js';
import { RhiUiMarkdownViewer } from './rhi-ui-markdown-viewer.js';

export class RhiUiMarkdownViewerDemo extends HTMLElement {

    public static get is(): string { return 'rhi-ui-markdown-viewer-demo'; }
    
    private getTemplate(props): string {
        return `
            <!-- shadow DOM for your element -->
            <!-- RHI Blue: #007DC2 -->
            <style>
                :host {
                    display: block;
                }
                
                .readme {
                    margin: 0 16px 48px 16px;
                }
            </style>
            <rhi-ui-markdown-viewer id="readme-viewer" class="readme"></rhi-ui-markdown-viewer>
            <rhi-ui-demo-snippet snippet-title="Default">
                <rhi-ui-markdown-viewer id="markdwon-viewer"></rhi-ui-markdown-viewer>
            </rhi-ui-demo-snippet>
        `;
    }

    public static get properties() {
        return {
            'file-uri': {
                type: String,
                value: ''
            }
        };
    }
    
    public static get observedAttributes(): string[] {
        const attributes: string[] = [];

        for (let key in RhiUiMarkdownViewer.properties) {
            attributes.push(key.toLowerCase());
        }

        return attributes;
    }

    private props: any = {};

    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        // I'm forcing loading these two libraries without having to add the import script on the consuming html page.
        console.log(`Loaded ${RhiUiMarkdownViewer.is} and ${RhiUiDemoSnippet}`);

        this.requestRender();
    }

    public connectedCallback(): void {
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = <HTMLTemplateElement>document.createElement('template');
        template.innerHTML = this.getTemplate({});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string, namespace: string): void {
        if (oldValue === newValue) {
            return;
        }

        this.props[name] = newValue;
        
        if (name === 'file-uri' && newValue) {
            const readmeViewer: HTMLElement = this.shadowRoot.getElementById('readme-viewer');
            const markdownViewer: HTMLElement = this.shadowRoot.getElementById('markdwon-viewer');

            if (readmeViewer) {
                readmeViewer.setAttribute('file-uri', newValue);
                markdownViewer.setAttribute('file-uri', newValue);
            }
        }
    }
}

customElements.define(RhiUiMarkdownViewerDemo.is, RhiUiMarkdownViewerDemo);