'use client'
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function DesktopNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            // @ts-ignore
            if (e.target.closest('.mainNavigation')) return
            setIsMenuOpen(false);
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function navigateTo(url: string) {
        router.push(url);
        setIsMenuOpen(false);
    }

    return (
        <nav
            style={{transitionProperty: 'bottom'}}
            className="mainNavigation duration-1000 z-40 fixed bottom-8 translate-x-1/2 right-1/2 border-5 border-[#1F2222] rounded-[101px] shadow-[4px_4px_0_0_#1F2222] bg-white py-1">
            <ul className="flex justify-center items-center h-full gap-3 my-2.5 mx-2 px-5 rounded-[101px]"
                //style={{display: !isMenuOpen ? 'flex' : 'none'}}>
            >
                <li className="bg-[#1F2222] rounded-full p-3 cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.29804 0C8.09463 0 9.89122 0 11.6883 0C11.7929 0.00973424 11.8974 0.0194685 12.002 0.0286619C12.679 0.0897713 13.3679 0.0908529 14.0304 0.223347C15.7842 0.575402 17.0061 1.59263 17.6224 3.29071C17.9209 4.11218 17.9897 4.97041 17.9924 5.8346C17.9989 7.89826 18.0081 9.96138 17.9864 12.025C17.9794 12.6783 17.9344 13.3413 17.8093 13.9811C17.4719 15.7051 16.4845 16.9246 14.8282 17.5687C14.0293 17.8796 13.187 17.9624 12.3394 17.9705C10.4372 17.9894 8.53552 18.0073 6.63332 17.997C5.6963 17.9921 4.75385 17.9883 3.83254 17.765C2.33981 17.4032 1.23109 16.5585 0.571387 15.1627C0.165706 14.3039 0.0416717 13.3803 0.0319223 12.4425C0.0113404 10.4968 -0.0103243 8.55045 0.00538297 6.60468C0.0118825 5.78701 0.0611704 4.9623 0.180871 4.15382C0.367191 2.89377 0.975444 1.84788 2.00779 1.07455C2.89227 0.411542 3.9165 0.148177 4.99976 0.0719252C5.43198 0.0416409 5.86528 0.0237948 6.29858 0L6.29804 0ZM9.01432 16.4179C9.01432 16.4087 9.01432 16.3995 9.01486 16.3903C9.49041 16.3903 9.9665 16.4044 10.4415 16.3876C11.4614 16.3508 12.4883 16.3606 13.4979 16.2373C14.8303 16.075 15.743 15.3217 16.146 14.0135C16.3307 13.4132 16.3626 12.7913 16.3697 12.17C16.3881 10.5757 16.4108 8.98092 16.3967 7.38721C16.3881 6.4392 16.3642 5.48579 16.2559 4.54535C16.0891 3.09873 15.171 2.11774 13.7438 1.83436C13.1215 1.71052 12.4743 1.67375 11.8378 1.66347C10.2649 1.63698 8.69097 1.64184 7.11807 1.64725C6.21463 1.65049 5.30902 1.6386 4.41425 1.79543C3.04609 2.03554 2.10799 2.90135 1.82905 4.26035C1.70881 4.84711 1.66873 5.45658 1.65573 6.0574C1.62486 7.50456 1.61349 8.95334 1.62973 10.401C1.64111 11.4139 1.67036 12.4295 1.76514 13.437C1.85289 14.3726 2.28186 15.1595 3.07805 15.7067C3.6928 16.1286 4.39584 16.2903 5.12487 16.3184C6.42099 16.3676 7.7182 16.3871 9.01486 16.419L9.01432 16.4179Z"
                            fill="white"/>
                        <path
                            d="M4.73831 9.00271C4.73033 6.6552 6.64808 4.73683 9.0024 4.73633C11.3537 4.73633 13.2486 6.6253 13.2645 8.98577C13.2804 11.3318 11.3682 13.2541 9.01087 13.2626C6.66253 13.2706 4.74628 11.3602 4.73831 9.00271ZM8.99393 11.7604C10.5249 11.7649 11.7579 10.5413 11.7654 9.01119C11.7724 7.48107 10.5494 6.24452 9.01984 6.23554C7.48335 6.22657 6.2439 7.45615 6.24041 8.99324C6.23692 10.5224 7.46441 11.7559 8.99393 11.7604Z"
                            fill="white"/>
                        <path
                            d="M13.7713 2.84209C14.5681 2.85779 15.1787 3.50131 15.158 4.30463C15.138 5.08727 14.4967 5.69654 13.7071 5.6837C12.9231 5.67086 12.2989 5.01307 12.3168 4.21688C12.3339 3.43995 12.983 2.8264 13.7713 2.84209Z"
                            fill="white"/>
                    </svg>
                </li>
                <li className="bg-[#1F2222] rounded-full p-3 cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 8.43882V9.56359C17.9898 9.60893 17.9781 9.65354 17.9701 9.69888C17.8735 10.2569 17.8194 10.8258 17.6753 11.3707C16.7926 14.704 13.9383 17.2951 10.5523 17.8626C10.2246 17.9175 9.89407 17.954 9.56498 17.9994H8.44021C8.38317 17.9884 8.32685 17.976 8.26981 17.9679C7.89391 17.9131 7.51289 17.8824 7.14212 17.8019C4.96205 17.3302 3.17909 16.2091 1.83711 14.4298C0.24064 12.3126 -0.316626 9.92194 0.170434 7.31697C0.624584 4.88826 1.90805 2.96634 3.94039 1.57025C5.91642 0.214384 8.11331 -0.250004 10.4762 0.125163C12.1517 0.391364 13.6333 1.10001 14.9065 2.22113C16.4957 3.61941 17.4888 5.36215 17.8618 7.4508C17.9203 7.77844 17.9547 8.10972 18 8.43955V8.43882ZM4.27753 15.0543C4.32653 15.096 4.34774 15.1165 4.37114 15.1333C6.67919 16.7934 9.16568 17.132 11.8343 16.1506C11.974 16.0994 12.0061 16.0387 11.9791 15.8961C11.6822 14.3377 11.2726 12.8092 10.7556 11.3093C10.6342 10.9575 10.5011 10.6101 10.3687 10.2481C7.79226 11.1805 5.68679 12.6644 4.2768 15.0543H4.27753ZM1.32958 8.7979C1.09409 10.2686 2.18083 13.2158 3.29317 14.1234C4.05594 12.9225 4.98691 11.8709 6.09194 10.975C7.20355 10.0741 8.43509 9.39539 9.83703 8.98731C9.64908 8.59532 9.4626 8.21942 9.29 7.83767C9.23077 7.7075 9.16641 7.6936 9.03477 7.73163C7.11067 8.2889 5.14488 8.60263 3.14764 8.72184C2.54649 8.75768 1.94389 8.77303 1.32958 8.7979ZM8.58428 6.49277C7.70304 4.95261 6.76548 3.47973 5.72847 2.04415C3.48112 3.18794 2.06163 4.95919 1.47072 7.42813C3.89139 7.41131 6.24332 7.09904 8.58428 6.49277ZM7.19258 1.52418C8.25226 2.98317 9.20956 4.4736 10.0711 6.0357C11.639 5.41773 13.0344 4.59207 14.1079 3.2596C12.0778 1.55636 9.79169 1.0064 7.19331 1.52345L7.19258 1.52418ZM14.9519 4.15401C13.781 5.55376 12.3089 6.484 10.6744 7.17583C10.8784 7.64095 11.081 8.08778 11.2697 8.54047C11.3194 8.66041 11.3772 8.69039 11.503 8.67504C12.6073 8.53974 13.713 8.55802 14.8166 8.66918C15.4324 8.73135 16.0445 8.82422 16.68 8.90686C16.6471 7.13487 16.0708 5.56107 14.9519 4.15474V4.15401ZM13.2918 15.3769C15.1011 14.0963 16.1995 12.4033 16.5798 10.2262C14.998 9.78372 13.4234 9.65793 11.7948 9.8978C12.4398 11.691 12.943 13.4988 13.2918 15.3769Z"
                            fill="white"/>
                    </svg>
                </li>
                <li>
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                         onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <g filter="url(#filter0_b_70_167)">
                            <rect width="61" height="61" rx="30.5" fill="#060606" fill-opacity="0.8"/>
                        </g>
                        <circle cx="30.5" cy="30.5" r="25.5" fill="#D88DFF"/>
                        <rect x="15" y="5" width="31" height="51" rx="15.5" fill="#D88DFF"/>
                        <circle cx="23.5" cy="30.5" r="2.5" fill="#424242"/>
                        <circle cx="30.5" cy="30.5" r="2.5" fill="#424242"/>
                        <circle cx="37.5" cy="30.5" r="2.5" fill="#424242"/>
                        <defs>
                            <filter id="filter0_b_70_167" x="-4" y="-4" width="69" height="69"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_70_167"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_70_167"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </li>
                <li className="bg-[#1F2222] rounded-full p-3 cursor-pointer">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.19927 6.06366V9.16474C6.81613 9.16474 6.44207 9.16218 6.06672 9.16474C5.32251 9.16987 4.67311 9.42648 4.13151 9.92558C3.16131 10.8186 2.93662 12.2337 3.57173 13.3782C4.19256 14.4944 5.52512 15.0705 6.77327 14.76C8.07466 14.438 8.96174 13.3295 8.96434 11.9874C8.97083 8.18322 8.96694 4.37776 8.96694 0.573577C8.96694 0.397802 8.96694 0.222027 8.96694 0.0193084C9.09552 0.0141763 9.19682 0.0051951 9.29813 0.0051951C10.1514 0.0051951 11.006 0.0128933 11.8594 6.29872e-05C12.0724 -0.00250307 12.1724 0.0731957 12.2698 0.25282C12.7841 1.20483 13.4361 2.05034 14.3076 2.71495C15.005 3.24741 15.7895 3.57843 16.6623 3.70545C16.7636 3.71956 16.8636 3.74266 17 3.76704C16.7987 4.7755 16.6013 5.76343 16.3987 6.77959C14.7868 6.57944 13.3699 6.01362 12.1659 4.85376C12.1594 5.00516 12.1516 5.09369 12.1516 5.18222C12.1516 7.45061 12.1568 9.71773 12.1477 11.9861C12.136 14.6766 10.4021 17.0066 7.79802 17.7328C5.47317 18.3807 3.3886 17.8521 1.72224 16.1265C0.0169236 14.3572 -0.435058 12.2209 0.424746 9.93071C1.26507 7.68797 2.97169 6.39212 5.38226 6.07521C5.96671 5.99823 6.57066 6.06366 7.19927 6.06366Z"
                            fill="white"/>
                    </svg>
                </li>
                <li className="bg-[#1F2222] rounded-full p-3 cursor-pointer">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.46032 14.2968C8.97953 14.2968 8.02641 14.2968 7.0733 14.2968C6.5733 14.2968 6.27216 14.0409 6.13148 13.5731C5.80719 12.4951 5.46764 11.4211 5.15859 10.3386C4.45633 7.87981 3.89813 5.38713 3.42242 2.87525C3.35067 2.49558 3.23994 2.4018 2.84954 2.39954C2.39756 2.39671 1.94558 2.40914 1.49359 2.41197C1.33823 2.4131 1.18229 2.4114 1.02805 2.39671C0.796414 2.37468 0.574943 2.3018 0.436524 2.10688C0.111663 1.65038 -0.0482256 1.13625 0.0127918 0.575794C0.0529051 0.206864 0.261381 8.30588e-05 0.628616 8.30588e-05C1.84275 -0.00104689 3.05745 0.00912268 4.27158 0.0447162C4.71848 0.0577106 4.8908 0.233983 4.99306 0.683704C5.28063 1.94643 5.55351 3.21254 5.83431 4.47695C5.90154 4.77922 5.98064 5.07865 6.04787 5.38092C6.07442 5.50239 6.12414 5.55154 6.26086 5.54645C8.75862 5.44476 11.2569 5.34984 13.7553 5.24984C15.2581 5.18995 16.7609 5.11877 18.2643 5.06735C18.5276 5.05831 18.8039 5.09165 19.0564 5.16509C19.505 5.29617 19.7107 5.65606 19.6242 6.11595C19.392 7.3476 19.1457 8.57586 18.9129 9.8075C18.7169 10.8448 18.5355 11.8855 18.3395 12.9228C18.2231 13.5386 18.1112 13.668 17.4937 13.7341C16.2869 13.8635 15.0784 13.9799 13.8677 14.0646C12.5575 14.1561 11.2445 14.2053 9.46032 14.2968ZM6.6716 7.80805C7.03488 9.16174 7.38856 10.4793 7.7428 11.7968C7.80155 12.0154 7.94958 12.1493 8.1654 12.1957C8.3089 12.2262 8.45975 12.2431 8.60608 12.238C10.3338 12.1748 12.0615 12.1126 13.7886 12.0352C14.4152 12.007 15.0406 11.9425 15.666 11.8866C16.1468 11.8437 16.4056 11.5634 16.5028 11.1007C16.7282 10.0267 16.966 8.95552 17.1915 7.8815C17.3084 7.32274 17.2519 7.24647 16.6722 7.26568C15.9672 7.28941 15.2632 7.34816 14.5587 7.38545C12.2965 7.5041 10.0338 7.61822 7.77105 7.7363C7.41285 7.75494 7.05522 7.78319 6.67104 7.80862L6.6716 7.80805Z"
                            fill="white"/>
                        <path
                            d="M9.82222 16.5272C9.79736 16.9622 9.63691 17.465 9.25442 17.873C8.77871 18.3803 8.01882 18.4978 7.36514 18.1826C6.72219 17.8724 6.32784 17.2046 6.4527 16.5283C6.51767 16.1763 6.64762 15.8198 6.82559 15.5091C7.17531 14.8984 7.92898 14.6927 8.69114 14.943C9.43521 15.1871 9.83521 15.7063 9.82222 16.5272Z"
                            fill="white"/>
                        <path
                            d="M14.653 18.1035C13.9508 18.1419 13.083 17.504 13.2366 16.5153C13.3457 15.8136 13.6638 15.2645 14.3429 14.9854C15.1496 14.6537 15.9694 15.0554 16.2214 15.8893C16.5519 16.9843 15.7638 18.0978 14.653 18.104V18.1035Z"
                            fill="white"/>
                    </svg>
                </li>
            </ul>
            <ul className="absolute top-1 duration-700 ease-in-out overflow-hidden flex justify-center items-center p-5 m-2 bg-[#1F2222] rounded-[101px] text-white"
                style={{
                    transform: isMenuOpen ? 'scaleX(1) scaleY(1)' : 'scaleX(0) scaleY(0)',
                    transitionProperty: 'transform',
                    gap: '1.8rem'
                }}>
                <li onClick={() => navigateTo("/")}
                    className="cursor-pointer"
                    style={{color: pathname === '/' ? '#82E97D' : 'white'}}>
                    Home
                </li>
                <li onClick={() => navigateTo("/projets")}
                    className={`cursor-pointer`}
                    style={{color: pathname.includes('/projets') ? '#82E97D' : 'white'}}>
                    Projets
                </li>
                <li onClick={() => navigateTo("/moodboard")}
                    className="cursor-pointer"
                    style={{color: pathname === '/moodboard' ? '#82E97D' : 'white'}}>
                    Moodboard
                </li>
                <li onClick={() => navigateTo("/about")}
                    className="cursor-pointer"
                    style={{color: pathname === '/about' ? '#82E97D' : 'white'}}>
                    About
                </li>
            </ul>
        </nav>
    );
}