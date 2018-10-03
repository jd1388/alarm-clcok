import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Alarm from './Alarm';

describe('Alarm', () => {
    let wrapper;
    let chance;

    const generateFakeTime = (options = {}) => {
        const { isAM } = options;

        const convertToTwoDigitNumber = number => number.length === 1 ? `0${number}` : number;
    
        const ampmOffset = isAM ? 0 : 12;
        const randomHour = convertToTwoDigitNumber(`${chance.hour() + ampmOffset}`);
        const randomMinute = convertToTwoDigitNumber(`${chance.minute()}`);
    
        const randomTime = `${randomHour}:${randomMinute}`;

        return randomTime;
      }

    const renderComponent = (props = {}) => {
        const { children } = props;

        return shallow(<Alarm>{children || generateFakeTime()}</Alarm>)
    }

    beforeEach(() => {
        chance = Chance();

        wrapper = renderComponent();
    });

    it('is wrapped in a Paper component', () => {
        expect(wrapper.type()).toEqual(Paper);
    });

    describe('Time', () => {
        let time;

        beforeEach(() => {
            time = wrapper.childAt(0);
        });

        it('is a Typography component', () => {
            expect(time.type()).toEqual(Typography);
        });

        it('displays the child passed in to the Alarm component correctly when AM', () => {
            const children = generateFakeTime({ isAM: true });

            wrapper = renderComponent({ children });
            time = wrapper.childAt(0);

            const timeText = time.childAt(0).text();

            expect(timeText).toEqual(`${children} AM`);
        });

        it('displays the child passed in to the Alarm component correctly when PM', () => {
            const children = generateFakeTime({ isAM: false });

            wrapper = renderComponent({ children });
            time = wrapper.childAt(0);

            const timeText = time.childAt(0).text();

            const offsetTime = children
                .split(':')
                .map((timeComponent, index) => {
                    if (index === 0) {
                        const shiftedTime = `${parseInt(timeComponent) - 12}`;
                        return shiftedTime.length === 1 ? `0${shiftedTime}` : shiftedTime;
                    }

                    return timeComponent;
                })
                .join(':');

            expect(timeText).toEqual(`${offsetTime} PM`);
        });

        it('displays the child passed in the Alarm component correctly with hour 12 and AM', () => {
            const minutes = `${chance.natural({ min: 0, max: 59 })}`;
            const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

            const children = `00:${formattedMinutes}`;

            wrapper = renderComponent({ children });
            time = wrapper.childAt(0);

            const timeText = time.childAt(0).text();

            expect(timeText).toEqual(`12:${formattedMinutes} AM`);
        });

        it('displays the child passed in the Alarm component correctly with hour 12 and PM', () => {
            const minutes = `${chance.natural({ min: 0, max: 59 })}`;
            const formattedMinutes = minutes.length === 1 ? `0${minutes}` : minutes;

            const children = `12:${formattedMinutes}`;

            wrapper = renderComponent({ children });
            time = wrapper.childAt(0);

            const timeText = time.childAt(0).text();

            expect(timeText).toEqual(`12:${formattedMinutes} PM`);
        });
    });
});
