import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import AllWithdraw from "../components/Admin/AllWithdraw";
describe('ALL Test case', function () {
let props: any;
let state: any;
beforeEach(() => {
  props ={},
  state ={}
})

configure({adapter: new Adapter()});
   it('should display pass in number', function () {
       const wrapper =  shallow(<AllWithdraw />)
       expect(wrapper.exists()).toBe(true);
   });
});