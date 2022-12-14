import { expect } from 'chai';
import { Button } from './index';
import * as sinon from 'sinon';

describe('button', () => {
    it('should render', () => {
        new Button({
            buttonClass: "test button",
            buttonText: "test button",
        })
    });

    it('element should return button', () => {
        const button = new Button({
            buttonClass: "test button",
            buttonText: "test button",
        });
        const element = button.element;

        expect(element).to.be.instanceOf(window.HTMLButtonElement)
    });

    it('should action on click', () => {
        const clickFunctionFake = sinon.fake();

        const button = new Button({
            buttonClass: "test button",
            buttonText: "test button",
            events: {
              click: clickFunctionFake
            }
        });
        const element = button.element as HTMLButtonElement;
        element.click();

        expect(clickFunctionFake.callCount).to.eq(1);
    });
});
