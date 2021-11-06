import { Fragment } from 'react'
import { NavLink } from '@redwoodjs/router'

import cn from 'classnames'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import NavigationLink from 'src/components/NavigationLink'

import { useNavigation } from 'src/hooks/useNavigation'

const Navbar = () => {
  const navigation = useNavigation()

  return (
    <Disclosure as="nav" className="w-full bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavigationLink
                        key={item.name}
                        to={item.to}
                        className={cn(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        activeClassName={cn(
                          'bg-gray-900 text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </NavigationLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-48 py-1 mt-2 bg-white shadow-lg origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <NavLink
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          activeClassName="block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                        >
                          Your Profile
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          activeClassName="block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                        >
                          Settings
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item>
                        <NavLink
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          activeClassName="block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                        >
                          Sign out
                        </NavLink>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavigationLink}
                  to={item.to}
                  className={cn(
                    'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  activeClassName={cn(
                    'bg-gray-900 text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    // <header className="flex flex-wrap justify-between w-full p-6 text-white bg-black dark:text-black dark:bg-white">
    //   <nav className="flex justify-center py-4 space-x-4">
    //     {isAuthenticated ? (
    //       <>
    //         <NavLink
    //           to={routes.teams()}
    //           className="text-gray-200 dark:bg-gray-800"
    //           activeClassName="text-white dark:text-black"
    //         >
    //           Teams
    //         </NavLink>
    //         <NavLink
    //           to={routes.players()}
    //           className="text-gray-200 dark:bg-gray-800"
    //           activeClassName="text-white dark:text-black"
    //         >
    //           Players
    //         </NavLink>
    //       </>
    //     ) : (
    //       <>
    //         <NavLink
    //           to={routes.home()}
    //           className="text-gray-200 dark:bg-gray-800"
    //           activeClassName="text-white dark:text-black"
    //         >
    //           Home
    //         </NavLink>
    //         <NavLink
    //           to={routes.about()}
    //           className="text-gray-200 dark:bg-gray-800"
    //           activeClassName="text-white dark:text-black"
    //         >
    //           About
    //         </NavLink>
    //       </>
    //     )}
    //   </nav>
    // </header>
  )
}

export default Navbar
