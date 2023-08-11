import React from 'react';

export default function ClientETemplate({
	clientName,
	clientEmail,
	messageSubject,
	messageContent,
}) {
	return (
		<div>
			<p>
				<span className="font-bold">Name : </span>
				{clientName}
			</p>
			<p>
				<span className="font-bold">Email : </span>
				{clientEmail}
			</p>
			<p>
				<span className="font-bold">Subject : </span>
				{messageSubject}
			</p>
			<p>
				<span className="font-bold underline">Content : </span>
				{messageContent}
			</p>
		</div>
	);
}
