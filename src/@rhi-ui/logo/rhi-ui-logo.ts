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

export class RhiUiLogo extends HTMLElement {
    public static get is(): string { return 'rhi-ui-logo'; }

    public getTemplate(props: any): string {
        return `
            <style>
                :host {
                    display: block;
                    
                    --rhi-ui-logo-black: #000;
                    --rhi-ui-logo-blue: #0072CE;
                    --rhi-ui-logo-gray: #7F7F7F;
                }

                :host([color-palette="black"]) {
                    --rhi-ui-logo-blue: #000;
                    --rhi-ui-logo-gray: #000;
                }

                :host([color-palette="grayscale"]) {
                    --rhi-ui-logo-blue: #B2B3B6;
                }

                :host([color-palette="white"]) {
                    --rhi-ui-logo-black: #FFF;
                    --rhi-ui-logo-blue: #FFF;
                    --rhi-ui-logo-gray: #FFF;
                }

                .cls-1 {
                    fill: var(--rhi-ui-logo-black, #000);
                }

                .cls-2 {
                    fill: var(--rhi-ui-logo-gray, #7F7F7F);
                }
                
                .cls-3 {
                    fill: var(--rhi-ui-logo-blue, #0072CE);
                }
            </style>
            <!-- shadow DOM for your element -->
            <svg id="rhi-logo"
                 data-name="Layer 1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 573 168">
                <title>rhi-logo</title>
                <path class="cls-1" d="M201.65,63.27H196.5V75.79a1.53,1.53,0,1,1-3.05,0V48.35a2,2,0,0,1,2-2h7.78a8.39,8.39,0,0,1,6.12,2.3A8.69,8.69,0,0,1,211.77,55c0,4.45-2.6,7.53-6.79,8.2l6.75,11.94a1.28,1.28,0,0,1,.19.7,1.54,1.54,0,0,1-.75,1.33,1.66,1.66,0,0,1-.74.2,1.45,1.45,0,0,1-1.26-.78Zm1.53-2.91a5.8,5.8,0,0,0,4.1-1.4,5.36,5.36,0,0,0,1.45-4,6,6,0,0,0-1.49-4.26,5.59,5.59,0,0,0-4.06-1.48H196.5V60.36Z"/><path class="cls-1" d="M216.14,47.83a2,2,0,1,1,3.93,0,2,2,0,1,1-3.93,0Zm.49,8.24a1.48,1.48,0,0,1,3,0V75.83a1.48,1.48,0,1,1-3,0Z"/><path class="cls-1" d="M225.18,62.58a7.56,7.56,0,0,1,8-8,12.76,12.76,0,0,1,5.71,1.32,1.47,1.47,0,0,1,.84,1.3,1.44,1.44,0,0,1-1.48,1.41,2,2,0,0,1-.66-.15,9.9,9.9,0,0,0-4.41-1.14c-3.15,0-5,1.89-5,5v7.2c0,3.14,1.86,5,5,5a10,10,0,0,0,4.41-1.08,1.79,1.79,0,0,1,.66-.18,1.45,1.45,0,0,1,1.48,1.4,1.42,1.42,0,0,1-.84,1.3,12.62,12.62,0,0,1-5.71,1.31,7.56,7.56,0,0,1-8-8Z"/><path class="cls-1" d="M247.13,66.37v9.46a1.48,1.48,0,1,1-3,0V47.35a1.48,1.48,0,1,1,3,0v15.8L256.21,55a1.45,1.45,0,0,1,1-.4A1.49,1.49,0,0,1,258.69,56a1.67,1.67,0,0,1-.47,1.14l-8.78,7.64,9.16,10a1.48,1.48,0,0,1-1.09,2.49,1.46,1.46,0,0,1-1.14-.52Z"/><path class="cls-1" d="M288.85,62.48H275.93V75.79a1.53,1.53,0,1,1-3.06,0V47.38a1.53,1.53,0,0,1,3.06,0V59.56h12.92V47.38a1.57,1.57,0,0,1,1.52-1.52,1.53,1.53,0,0,1,1.52,1.52V75.79a1.53,1.53,0,0,1-1.52,1.53,1.57,1.57,0,0,1-1.52-1.53Z"/><path class="cls-1" d="M312.7,74.31a2,2,0,0,1-1.37,1.92,20.42,20.42,0,0,1-6.56,1.09,8.87,8.87,0,0,1-6.07-1.87,7,7,0,0,1,0-9.67c1.35-1.23,3.41-1.77,6.07-1.77h5V61.26c0-2.57-1.87-3.93-4.62-3.93a9.84,9.84,0,0,0-5,1.49,1.26,1.26,0,0,1-.7.22,1.4,1.4,0,0,1-1.49-1.39,1.57,1.57,0,0,1,.74-1.32,12.16,12.16,0,0,1,6.46-1.74c4.1,0,7.58,2.19,7.58,6.63Zm-3-7.54h-5c-4.45,0-5,2.09-5,3.83s.58,4,5,4a17.08,17.08,0,0,0,5-.74Z"/><path class="cls-1" d="M331,62.36c0-3.14-1.89-5-5-5a17.32,17.32,0,0,0-5,.74V75.83a1.46,1.46,0,0,1-1.48,1.49A1.49,1.49,0,0,1,318,75.83V57.59a2,2,0,0,1,1.41-1.9,19.42,19.42,0,0,1,6.58-1.1,7.57,7.57,0,0,1,8,8V75.83a1.49,1.49,0,0,1-1.49,1.49A1.46,1.46,0,0,1,331,75.83Z"/><path class="cls-1" d="M342.44,66.07a5.67,5.67,0,0,1-3.81-5.55c0-3.61,3.17-5.93,7.05-5.93a12.69,12.69,0,0,1,5.34,1.1,1.51,1.51,0,0,1,.92,1.38,1.39,1.39,0,0,1-1.48,1.37,1.31,1.31,0,0,1-.56-.15,11.09,11.09,0,0,0-4.53-1c-1.73,0-3.77.84-3.77,3.07a3.26,3.26,0,0,0,2.16,3l4.13,1.66c2.61,1.05,4.37,3.12,4.37,5.79,0,3.63-3,6.46-7,6.46a12.92,12.92,0,0,1-5.74-1.26,1.46,1.46,0,0,1-.88-1.35,1.4,1.4,0,0,1,1.49-1.4,1.61,1.61,0,0,1,.59.18,11.76,11.76,0,0,0,4.7,1.08c2,0,3.89-1.22,3.89-3.23,0-1.82-.92-2.78-2.77-3.57Z"/><path class="cls-1" d="M359.27,66.89v2.45c0,3.15,1.9,5.23,5,5.23a12.3,12.3,0,0,0,5-1.22,1.81,1.81,0,0,1,.6-.13,1.41,1.41,0,0,1,1.48,1.41,1.39,1.39,0,0,1-.8,1.3,14,14,0,0,1-6.25,1.39c-4.81,0-8-3.23-8-8V62.58c0-4.77,3.16-8,8-8s7.93,3.22,7.93,8v2.27a2,2,0,0,1-2,2Zm10-4.53c0-3.14-1.89-5-5-5a4.63,4.63,0,0,0-5,5v1.79h10Z"/><path class="cls-1" d="M390.31,62.36c0-3.14-1.89-5-5-5a17,17,0,0,0-5,.74V75.83a1.49,1.49,0,0,1-1.49,1.49,1.47,1.47,0,0,1-1.49-1.49V57.59a2.06,2.06,0,0,1,1.37-1.9,19.65,19.65,0,0,1,6.62-1.1c4.73,0,7.93,3.22,7.93,8V75.83a1.48,1.48,0,1,1-3,0Z"/><path class="cls-1" d="M409.15,47.38a1.52,1.52,0,1,1,3,0V75.79a1.52,1.52,0,1,1-3,0Z"/><path class="cls-1" d="M431.36,62.36c0-3.14-1.88-5-5-5a17.2,17.2,0,0,0-5,.74V75.83a1.49,1.49,0,1,1-3,0V57.59a2,2,0,0,1,1.4-1.9,19.26,19.26,0,0,1,6.58-1.1c4.77,0,7.94,3.22,7.94,8V75.83a1.49,1.49,0,1,1-3,0Z"/><path class="cls-1" d="M442.34,66.07a5.64,5.64,0,0,1-3.77-5.55c0-3.61,3.17-5.93,7.06-5.93a12.82,12.82,0,0,1,5.33,1.1,1.51,1.51,0,0,1,.92,1.38,1.41,1.41,0,0,1-1.48,1.37,1.18,1.18,0,0,1-.56-.15,11.1,11.1,0,0,0-4.57-1c-1.69,0-3.73.84-3.73,3.07a3.22,3.22,0,0,0,2.16,3l4.13,1.66c2.61,1.05,4.33,3.12,4.33,5.79,0,3.63-3,6.46-7,6.46a12.84,12.84,0,0,1-5.73-1.26,1.38,1.38,0,0,1-.89-1.35,1.4,1.4,0,0,1,1.49-1.4,1.72,1.72,0,0,1,.6.18,11.64,11.64,0,0,0,4.65,1.08c2.08,0,3.89-1.22,3.89-3.23,0-1.82-.91-2.78-2.73-3.57Z"/><path class="cls-1" d="M457.09,47.35a1.48,1.48,0,0,1,1.49-1.49,1.45,1.45,0,0,1,1.48,1.49V55h5.05a1.43,1.43,0,0,1,1.44,1.44,1.41,1.41,0,0,1-1.44,1.4h-5.05V71.45a2.77,2.77,0,0,0,2.77,3c.64,0,1.88-.18,2.32-.18a1.44,1.44,0,0,1,1.4,1.4,1.46,1.46,0,0,1-1.23,1.45,19.27,19.27,0,0,1-2.49.2,5.73,5.73,0,0,1-5.74-6Z"/><path class="cls-1" d="M470.76,47.83a2,2,0,1,1,3.93,0,2,2,0,1,1-3.93,0Zm.49,8.24a1.48,1.48,0,1,1,3,0V75.83a1.48,1.48,0,1,1-3,0Z"/><path class="cls-1" d="M480.66,47.35a1.49,1.49,0,0,1,1.49-1.49,1.45,1.45,0,0,1,1.48,1.49V55h5a1.42,1.42,0,0,1,1.45,1.44,1.4,1.4,0,0,1-1.45,1.4h-5V71.45a2.77,2.77,0,0,0,2.77,3c.64,0,1.88-.18,2.29-.18a1.42,1.42,0,0,1,1.4,1.4,1.47,1.47,0,0,1-1.21,1.45,19.55,19.55,0,0,1-2.48.2,5.71,5.71,0,0,1-5.74-6Z"/><path class="cls-1" d="M507.09,56.07a1.49,1.49,0,0,1,1.48-1.48,1.52,1.52,0,0,1,1.48,1.48V74.31a2,2,0,0,1-1.37,1.92,20.42,20.42,0,0,1-6.56,1.09c-4.94,0-8-3.13-8-8V56.07a1.49,1.49,0,0,1,3,0V69.56c0,3.14,1.87,5,5,5a17.23,17.23,0,0,0,5-.74Z"/><path class="cls-1" d="M516,47.35a1.49,1.49,0,1,1,3,0V55h5a1.41,1.41,0,0,1,1.44,1.44,1.39,1.39,0,0,1-1.44,1.4h-5V71.45a2.75,2.75,0,0,0,2.76,3c.65,0,1.85-.18,2.29-.18a1.43,1.43,0,0,1,1.4,1.4,1.47,1.47,0,0,1-1.2,1.45,19.41,19.41,0,0,1-2.49.2,5.7,5.7,0,0,1-5.73-6Z"/><path class="cls-1" d="M531.78,66.89v2.45c0,3.15,1.88,5.23,5,5.23a12.34,12.34,0,0,0,5-1.22,1.86,1.86,0,0,1,.6-.13,1.43,1.43,0,0,1,.69,2.71,14,14,0,0,1-6.26,1.39,7.54,7.54,0,0,1-8-8V62.58c0-4.77,3.16-8,8-8s7.94,3.22,7.94,8v2.27a2,2,0,0,1-2,2Zm10-4.53c0-3.14-1.88-5-5-5s-5,1.89-5,5v1.79h10Z"/><path class="cls-1" d="M193.45,90.44A1.53,1.53,0,0,1,195,88.92a1.55,1.55,0,0,1,1.52,1.52v28.41a1.54,1.54,0,0,1-1.52,1.52,1.52,1.52,0,0,1-1.53-1.52Z"/><path class="cls-1" d="M216.09,105.43c0-3.17-1.86-5.05-5-5.05a17.45,17.45,0,0,0-5,.76v17.75a1.48,1.48,0,1,1-3,0V100.66a2.08,2.08,0,0,1,1.4-1.92,19.89,19.89,0,0,1,6.59-1.08c4.77,0,7.95,3.2,7.95,8v13.25a1.49,1.49,0,0,1-3,0Z"/><path class="cls-1" d="M228,109.12a5.62,5.62,0,0,1-3.81-5.53c0-3.61,3.21-5.93,7.07-5.93a13,13,0,0,1,5.34,1.08,1.56,1.56,0,0,1,.91,1.4A1.38,1.38,0,0,1,236,101.5a1.07,1.07,0,0,1-.56-.15,10.88,10.88,0,0,0-4.54-1c-1.71,0-3.76.84-3.76,3.09a3.23,3.23,0,0,0,2.19,3l4.08,1.64a6.33,6.33,0,0,1,4.38,5.81c0,3.65-3,6.45-7,6.45a13.23,13.23,0,0,1-5.76-1.24,1.47,1.47,0,0,1-.89-1.36,1.41,1.41,0,0,1,1.5-1.4,1.29,1.29,0,0,1,.61.2,11.82,11.82,0,0,0,4.66,1.08c2.06,0,3.89-1.24,3.89-3.25,0-1.84-.92-2.8-2.74-3.57Z"/><path class="cls-1" d="M243.15,90.41a1.48,1.48,0,0,1,1.49-1.49,1.46,1.46,0,0,1,1.47,1.49v7.68h5a1.43,1.43,0,1,1,0,2.86h-5v13.53a2.79,2.79,0,0,0,2.78,3c.64,0,1.85-.2,2.3-.2a1.43,1.43,0,0,1,1.4,1.4,1.46,1.46,0,0,1-1.22,1.45,17.59,17.59,0,0,1-2.48.19,5.73,5.73,0,0,1-5.74-6Z"/><path class="cls-1" d="M257.25,90.89a2,2,0,0,1,2-2,1.94,1.94,0,0,1,2,2,2,2,0,0,1-2,2A2,2,0,0,1,257.25,90.89Zm.48,8.25a1.49,1.49,0,0,1,3,0v19.75a1.49,1.49,0,0,1-3,0Z"/><path class="cls-1" d="M267.59,90.41a1.5,1.5,0,0,1,3,0v7.68h5a1.43,1.43,0,1,1,0,2.86h-5v13.53a2.78,2.78,0,0,0,2.74,3c.64,0,1.87-.2,2.31-.2a1.42,1.42,0,0,1,1.39,1.4,1.45,1.45,0,0,1-1.21,1.45,17.4,17.4,0,0,1-2.49.19,5.72,5.72,0,0,1-5.73-6Z"/><path class="cls-1" d="M294.66,99.14a1.48,1.48,0,0,1,3,0v18.24a2,2,0,0,1-1.34,1.91,20.32,20.32,0,0,1-6.59,1.08c-4.93,0-8-3.12-8-8V99.14a1.5,1.5,0,0,1,1.49-1.48,1.48,1.48,0,0,1,1.48,1.48V112.6c0,3.16,1.88,5.05,5,5.05a16.76,16.76,0,0,0,5-.76Z"/><path class="cls-1" d="M304.05,90.41a1.48,1.48,0,1,1,3,0v7.68h5a1.43,1.43,0,1,1,0,2.86h-5v13.53a2.79,2.79,0,0,0,2.77,3c.64,0,1.85-.2,2.29-.2a1.41,1.41,0,0,1,1.39,1.4,1.45,1.45,0,0,1-1.2,1.45,17.59,17.59,0,0,1-2.48.19,5.71,5.71,0,0,1-5.73-6Z"/><path class="cls-1" d="M341.32,106.35h-5.13v12.5a1.55,1.55,0,0,1-1.52,1.52,1.53,1.53,0,0,1-1.53-1.52V91.4a2,2,0,0,1,2.05-2H343a8.31,8.31,0,0,1,6.08,2.29,8.78,8.78,0,0,1,2.4,6.36c0,4.45-2.6,7.53-6.8,8.17l6.77,12a1.42,1.42,0,0,1,.16.68,1.51,1.51,0,0,1-.72,1.33,1.65,1.65,0,0,1-.76.19,1.38,1.38,0,0,1-1.25-.76Zm1.56-2.93A5.72,5.72,0,0,0,347,102a5.37,5.37,0,0,0,1.44-4,6,6,0,0,0-1.48-4.25,5.57,5.57,0,0,0-4.05-1.48h-6.69v11.13Z"/><path class="cls-1" d="M356.7,90.89a2,2,0,1,1,3.94,0,2,2,0,1,1-3.94,0Zm.49,8.25a1.48,1.48,0,0,1,3,0v19.75a1.48,1.48,0,1,1-3,0Z"/><path class="cls-1" d="M366.16,105.64c0-4.78,3.2-8,8-8a12.68,12.68,0,0,1,5.7,1.31,1.45,1.45,0,0,1,.83,1.29,1.41,1.41,0,0,1-1.48,1.4,1.81,1.81,0,0,1-.64-.12,9.64,9.64,0,0,0-4.41-1.16c-3.17,0-5,1.88-5,5.05v7.17c0,3.16,1.87,5.05,5,5.05a10.36,10.36,0,0,0,4.41-1.08,1.21,1.21,0,0,1,.64-.2,1.44,1.44,0,0,1,1.48,1.4,1.51,1.51,0,0,1-.83,1.33,12.78,12.78,0,0,1-5.7,1.27c-4.81,0-8-3.21-8-8Z"/><path class="cls-1" d="M388.55,109.44v9.45a1.48,1.48,0,1,1-3,0V90.41a1.48,1.48,0,1,1,3,0v15.78l9.1-8.14a1.36,1.36,0,0,1,1-.39,1.49,1.49,0,0,1,1.48,1.44,1.62,1.62,0,0,1-.48,1.12l-8.77,7.65,9.17,10a1.63,1.63,0,0,1,.37,1,1.46,1.46,0,0,1-1.49,1.48,1.49,1.49,0,0,1-1.12-.52Z"/><path class="cls-1" d="M437,105.55H424v13.3a1.53,1.53,0,0,1-3,0V90.44a1.53,1.53,0,0,1,3,0v12.19H437V90.44a1.52,1.52,0,0,1,3,0v28.41a1.52,1.52,0,1,1-3,0Z"/><path class="cls-1" d="M461.25,117.38a2,2,0,0,1-1.37,1.91,20.16,20.16,0,0,1-6.57,1.08,9,9,0,0,1-6.06-1.84,7.07,7.07,0,0,1,0-9.69c1.38-1.24,3.42-1.76,6.06-1.76h5v-2.73c0-2.61-1.84-4-4.61-4a10.16,10.16,0,0,0-5,1.48,1.26,1.26,0,0,1-.72.25,1.41,1.41,0,0,1-1.49-1.41,1.59,1.59,0,0,1,.76-1.32,12.38,12.38,0,0,1,6.45-1.72c4.09,0,7.58,2.16,7.58,6.61Zm-3-7.54h-5c-4.45,0-5,2.08-5,3.85s.56,4,5,4a16.66,16.66,0,0,0,5-.76Z"/><path class="cls-1" d="M480.88,105.43c0-3.17-1.88-5.05-5-5.05a17.21,17.21,0,0,0-5,.76v17.75a1.49,1.49,0,0,1-3,0V100.66a2.06,2.06,0,0,1,1.41-1.92,19.81,19.81,0,0,1,6.57-1.08,7.55,7.55,0,0,1,8,8v13.25a1.48,1.48,0,0,1-1.49,1.48,1.45,1.45,0,0,1-1.47-1.48Z"/><path class="cls-1" d="M492.73,109.12a5.63,5.63,0,0,1-3.8-5.53c0-3.61,3.2-5.93,7.09-5.93a13,13,0,0,1,5.32,1.08,1.52,1.52,0,0,1,.89,1.4,1.38,1.38,0,0,1-1.48,1.36,1.17,1.17,0,0,1-.56-.15,10.9,10.9,0,0,0-4.53-1c-1.72,0-3.77.84-3.77,3.09a3.24,3.24,0,0,0,2.21,3l4.09,1.64a6.35,6.35,0,0,1,4.36,5.81c0,3.65-3,6.45-7,6.45a13.21,13.21,0,0,1-5.77-1.24,1.46,1.46,0,0,1-.88-1.36,1.39,1.39,0,0,1,1.48-1.4,1.08,1.08,0,0,1,.6.2,11.88,11.88,0,0,0,4.69,1.08c2.05,0,3.89-1.24,3.89-3.25,0-1.84-.92-2.8-2.77-3.57Z"/><path class="cls-1" d="M510,110v2.44c0,3.13,1.89,5.25,5,5.25a12,12,0,0,0,5-1.24,1.44,1.44,0,0,1,.6-.13,1.41,1.41,0,0,1,1.48,1.4,1.5,1.5,0,0,1-.84,1.33,13.92,13.92,0,0,1-6.21,1.36c-4.8,0-8-3.21-8-8v-6.76c0-4.78,3.22-8,8-8a7.55,7.55,0,0,1,7.94,8v2.28a2.06,2.06,0,0,1-2,2Zm10-4.53c0-3.17-1.88-5.05-5-5.05s-5,1.88-5,5.05v1.76h10Z"/><path class="cls-1" d="M541.49,105.43c0-3.17-1.88-5.05-5-5.05a17.39,17.39,0,0,0-5.06.76v17.75a1.44,1.44,0,0,1-1.47,1.48,1.49,1.49,0,0,1-1.49-1.48V100.66a2.05,2.05,0,0,1,1.4-1.92,20,20,0,0,1,6.62-1.08c4.73,0,7.93,3.2,7.93,8v13.25a1.49,1.49,0,0,1-3,0Z"/><path class="cls-1" d="M31.68,64.85C39.93,45.86,61,33,83,29a30.32,30.32,0,0,0-6.79,10.27c-4.18,10.68-1,22.69,8.66,33.32,6.36,6.67,9.67,16.27,7.6,27.43-2.12,11.36-9.3,22.35-19.9,30.93C35.66,120.43,20.31,90.92,31.68,64.85Z"/><path class="cls-1" d="M101.06,80.36c1.22-4.06,6.25-6.52,11.31-5.62s8.68,4.92,7.9,9.16c-.84,4.42-6.1,7.3-11.66,6.21S99.79,84.6,101.06,80.36Z"/><path class="cls-2" d="M91.56,62.47c1.29-3.34,6-5.34,10.52-4.6s7.59,4.05,6.62,7.47c-1,3.62-5.9,5.94-10.84,5.07S90.19,65.92,91.56,62.47Z"/><path class="cls-3" d="M82.59,45.58c1.37-2.82,5.76-4.5,9.9-3.88s6.75,3.39,5.67,6.3S92.45,53,88,52.25,81.17,48.49,82.59,45.58Z"/><path class="cls-3" d="M90,31.36c1.23-2.36,5.27-3.76,9.08-3.26s6.18,2.88,5.17,5.3S99.05,37.56,95,36.93,88.75,33.82,90,31.36Z"/><path class="cls-1" d="M116.84,128.75c.63,5.33-4.62,10.28-11.69,11.14s-13.31-2.83-13.93-8.15,4.59-10.32,11.69-11.13S116.23,123.44,116.84,128.75Z"/><path class="cls-1" d="M125.21,104.81c.62,4.89-4,9.51-10.38,10.36s-12-2.52-12.64-7.39,4-9.52,10.35-10.34S124.55,99.92,125.21,104.81Z"/><path class="cls-3" d="M117.69,30c23.23,3.79,45.45,17.27,53.69,37.25,10.45,25.28-3.56,53.69-37.7,66.2a82.11,82.11,0,0,0,3.42-25.58c-.61-20.55-9.75-36.67-22.57-47.23-6.23-5.3-9.28-11.6-8.24-17.71,1-5.61,5.3-10.07,11.43-12.91Z"/><path class="cls-1" d="M193.75,84a.92.92,0,0,1-.83-1h0a1,1,0,0,1,.83-1H543.88a1,1,0,0,1,.85,1h0a.94.94,0,0,1-.85,1H193.75Z"/></svg>
        `;
    }

    public constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.requestRender();
    }

    private requestRender(): void {
        const template: HTMLTemplateElement = <HTMLTemplateElement>document.createElement('template');
        template.innerHTML = this.getTemplate({});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define(RhiUiLogo.is, RhiUiLogo);