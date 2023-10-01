'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { ActiveLink } from '../active-link/ActiveLink';
import Image from 'next/image';
import Logo from '../../public/images/Logo.webp';

const navItems  = [
    { path: '/about', text: 'Sobre Nosotros' },
    // { path: '/contact', text: 'Contacto'},
    { path: '/movies', text: 'Popular' },
    { path: '/mylist', text: 'Favoritas' }
]

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-items: center;
    padding: 0.5rem 1.5rem;
    width: 100%;
    justify-content: space-between;
    background-color: #060d17;
    color: white;
    opacity: 0.9;
    border:rounded;
    @media (max-width: 600px) {
        flex-direction: column;
    }


    span {
        margin: 0.5rem;
    }
    div {
        display: flex;
        flex:1;
    }
    Link {
        display: flex;
        justify-items: center;
        align-items: center;
        margin-right: 0.5rem;
    }
    

`;

export const Navbar = () => {
    return (
        <Nav className='items-center justify-center h-auto'>
            <div className='container md:flex-row flex-col mx-auto justify-center items-center'>
                <Link href={'/'}>
                    <Image
                        src={Logo}
                        width={200}
                        alt="Films App Logo"
                        priority={true}
                    />

                </Link>

                <div></div>

                {
                    navItems.map(navItem => (
                        <ActiveLink key={navItem.path} {...navItem} />
                    ))
                }
            </div>
        </Nav>
    )
}
