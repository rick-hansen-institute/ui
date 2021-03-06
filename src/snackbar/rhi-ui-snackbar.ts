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

import { RhiUiSnackbarButton } from './rhi-ui-snackbar-button';
import { template as RhiUiSnackbarTemplate} from './rhi-ui-snackbar-template';
export class RhiUiSnackbar extends HTMLElement {
    public static get is(): string { return 'rhi-ui-snackbar'; }

    public static get observedAttributes(): string[] {
        const attributes: string[] = ['active', 'message'];
        return attributes;
    }

    public get active(): boolean {
        return this.hasAttribute('active');
    }

    public get align(): string {
        return this.hasAttribute('align-center') ? 'center' :
            this.hasAttribute('align-right') ? 'right' : 'left';
    }

    public set align(align: string) {
        switch (align) {
            case 'center':
                this.setAttribute('align-center', '');
                this.removeAttribute('align-right');
                break;
            case 'right':
                this.setAttribute('align-right', '');
                this.removeAttribute('align-center');
                break;
            default:
                this.removeAttribute('align-right');
                this.removeAttribute('align-center');
                break;
        }
    }

    public get message(): string {
        const message = this.getAttribute('message');
        return message ? message : '';
    }

    public set message(message: string) {
        this.setAttribute('message', message);
        this.messageElement.textContent = message;
    }

    public get persistent(): boolean {
        return this.hasAttribute('persistent');
    }

    public set persistent(persistent: boolean) {
        persistent ? this.setAttribute('persistent', '') : this.removeAttribute('persistent');
    }

    public get timeout(): number {
        const timeout = Number(this.getAttribute('timeout'));
        if (timeout && !isNaN(timeout)) {
            return timeout;
        } else {
            return 2750;
        }
    }

    public set timeout(timeout: number) {
        if (Number.isInteger(timeout) && timeout > 0) {
            this.setAttribute('timeout', String(timeout));
        } else {
            this.removeAttribute('timeout');
            throw new Error('timeout must be positive integer');
        }
    }

    private messageElement: HTMLDivElement;
    private buttonElements: HTMLButtonElement[];

    public constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        this.render(shadowRoot);

        this.messageElement = shadowRoot.querySelector(`#message`) as HTMLDivElement;
        this.buttonElements = Array.from(shadowRoot.querySelector('slot')!.assignedNodes())
            .filter((node) => node.nodeName === 'BUTTON') as HTMLButtonElement[];
    }

    public connectedCallback() {
        for (const button of this.buttonElements) {
            this.addButtonEventListener(button);
        }
    }

    public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        if (oldValue === newValue) {
            return;
        }

        switch (name) {
            case 'message':
                this.message = newValue;
                break;
            case 'active':
                if (!this.persistent && newValue !== null) {
                    setTimeout(this.hide.bind(this), this.timeout);
                }
                break;
            default:
                break;
        }
    }

    public show(): void {
        this.setAttribute('active', '');
    }

    public hide(): void {
        this.removeAttribute('active');
    }

    public setButtons(buttons: RhiUiSnackbarButton[]): void {
        for (const button of this.buttonElements) {
            button.remove();
        }

        this.buttonElements = buttons.map((button) => {
            const buttonElement = document.createElement('button');
            buttonElement.slot = '';
            buttonElement.textContent = button.text;
            if (button.eventName) {
                buttonElement.setAttribute('event-name', button.eventName);
                if (button.event) {
                    this.addEventListener(button.eventName, button.event);
                }
            }
            if (button.persistent) {
                buttonElement.setAttribute('persistent', '');
            }
            this.addButtonEventListener(buttonElement);
            this.appendChild(buttonElement);
            return buttonElement;
        });
    }

    private render(shadowRoot: ShadowRoot): void {
        const template: HTMLTemplateElement = document.createElement('template');
        template.innerHTML = RhiUiSnackbarTemplate;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    private addButtonEventListener(button: HTMLButtonElement): void {
        const eventName = button.getAttribute('event-name');
        const persistent = button.hasAttribute('persistent');

        button.addEventListener('click', () => {
            if (eventName) {
                this.dispatchEvent(new CustomEvent(eventName));
            }
            if (!persistent) {
                this.hide();
            }
        });
    }
}

customElements.define(RhiUiSnackbar.is, RhiUiSnackbar);
