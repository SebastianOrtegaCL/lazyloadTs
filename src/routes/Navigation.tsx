import { Suspense } from 'react';
import {BrowserRouter, Navigate, NavLink} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import logo from '/public/vite.svg';
// import {LazyPage1, LazyPage2, LazyPage3} from "../lazyload/pages";
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} style={{ width: 150, height: 150}} alt="react logo" />
                        <ul>
                            {
                            routes.map( route => (
                                <li key={route.to}>
                                    <NavLink to={ route.to } className={ ({isActive}) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                        routes.map( route => (
                            <Route key={route.to} path={route.path} element={<route.Component />}/>
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace /> }></Route>
                    </Routes>
                </div>
            </BrowserRouter>   
        </Suspense>
    )
}