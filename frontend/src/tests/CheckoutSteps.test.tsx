import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import AllWithdraw from "../components/Admin/AllWithdraw";
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
describe('ALL Test case', function () {
let props: any;
let state: any;
beforeEach(() => {
  props ={},
  state ={}
})

configure({adapter: new Adapter()});
   it('should display pass in number', function () {
       const wrapper =  shallow(<CheckoutSteps />)
       expect(wrapper.exists()).toBe(true);
   });
});