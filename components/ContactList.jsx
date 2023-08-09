import React from 'react';
import {
	BiLogoFacebook,
	BiLogoWhatsapp,
	BiLogoUpwork,
	BiLogoLinkedin,
	BiLogoSkype,
	BiLogoDiscordAlt,
	BiLogoYoutube,
} from 'react-icons/bi';

export default function ContactList() {
	return (
		<div className="pt-6">
			<h2 className="text-2xl mb-4">
				Quick and direct communication. <br />I am just a text away!
			</h2>
			<div className="flex flex-col gap-4 justify-start items-start flex-wrap">
				<h3 className="text-base font-light">
					<span className="font-semibold underline underline-offset-4 mr-2">
						Email Adress :{' '}
					</span>
					contact@abdoulhayyou.com
				</h3>
				<h3 className="text-base font-light">
					<span className="font-semibold underline underline-offset-4 mr-2">Skype Id :</span>
					live:.cid.fc7c768b38574f52
				</h3>
				<h3 className="text-base font-light">
					<span className="font-semibold underline underline-offset-4 mr-2">Whatsapp : </span>
					+22780855804
				</h3>
				<h3 className="text-base font-light">
					<span className="font-semibold underline underline-offset-4 mr-2">Discord : </span>
					IlliassouIssoufouAH1997
				</h3>
				<h3 className="text-base font-light">
					<span className="font-semibold underline underline-offset-4 mr-2">Adress : </span>
					Zinder, Niger (Work remotely or onsite)
				</h3>

				<div className="flex gap-4">
					<a
						href="https://www.facebook.com/profile.php?id=100068814306300"
						target="_blank"
						className="p-2 bg-dark rounded-full"
					>
						<BiLogoFacebook size={32} />
					</a>
					<a
						href="https://www.upwork.com/freelancers/~01b4d2727a2d98ab0d"
						target="_blank"
						className="p-2 bg-dark rounded-full"
					>
						<BiLogoUpwork size={32} />
					</a>
					<a
						href="https://www.linkedin.com/in/illiassou-issoufou-abdoul-hayyou-085aa821a"
						target="_blank"
						className="p-2 bg-dark rounded-full"
					>
						<BiLogoLinkedin size={32} />
					</a>

					<a
						href="https://www.youtube.com/@harakaabdoul9294"
						target="_blank"
						className="p-2 bg-dark rounded-full"
					>
						<BiLogoYoutube size={32} />
					</a>
				</div>
			</div>
		</div>
	);
}
