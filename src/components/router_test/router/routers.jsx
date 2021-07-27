import DefaultDM from '../dashboard/hang_hoa/danh_muc/DefaultDM';
import ProductDetail from '../products/ProductDetail';
import Products from '../products/Products';
import DefaultLayout from '../router_content/DefaultLayout';
import Router1 from '../router_content/Router1';
import Router2 from '../router_content/Router2';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: Products
      },
      {
        path: "/router1",
        layout: DefaultLayout,
        component: Router1
      },
      {
        path: "/router2",
        layout: DefaultLayout,
        component: Router2
      },
      {
        path: "/danh-muc",
        layout: DefaultLayout,
        component: DefaultDM
      },
];