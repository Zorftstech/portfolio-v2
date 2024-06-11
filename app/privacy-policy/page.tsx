import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between ">
			<div className="w-[90vw] max-w-7xl mx-auto mt-[140px]">
				<h1 className="text-left text-3xl xl:text-4xl  uppercase font-black mb-12">
					Privacy Policy
				</h1>

				<div>
					<h2 className=" text-xl xl:text-2xl font-bold ">
						Effective Date - [03-01-2018]
					</h2>

					<p className="text-[18px] my-3">
						Zorfts Technologies ("us", "we", or "our") is committed to
						protecting the privacy of your personal information. This Privacy
						Policy explains how we collect, use, disclose, and safeguard your
						information when you use our services ("Services") offered through
						the Zorfts Technologies website <br />
						(the "Service").
					</p>

					<h2 className=" text-xl xl:text-2xl font-bold mb-2">
						Information We Collect:
					</h2>
					<p className="text-[18px]">
						We collect several different types of information for various
						purposes to improve our Services to you.
					</p>

					<div className="mt-4">
						<li className="text-[18px]">
							<span className="font-bold">Personal Information:</span>
						</li>
						<p className="text-[18px] ml-7">
							When you use the Service, you may provide us with certain
							personally identifiable information that can be used to contact or
							identify you ("Personal Information"). Personal Information may
							include, but is not limited to:
						</p>

						<div className="my-6 ml-20 leading-loose text-[18px]">
							<li>Name </li>
							<li>Email address</li>
							<li>Phone number</li>
							<li>Company name</li>
							<li>Job title (optional)</li>
						</div>

						<li className="text-[18px]">
							<span className="font-bold">Usage Data:</span>
						</li>
						<p className="text-[18px] ml-7 mt-2">
							We may also collect information about how you access and use the
							Service ("Usage Data"). This Usage Data may include:
						</p>

						<div className="mt-6 ml-20 text-[18px] leading-loose">
							<li>IP address</li>
							<li>Browser type</li>
							<li>Operating system</li>
							<li>Referral URLs</li>
							<li>Pages viewed</li>
							<li>Time spent on pages</li>
							<li>Search terms</li>
						</div>

						<li className="text-[18px]  mt-8 mb-2">
							<span className="font-bold">Use of Your Information:</span>
						</li>
						<p className="text-[18px]  ml-7">
							We use the information we collect to provide, operate, and
							maintain our Service, improve your experience, and develop new
							features.
						</p>
						<div className="mt-6 ml-20 text-[18px] font-bold leading-loose">
							<li>To provide and maintain our Service</li>
							<li>To improve our Service</li>
							<li>To personalize your experience</li>
							<li>To respond to your inquiries and requests</li>
						</div>

						<li className="text-[18px] font-bold mt-8 mb-2">
							Disclosure of Your Information:
						</li>
						<p className="text-[18px] ml-7">
							We may disclose your information to third parties for the
							following reasons:
						</p>
						<div className="mt-6 ml-20 text-[18px]  leading-loose">
							<li>
								<span className="font-bold">To our service providers</span> who
								provide services to support our business.
							</li>
							<li>
								<span className="font-bold">In compliance with the law</span>or
								to respond to legal process, such as a court order or subpoena.
							</li>
							<li>
								<span className="font-bold">To protect our rights</span> or
								property, or the safety of others.
							</li>
						</div>

						<li className="text-[18px] font-bold mt-8 mb-2">Data Security:</li>
						<p className="text-[18px] ml-7">
							We take reasonable steps to protect your information from
							unauthorized access, disclosure, alteration, or destruction.
							However, no internet transmission or electronic storage method is
							100% secure. Therefore, we cannot guarantee absolute security.
						</p>

						<li className="text-[18px] font-bold mt-8 mb-2">Your Rights:</li>
						<p className="text-[18px] ml-7">
							You have certain rights regarding your personal information. You
							may request to:
						</p>
						<div className="mt-6 ml-20 text-[18px] font-bold leading-loose">
							<li>Access your Personal Information</li>
							<li>Rectify your Personal Information</li>
							<li>Request the erasure of your Personal Information</li>
						</div>

						<li className="text-[18px] font-bold mt-8 mb-2">
							Children's Privacy:
						</li>
						<p className="text-[18px] ml-7">
							Our Service does not address anyone under the age of 18
							("Children"): <br /> We do not knowingly collect personally
							identifiable information from children. If you are a parent or
							guardian and you are aware that your child has provided us with
							Personal Information, please contact us. If we become aware that
							we have collected Personal Information from a child without
							verification of parental consent, we will take steps to remove
							that information from our servers.
						</p>

						<li className="text-[18px] font-bold mt-8 mb-2">
							International Transfers:
						</li>
						<p className="text-[18px] ml-7">
							Your information, including Personal Information, may be
							transferred to and processed in countries other than your own.
							These countries may have different data protection laws than your
							jurisdiction. By using our Service, you consent to the transfer
							and processing of your information in accordance with this Privacy
							Policy.
						</p>

						<li className="text-[18px] font-bold mt-8 mb-2">
							Retention of Data:
						</li>
						<p className="text-[18px] ml-7">
							We will retain your Personal Information only for as long as
							necessary for the purposes set out in this Privacy Policy. We will
							retain and use your Personal Information to the extent necessary
							to comply with our legal obligations, resolve disputes, and
							enforce our policies.
						</p>

						<li className="text-[18px] font-bold mt-8 mb-2">
							Changes to this Privacy Policy:
						</li>
						<p className="text-[18px] ml-7">
							We may update our Privacy Policy from time to time. We will notify
							you of any changes by posting the new Privacy Policy on this page.
						</p>

						<p className="font-bold text-[18px] mt-8 ml-7 ">
							Your continued use of the Service after the posting of any revised
							Privacy Policy signifies your acceptance of the new Privacy
							Policy.
						</p>
						<div className="mb-[10rem]">
							<h2 className="text-[18px] font-bold mt-8 mb-2">Contact Us</h2>
							<p className="text-[18px] ml-7">
								If you have any questions about this Privacy Policy, please
								contact us:
							</p>

							<li className="text-[18px] ml-7">
								By email:{" "}
								<Link
									className=" text-blue-600"
									href={"mailto:zorftstech@gmail.com"}>
									zorftstech@gmail.com
								</Link>
							</li>
							<li className="text-[18px] ml-7">
								By visiting this page on our website:
								<Link className=" text-blue-600" href={"/contact-us"}>
									Contact us
								</Link>
							</li>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
