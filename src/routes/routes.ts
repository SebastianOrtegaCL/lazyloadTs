import {LazyPage1, LazyPage2, LazyPage3} from "../lazyload/pages";

import {lazy, LazyExoticComponent} from 'react';
import NoLazy from '../lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import("../lazyload/layout/LazyLayout"))



export const routes:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout',
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
    
]