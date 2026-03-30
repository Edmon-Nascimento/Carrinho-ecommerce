import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <header className='w-full px-10 py-3 bg-slate-200'>
        <nav className='max-w-7xl m-auto flex items-center justify-between'>
            <Link to="/" className='font-bold text-2xl'>
                EcShop
            </Link>

            <Link to="/cart" className='relative'>
                <FiShoppingCart size={24} color='#121212'/>
                <span className='absolute -right-3 -top-2 px-2.5 bg-sky-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs'>
                    0
                </span>
            </Link>
        </nav>
    </header>
  )
}

export default Header
