'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { OutlinedBtnRed } from '@/components/Buttons';

const navigation = [
	{ name: 'Home', url: '/', current: true },
	{ name: 'About', url: 'about', current: false },
	{ name: 'Blog', url: '/blog', current: false },
	{ name: 'Contact', url: 'contact', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-dark">
			{({ open }) => (
				<div className=" border-b border-border">
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-dark-gray hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							{/* ========= Bar de navigation desktop ========= */}
							<div className="flex flex-1 items-center justify-start sm:items-center sm:justify-between">
								<div className="flex flex-shrink-0 items-center">
									<span className="w-14 h-14 rounded-full bg-redCol flex items-center justify-center">
										Logo
									</span>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.url}
												className={classNames(
													item.current
														? ' text-redCol'
														: 'text-white transition-all duration-500 ease-in-out hover:text-redCol',
													'px-3 py-2 font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
								<Link href={''} className="hidden sm:block">
									<OutlinedBtnRed>CV</OutlinedBtnRed>
								</Link>
							</div>
						</div>
					</div>

					{/* ========= Bar de navigation mobile ========= */}
					<Transition
						as={Fragment}
						enter="transition ease-out duration-300"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 pb-3">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.url}
										className={classNames(
											item.current
												? 'bg-redCol text-white'
												: 'text-white hover:bg-dark-gray hover:text-white',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Disclosure.Button>
								))}
								<Link href={''} className="ml-3 sm:hidden">
									<OutlinedBtnRed>CV</OutlinedBtnRed>
								</Link>
							</div>
						</Disclosure.Panel>
					</Transition>
				</div>
			)}
		</Disclosure>
	);
}
