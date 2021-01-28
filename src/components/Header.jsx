import React from 'react'
// import FacebookIcon from '@material-ui/icons/Facebook';


function Header() {
    return (
        <>
            <nav className="navbar  w-100">
                <div className="container-fluid">
                
                    <a className="navbar-brand ml-5 fs-15 " href='/'>SKeep</a>
                    <p className='my-auto mx-3 '><a href='https://github.com/shivam-2311 ' target='_shiv'><i class="fab fa-github fa-2x"></i></a>
                    <a href='https://www.facebook.com/profile.php?id=100009282765633' target='_shiv'><i class="fab fa-facebook fa-2x"></i></a>
                    <a href='https://www.instagram.com/optimus_2311/' target='_shiv'> <i class="fab fa-instagram-square fa-2x "></i></a>

</p>
                </div>
            </nav>
        </>
    )
}

export default Header
