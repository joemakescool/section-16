// Pages
import User from '@/components/user/User'
import Home from '@/components/Home'
import Hello from '@/components/Hello'
import UserStart from '@/components/user/UserStart'
import UserDetail from "@/components/user/UserDetail";
import UserEdit from "@/components/user/UserEdit";
import Header from '@/components/Header'

function dynamicPropsFn (route) {
    const now = new Date();
    return {
        name: (now.getFullYear() + parseInt(route.params.years)) + '!'
    }
}

export const routes = [
    { path: '/user',
        components: {
            default: User,
            'header-bottom': Header
        },
        props: {
            name: 'User Prop I did it!',
            hello: 'hello',
            henry: 'henry',
            Joe: {
                name: 'Joe',
                house: 'White',
                number: 8018198821
            }
        },
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail,
                beforeEnter: (to, from, next) => {
                    // eslint-disable-next-line no-console
                    console.log('inside route setup', to, from , next);
                    next();
                } },
            { path: ':id/edit', component: UserEdit, name: 'userEdit'}
        ]
        }, // user/id
    { path: '', Home, props: { name: 'Joe' }, name: 'home', components: { default: Home, 'header-top': Header } },
    { path: '/hello', component: Hello }, // No props, no nothing
    { path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
    { path: '/static', component: Hello, props: { name: 'static variable passed' }}, // static values
    { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
    { path: '/attrs', component: Hello, props: { name: 'attrs' }},
    { path: '/redirect-me', redirect: '/user'},
    { path: '*', redirect: { name: 'home' } }

];
