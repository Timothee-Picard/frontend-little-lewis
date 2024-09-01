"use client"
import Link from "next/link";
import {useEffect, useState} from "react";
import CustomTitle from "@/components/CustomTitle";
import {fetchProjets, Projets} from "@/api/projet";
import {Category, fetchCategories} from "@/api/category";

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("all")

    const [projets, setProjets] = useState<Projets[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const handleFilter = (filter: string) => {
        setActiveFilter(filter)
    }

    useEffect(() => {
        fetchProjets().then((res) => {
            setProjets(res);
        });
        fetchCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    // @ts-ignore
    return (
        <div className="">
            <CustomTitle className="mx-10 lg:mx-[10rem] text-9xl mb-6 mt-20">
                Work
            </CustomTitle>
            <div className="pl-10 lg:pl-[10rem] w-full overflow-x-auto py-5">
                <ul className="flex flex-row uppercase font-semibold text-custompurple gap-5 text-customPurpleDark">
                    <li className={`whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter ${activeFilter === "all" ? "activeFilter" : ""}`}
                        onClick={() => handleFilter("all")}>Show all
                    </li>
                    {categories.map((element) => (
                        <li key={element.id} className={`whitespace-nowrap border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter ${activeFilter === element.nom ? "activeFilter" : ""}`}
                            onClick={() => handleFilter(element.nom)}>{element.nom}
                        </li>
                    ))}
                    <li className={`whitespace-nowrap flex items-center gap-2 border-4 border-customPurpleDark rounded-full px-8 py-2 shadow-filters cursor-pointer hover:activeFilter ${activeFilter === "reset" ? "activeFilter" : ""}`}
                        onClick={() => handleFilter("reset")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                  d="M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0"/>
                        </svg>
                        reset
                    </li>
                    <div className="pr-10 lg:pr-[10rem]"/>
                </ul>
            </div>
            <div
                className="mx-10 lg:mx-[10rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-32 mb-14">
            {projets.map((element) => (
                    <Link key={element.id} href={`/projets/${element.id}`}>
                        <svg width="100%" height="100%" viewBox="0 0 373 627" preserveAspectRatio={"xMidYMid slice"}>
                            <defs>
                                <clipPath id={`projectClipPath-${element.id}`}>
                                    <path fill="#24529e"
                                          d="M363.97 439.118L363.969 439.166L363.969 439.214L363.969 588.507C363.969 593.927 360.021 598.54 354.665 599.375L281.458 610.798C280.897 610.885 280.33 610.929 279.762 610.929L187.661 610.929L187.385 610.929L187.11 610.96L96.0248 621.058C95.2171 621.147 94.402 621.147 93.5943 621.057L17.1091 612.533C11.5739 611.916 7.37321 607.259 7.3279 601.69L4.99996 315.725L5.0003 315.685L7.31576 27.9212C7.36435 21.8808 12.2748 17.0097 18.3154 17.0097L94.8081 17.0097L95.1301 17.0097L95.4494 16.9684L187.983 4.99999L350.881 5C356.86 5 361.744 9.77545 361.879 15.7527L367.389 260.792L363.97 439.118Z"/>
                                </clipPath>
                            </defs>
                            <image href={element.presentation} width="120%" height="120%" x="-10%"
                                   y="-10%"
                                   clipPath={`url(#projectClipPath-${element.id})`}/>
                        </svg>
                    </Link>
                ))}
            </div>
        </div>
    );
}
