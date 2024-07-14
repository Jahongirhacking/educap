import Image from 'next/image';
import EsportsLogo from "@/assets/logos/esports_logo.png";

const Navbar = () => {
    return (
        <nav className='nav'>
            <picture>
                <Image src={EsportsLogo} alt="esports logo image" />
            </picture>

        </nav>
    )
}

export default Navbar