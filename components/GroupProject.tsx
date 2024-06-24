import {HTMLProps} from "react";

type GroupProjectProps = {
	className?: HTMLProps<HTMLElement>["className"];
}
export default function GroupProject(ProjectProps: GroupProjectProps) {
	const {className} = ProjectProps;
	  return (
		  <div className={`flex flex-col gap-5 ${className}`}>
			  <div className="flex flex-wrap md:flex-nowrap gap-5">
				  <div className="w-full md:w-[64%] flex flex-col gap-5">
					  <svg className="w-full h-auto"
						   width="716" height="301" viewBox="0 0 716 301"
						   preserveAspectRatio={"xMidYMid slice"}>
						  <defs>
							  <clipPath id={`projectClipPath-block-element-1}`}>
								  <path fill="#D9D9D9"
										d="M689.794 0.710936C698.074 0.710937 704.986 7.02769 705.729 15.2739L715.556 124.242C715.636 125.128 715.642 126.019 715.573 126.905L709.108 211.005L709.108 273.654C709.108 282.249 702.318 289.308 693.73 289.642L540.213 295.615L360.997 295.615L182.72 300.544L20.4361 296.034C11.978 295.799 5.16515 289.019 4.88915 280.562L0.688897 151.86L4.8808 21.9451C5.1593 13.314 12.2368 6.46113 20.8725 6.46113L182.72 6.46114L360.997 0.710922L689.794 0.710936Z"/>
							  </clipPath>
						  </defs>
						  <image href="https://picsum.photos/700/300" width="120%" height="120%" x="-10%"
								 y="-10%"
								 clipPath={`url(#projectClipPath-block-element-1})`}/>
					  </svg>
					  <div className="flex gap-5">
						  <div className="w-1/2 h-auto">
							  <svg className="w-full h-auto"
								   width="342" height="342" viewBox="0 0 342 342"
								   preserveAspectRatio={"xMidYMid slice"}>
								  <defs>
									  <clipPath id={`projectClipPath-block-element-2}`}>
										  <path fill="#D9D9D9"
												d="M320.47 -0.000122979C329.071 -0.000122603 336.133 6.8001 336.458 15.3953L341.25 142.109L338.115 239.342L338.115 313.577C338.115 321.84 331.822 328.745 323.593 329.508L257.505 335.64L171.969 335.64L86.8801 341.25L16.9776 336.617C8.65431 336.065 2.15135 329.212 2.03722 320.871L0.000175586 172.027L2.02579 22.3279C2.14419 13.5766 9.27219 6.54438 18.0243 6.54438L86.8801 6.54438L171.969 -0.00012947L320.47 -0.000122979Z"/>
									  </clipPath>
								  </defs>
								  <image href="https://picsum.photos/300/300" width="120%" height="120%" x="-10%"
										 y="-10%"
										 clipPath={`url(#projectClipPath-block-element-2})`}/>
							  </svg>
						  </div>
						  <div className="w-1/2 h-auto">
							  <svg className="w-full h-auto"
								   width="322" height="322" viewBox="0 0 322 322"
								   preserveAspectRatio={"xMidYMid slice"}>
								  <defs>
									  <clipPath id={`projectClipPath-block-element-3}`}>
										  <path fill="#D9D9D9"
												d="M301.324 0.49414C309.925 0.49414 316.987 7.29437 317.312 15.8895L321.789 134.275L318.838 225.809L318.838 294.838C318.838 303.102 312.545 310.006 304.316 310.77L242.952 316.463L162.429 316.463L82.3272 321.744L17.3855 317.44C9.06215 316.888 2.55919 310.035 2.44506 301.694L0.539239 162.439L2.43362 22.4386C2.55203 13.6873 9.68002 6.65508 18.4322 6.65508L82.3273 6.65509L162.429 0.494134L301.324 0.49414Z"/>
									  </clipPath>
								  </defs>
								  <image href="https://picsum.photos/200/200" width="120%" height="120%" x="-10%"
										 y="-10%"
										 clipPath={`url(#projectClipPath-block-element-3})`}/>
							  </svg>
						  </div>
					  </div>
				  </div>
				  <div className="w-full md:w-[36%]">
					  <svg className="w-full h-auto"
						   width="404" height="679" viewBox="0 0 404 679"
						   preserveAspectRatio={"xMidYMid slice"}>
						  <defs>
							  <clipPath id={`projectClipPath-block-element-4}`}>
								  <path fill="#D9D9D9"
										d="M381.621 1.30558e-05C390.318 1.36929e-05 397.422 6.94611 397.617 15.6403L403.622 282.655L399.914 476.05V639.012C399.914 646.896 394.17 653.606 386.38 654.821L305.796 667.395C304.98 667.522 304.155 667.586 303.329 667.586H203.4L104.527 678.547C103.352 678.678 102.166 678.677 100.992 678.546L16.7601 669.159C8.70892 668.261 2.5988 661.488 2.53287 653.387L0 342.161L2.52074 28.8883C2.59143 20.1022 9.7339 13.017 18.5202 13.017L102.759 13.017L203.4 0L381.621 1.30558e-05Z"/>
							  </clipPath>
						  </defs>
						  <image href="https://picsum.photos/300/600" width="120%" height="120%" x="-10%"
								 y="-10%"
								 clipPath={`url(#projectClipPath-block-element-4})`}/>
					  </svg>
				  </div>
			  </div>
			  <svg className="w-full h-auto"
				   width="1161" height="433" viewBox="0 0 1161 433"
				   preserveAspectRatio={"xMidYMid slice"}>
				  <defs>
					  <clipPath id={`projectClipPath-block-element-5}`}>
						  <path fill="#D9D9D9"
								d="M1128.26 -8.81417e-07C1136.47 -6.60369e-07 1143.35 6.21627 1144.18 14.3859L1160.85 178.823C1160.95 179.817 1160.96 180.819 1160.87 181.815L1150.33 303.693L1150.33 400.936C1150.33 409.557 1143.5 416.628 1134.89 416.926L876.083 425.882L585.071 425.882L295.583 433L22.6601 426.254C14.2074 426.045 7.37644 419.295 7.06626 410.846L-1.54932e-05 218.279L7.05871 23.724C7.37085 15.1188 14.4374 8.30408 23.0481 8.30408L295.583 8.30409L585.071 -1.55035e-05L1128.26 -8.81417e-07Z"/>
					  </clipPath>
				  </defs>
				  <image href="https://picsum.photos/600/200" width="120%" height="120%" x="-10%"
						 y="-10%"
						 clipPath={`url(#projectClipPath-block-element-5})`}/>
			  </svg>
		  </div>
	  )
}