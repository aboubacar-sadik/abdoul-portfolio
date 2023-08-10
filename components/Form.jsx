'use client';
import { useState } from 'react';
import { OutlinedBtnWhite } from './Buttons';

export default function Form() {
	const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
	const [error, setError] = useState(false);
	const [valid, setValid] = useState(false);

	function handleChange(e) {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setError(null);
	}

	async function submitFormData(e) {
		e.preventDefault();

		if (!formData.email || !formData.name || !formData.message) {
			setError(true);
			return;
		}

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				res.json();

				setValid(true);

				setTimeout(() => {
					setValid(false);
				}, 3000);

				setError(false);

				setFormData({ name: '', subject: '', email: '', message: '' });
			} else {
				throw new Error('Failed to send message');
			}
		} catch (error) {
			console.log(error);
		}
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
				className="h-11 flex items-center bg-dark text-white px-2 rounded-lg focus:outline-2 outline-dark w-full"
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
				className="h-11 flex items-center text-white bg-dark px-2 rounded-lg focus:ring-2 ring-dark w-full"
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
				className="h-11 flex items-center text-white px-2 bg-dark rounded-lg focus:outline-2 outline-dark w-full"
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
				className="flex items-center h-32 text-white px-2 pt-2 bg-dark rounded-lg focus:ring-2 ring-dark w-full"
			></textarea>
			{error && (
				<span className="text-sm h-10 flex items-center justify-center text-red-600 bg-red-200 border border-red-600 rounded-lg w-full">
					Please fill in the required fields.
				</span>
			)}
			{valid && (
				<span className="text-sm h-10 flex items-center justify-center text-green-600 bg-green-200 border border-green-600 rounded-lg w-full">
					Your message has been successfully sent.
				</span>
			)}
			<OutlinedBtnWhite>Send</OutlinedBtnWhite>
		</form>
	);
}
