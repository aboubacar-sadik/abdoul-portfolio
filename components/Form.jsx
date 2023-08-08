'use client';
import { useState } from 'react';
import { OutlinedBtnWhite } from './Buttons';
import axios from 'axios';

export default function Form() {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

	function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function submitFormData(e) {
		e.preventDefault();
	}

	return (
		<form onSubmit={submitFormData} className="flex flex-col gap-4 items-stretch md:items-start">
			<label htmlFor="name" className="-mb-2">
				Name
			</label>
			<input
				type="text"
				name="name"
				id="name"
				value={formData.name}
				onChange={handleChange}
				className="h-11 flex items-center text-dark px-2 rounded-lg focus:outline-2 outline-dark w-full"
			/>
			<label htmlFor="email" className="-mb-2">
				Email
			</label>
			<input
				type="email"
				name="email"
				id="email"
				value={formData.email}
				onChange={handleChange}
				className="h-11 flex items-center text-dark px-2 rounded-lg focus:ring-2 ring-dark w-full"
			/>

			<label htmlFor="subject" className="-mb-2">
				Subject
			</label>
			<input
				type="text"
				name="subject"
				id="subject"
				value={formData.subject}
				onChange={handleChange}
				className="h-11 flex items-center text-dark px-2 rounded-lg focus:outline-2 outline-dark w-full"
			/>
			<label htmlFor="message" className="-mb-2">
				Message
			</label>
			<textarea
				name="message"
				value={formData.message}
				onChange={handleChange}
				id="message"
				cols="15"
				rows="10"
				className="flex items-center text-dark px-2 pt-2 rounded-lg focus:ring-2 ring-dark w-full"
			></textarea>
			<span className="text-sm h-10 flex items-center justify-center text-red-600 bg-red-300 border border-red-600 rounded-lg w-full">
				Error message
			</span>
			<OutlinedBtnWhite>Send</OutlinedBtnWhite>
		</form>
	);
}
