import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { HashLink } from 'react-router-hash-link'

export default function MyMenu() {
  return (
    <div className="fixed top-14 w-36  text-right ">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-[#232F2C] px-4 py-2   text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <Bars3Icon
              className="hover:wedding-purple h-8 w-6 text-wedding-yellow"
              aria-hidden="true"
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
          <Menu.Items className="absolute  mt-2 w-32 origin-top-right   rounded-md bg-[#232F2C]/80 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 ">
              <Menu.Item>
                {({ active }) => (
                  <HashLink
                    smooth
                    to="/home#schedule"
                    className={`${
                      active ? 'bg-wedding-purple text-white' : 'text-wedding-yellow'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Schedule
                  </HashLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <HashLink
                    smooth
                    to="/home#rsvp"
                    className={`${
                      active ? 'bg-wedding-purple text-white' : 'text-wedding-yellow'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    RSVP
                  </HashLink>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 ">
              <Menu.Item>
                {({ active }) => (
                  <HashLink
                    smooth
                    to="/home#accomodations"
                    className={`${
                      active ? 'bg-wedding-purple text-white' : 'text-wedding-yellow'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Accomodations
                  </HashLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <HashLink
                    smooth
                    to="/home#transportation"
                    className={`${
                      active ? 'bg-wedding-purple text-white' : 'text-wedding-yellow'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Transportation
                  </HashLink>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 ">
              <Menu.Item>
                {({ active }) => (
                  <HashLink
                    smooth
                    className={`${
                      active ? 'bg-wedding-purple text-white' : 'text-wedding-yellow'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    to="/home#registry"
                  >
                    Registry
                  </HashLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
