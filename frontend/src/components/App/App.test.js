import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Chance from 'chance';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import App from './App';

describe('App', () => {
  let wrapper;
  let chance;

  beforeEach(() => {
    chance = Chance();

    wrapper = shallow(<App />);
  });

  it('is wrapped in a div', () => {
    expect(wrapper.type()).toEqual('div');
  });

  describe('Header', () => {
    let header;

    beforeEach(() => {
      header = wrapper.childAt(0);
    });

    it('is a Typography component', () => {
      expect(header.type()).toEqual(Typography);
    });

    it('displays as the correct variant', () => {
      expect(header.props().variant).toEqual('display4');
    });

    it('displays the correct text', () => {
      const headerText = header.childAt(0).text();

      expect(headerText).toEqual('Alarm Clock');
    });
  });

  describe('Add Alarm FAB', () => {
    let addAlarmFab;

    beforeEach(() => {
      addAlarmFab = wrapper.childAt(1);
    });

    it('is a Button component', () => {
      expect(addAlarmFab.type()).toEqual(Button);
    });

    it('displays as a fab', () => {
      expect(addAlarmFab.props().variant).toEqual('fab');
    });

    it('uses the primary color', () => {
      expect(addAlarmFab.props().color).toEqual('primary');
    });

    it('sets the state variable for if the add alarm dialog is open to true', () => {
      wrapper.setState({ isAddAlarmDialogOpen: chance.bool() });

      addAlarmFab = wrapper.childAt(1);

      const { onClick } = addAlarmFab.props();

      onClick();

      expect(wrapper.state().isAddAlarmDialogOpen).toBeTruthy();
    });

    describe('FAB Icon', () => {
      let fabIcon;

      beforeEach(() => {
        fabIcon = addAlarmFab.childAt(0);
      });

      it('is a SvgIcon component', () => {
        expect(fabIcon.type()).toEqual(SvgIcon);
      });

      it('contains an AddIcon component', () => {
        const addIcon = fabIcon.childAt(0);

        expect(addIcon.type()).toEqual(AddIcon);
      });
    });

    describe('Add Alarm Dialog', () => {
      let addAlarmDialog;

      beforeEach(() => {
        addAlarmDialog = wrapper.childAt(2);
      });

      it('is a Dialog component', () => {
        expect(addAlarmDialog.type()).toEqual(Dialog);
      });

      it('has the state variable for if the dialog is open passed as the open prop', () => {
        const isAddAlarmDialogOpen = chance.bool();

        wrapper.setState({ isAddAlarmDialogOpen });

        addAlarmDialog = wrapper.childAt(2);

        expect(addAlarmDialog.props().open).toEqual(isAddAlarmDialogOpen);
      });

      it('sets the state variable for if the add alarm dialog is open to true when closed', () => {
        const isAddAlarmDialogOpen = chance.bool();

        wrapper.setState({ isAddAlarmDialogOpen });

        addAlarmDialog = wrapper.childAt(2);

        const { onClose } = addAlarmDialog.props();

        onClose();

        expect(wrapper.state.open).toBeFalsy();
      });
    });
  });
});
