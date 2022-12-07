export default {
    name: 'list',
    component: () => import(/* webpackChunkName: "ListBillsLayout" */ '@/modules/electronic-billing/layouts/BillsElectronicLayout.vue'),
    children: [
        {
            path: '',
            name: 'list-bills',
            component: () => import(/* webpackChunkName: "ListBills" */ '@/modules/electronic-billing/views/ListBills.vue')
        },
        {
            path: 'new',
            name: 'new-bill',
            component: () => import(/* webpackChunkName: "FormNewBill" */ '@/modules/electronic-billing/views/FormNewBill.vue')
        },
        
    ]
}