import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { headerData } from './HeaderData';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
	const { language, toggleLanguage } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const currentData = headerData[language];

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};


	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuRef]);

	return (
		<div className="header">
			<div className="container-fluid">
				<div className="header-wrapper">
					{/* Header Logo */}
					<div className="header-logo">
						<h2>
							<Link href="/">{currentData.logo}</Link>
						</h2>
					</div>
					{/* Header Nav */}
					<div className="header-nav">
						{/* Language Toggle */}
						<button 
							type="button" 
							onClick={toggleLanguage} 
							className="button button-sm button-white language-toggle"
							aria-label="Toggle Language"
						>
							<span data-text={language}>{language}</span>
						</button>
						{/* Nav Menu Toggle */}
						<button type="button" onClick={toggleMenu} className="button button-sm button-dot button-white">
							<span data-text="Menu">Menu</span>
						</button>
						{/* Nav Menu Box */}
						<div ref={menuRef} className={`nav-box ${isMenuOpen ? 'show' : ''}`}>
							<ul className="nav">
								<li className="nav-item">
									<Link className="nav-link" href="/#about"><i className="bi bi-arrow-right"></i>{currentData.nav.about}</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/#services"><i className="bi bi-arrow-right"></i>{currentData.nav.services}</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/#portfolio"><i className="bi bi-arrow-right"></i>{currentData.nav.portfolio}</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/#awards"><i className="bi bi-arrow-right"></i>{currentData.nav.awards}</Link>
								</li>
							</ul>
						</div>
					</div> {/* end header-nav */}
				</div> {/* end header-wrapper */}
			</div> {/* end container */}
		</div>
	);
};

export default Header;
