import React , {useRef ,useEffect} from 'react'

const Header = () => {

  const headerRef= useRef(null)
  const menuRef= useRef(null)
  const stickyHeaderFunc =() => {
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect (()=>{
  stickyHeaderFunc()
  return window.removeEventListener('scroll', stickyHeaderFunc)

  },[])
  const handleClick = e => {
    e.preventDefault()
    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop
    window.scrollTo ({
      top: location - 80,
      left: 0
    })
  }
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')
  return (
      <header
          ref={headerRef}
          className='w-full h-[80px] leading-[80px] flex items-center '
      >
          <div className='container'>
              <div className='flex items-center justify-between'>
                  {/* Logo */}
                  <div className='flex items-center gap-[10px] '>
                      <span className=' w-8 h-8 bg-primaryColor text-white text-xs rounded-full flex items-center justify-center font-bold'>
                          D
                      </span>
                      <div className=' leading-[20px] '>
                          <h2 className=' text-smallTextColor text-xl font-[700]'>
                              Davidd
                          </h2>
                          <p className=' text-smallTextColor text-sm font-[500]'>
                              personal
                          </p>
                      </div>
                  </div>
                  {/* Logo */}
                  {/* Menu */}
                  <div className='menu' ref={menuRef} onClick={toggleMenu}>
                      <ul className='flex items-center gap-10'>
                          <li>
                              <a
                                  onClick={handleClick}
                                  className=' text-smallTextColor font-[600] hover:text-slate-500'
                                  href='#about'
                              >
                                  About
                              </a>
                          </li>
                          <li>
                              <a
                                  onClick={handleClick}
                                  className=' text-smallTextColor font-[600] hover:text-slate-500'
                                  href='#services'
                              >
                                  Service
                              </a>
                          </li>
                          <li>
                              <a
                                  onClick={handleClick}
                                  className=' text-smallTextColor font-[600] hover:text-slate-500'
                                  href='#portfolio'
                              >
                                  Portfolio
                              </a>
                          </li>
                          <li>
                              <a
                                  onClick={handleClick}
                                  className=' text-smallTextColor font-[600] hover:text-slate-500'
                                  href='#contact'
                              >
                                  Contact
                              </a>
                          </li>
                      </ul>
                  </div>
                  {/* Menu */}
                  {/* Menu Right */}
                  <div className='flex items-center gap-4 '>
                      <button className='flex items-center text-smallTextColor font-[600] gap-2 border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-10 hover:bg-smallTextColor hover:text-white ease-in duration-400'>
                          <i class='ri-send-plane-line'></i>
                          <i>Let's Talk</i>
                      </button>
                      <span
                          onClick={toggleMenu}
                          className='text-2xl text-smallTextColor md:hidden cursor-pointer'
                      >
                          <i class='ri-menu-line'></i>
                      </span>
                  </div>
                  {/* Menu Right */}
              </div>
          </div>
      </header>
  );
}

export default Header
