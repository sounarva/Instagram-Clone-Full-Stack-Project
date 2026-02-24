import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            icon: <svg aria-label="Home" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.657a2 2 0 00-2-2 2 2 0 00-2 2V22a1 1 0 01-1 1H2V9.729a1.001 1.001 0 01.422-.818l9.001-6.123a.999.999 0 011.156 0l9.001 6.123a1 1 0 01.422.818V22a1 1 0 01-1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
            label: 'Home',
            active: true
        },
        {
            icon: <svg aria-label="Search" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>,
            label: 'Search'
        },
        {
            icon: <svg aria-label="Explore" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.941 7.581 16.424 10.063 10.063 16.424 7.581 13.941 13.941" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><circle cx="12.001" cy="12.001" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>,
            label: 'Explore'
        },
        {
            icon: <svg aria-label="Reels" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.008" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12a2 2 0 00-2 2v7a2 2 0 002 2h18a2 2 0 002-2v-7a2 2 0 00-2-2H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.542 11.71l5.417 3.13a1 1 0 010 1.73l-5.417 3.13A1 1 0 018 18.83v-6.26a1 1 0 011.542-.86z" fill="currentColor"></path></svg>,
            label: 'Reels'
        },
        {
            icon: <svg aria-label="Messages" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.703.703 0 00-.533.04l-3.28 1.812a.703.703 0 01-1.013-.794l.851-3.467a.703.703 0 00-.188-.632A9.756 9.756 0 012.25 12.002a9.705 9.705 0 019.753-10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
            label: 'Messages',
            dot: true
        },
        {
            icon: <svg aria-label="Notifications" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.194 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.32.441.526.91.617 1.387.091-.477.297-.946.617-1.387a4.21 4.21 0 013.675-1.941z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>,
            label: 'Notifications',
            dot: true
        },
        {
            icon: <svg aria-label="New post" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg>,
            label: 'Create'
        },
        {
            icon: <div className="profile-mini-img"><img src="https://imgs.search.brave.com/gM0DGt0wClo49xa3sWIKsCDME15MErrjPVArXfZ815U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MzU0Lzg1Mi9zbWFs/bC9tYWxlLXBvcnRy/YWl0LXBlb3BsZS1w/cm9maWxlLXBlcmZl/Y3QtZm9yLXNvY2lh/bC1tZWRpYS1hbmQt/YnVzaW5lc3MtcHJl/c2VudGF0aW9ucy11/c2VyLWludGVyZmFj/ZS11eC1ncmFwaGlj/LWFuZC13ZWItZGVz/aWduLWFwcGxpY2F0/aW9ucy1hbmQtaW50/ZXJmYWNlcy1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw" alt="Profile" /></div>,
            label: 'Profile'
        }
    ];

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <svg aria-label="Instagram" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item, index) => (
                    <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
                        <div className="icon-wrapper">
                            {item.icon}
                            {item.dot && <span className="dot"></span>}
                        </div>
                        <span className="nav-label">{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="nav-item">
                    <div className="icon-wrapper">
                        <svg aria-label="Settings" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="20" y2="20"></line></svg>
                    </div>
                    <span className="nav-label">More</span>
                </div>
                <div className="nav-item meta-item">
                    <div className="icon-wrapper">
                        <svg aria-label="Threads" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.9744 16.1635C20.6888 17.0545 20.199 17.5 19.5048 17.5C18.6273 17.5 17.7647 16.9735 16.917 15.9206C16.3283 15.1893 15.5026 13.7996 14.44 11.7515C13.984 10.8723 13.5611 10.0959 13.1714 9.42225C13.4809 8.93372 13.757 8.54177 13.9998 8.24641C14.957 7.08214 15.9587 6.5 17.0048 6.5C17.8397 6.5 18.635 7.03584 19.3907 8.10753C20.1673 9.20896 20.7114 10.5694 21.0228 12.1888C21.3292 13.782 21.3131 15.1069 20.9744 16.1635ZM12.0049 11.4296C12.2149 11.8151 12.4349 12.2294 12.6647 12.6725C13.7887 14.839 14.6869 16.3397 15.3591 17.1748C16.6071 18.7249 17.989 19.5 19.5048 19.5C20.3608 19.5 21.0931 19.2297 21.7019 18.6892C22.2267 18.2233 22.6191 17.5849 22.879 16.774C23.3216 15.3931 23.3576 13.7388 22.9868 11.8112C22.6212 9.90978 21.9673 8.29105 21.0252 6.95497C19.8712 5.31832 18.531 4.5 17.0048 4.5C15.3288 4.5 13.8121 5.32543 12.4549 6.97628C12.3132 7.14862 12.1632 7.34668 12.0049 7.57046C11.8466 7.34668 11.6966 7.14862 11.5548 6.97628C10.1976 5.32543 8.68102 4.5 7.005 4.5C5.4788 4.5 4.13867 5.31833 2.98462 6.95498C2.04252 8.29105 1.38864 9.90977 1.02298 11.8112C0.652277 13.7388 0.688225 15.3931 1.13083 16.774C1.39074 17.5849 1.78309 18.2233 2.30788 18.6892C2.91672 19.2297 3.6491 19.5 4.50502 19.5C6.02087 19.5 7.40276 18.7249 8.65069 17.1748C9.32296 16.3397 10.2211 14.839 11.345 12.6726C11.575 12.2294 11.7949 11.8151 12.0049 11.4296ZM10.8384 9.42226C10.4487 10.0959 10.0258 10.8723 9.56972 11.7515C8.50715 13.7996 7.6815 15.1893 7.09279 15.9206C6.24514 16.9735 5.38255 17.5 4.50502 17.5C3.81084 17.5 3.32096 17.0545 3.03539 16.1635C2.69674 15.1069 2.6806 13.782 2.98699 12.1888C3.29843 10.5694 3.84248 9.20896 4.61913 8.10752C5.37481 7.03584 6.1701 6.5 7.005 6.5C8.05111 6.5 9.05277 7.08214 10.01 8.24641C10.2528 8.54176 10.5289 8.93371 10.8384 9.42226Z" fillRule="evenodd"></path></svg>
                    </div>
                    <span className="nav-label">Also from Meta</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
