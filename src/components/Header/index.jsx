import { Text, Img } from "./..";
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
    return (
        <header
            {...props}
            className={`${props.className} flex items-center py-[22px] sm:py-5 border-gray-900_04 border-b border-solid bg-gray-900_06`}
        >
            <div className="container-xs flex items-center justify-between gap-5 px-2 md:px-5 sm:flex-col">
                <div className="flex items-center gap-6">
                    <Link to="/">
                        <Img src="/assets/images/img_television.svg" alt="Television Image" className="h-[34px]" />
                    </Link>
                    <Text
                        size="texts"
                        as="p"
                        className="text-[36.34px] font-normal text-backgrounds-primary md:text-[34px] sm:text-[32px]"
                    >
                        KINKLER
                    </Text>
                </div>
                <ul className="!mr-2 flex flex-wrap items-center gap-6 md:mr-0">
                    <li>
                        <Link to="/examplesportfolioone" className="cursor-pointer">
                            <Text
                                size="single_line_body_base"
                                as="p"
                                className="px-4 py-1.5 text-[16px] font-normal text-gray-100_01 rounded hover:bg-gray-700 hover:text-white transition"
                            >
                                Enviar Jogos
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="flex cursor-pointer items-center justify-center rounded-lg bg-[#6b21a8] px-4 py-1.5 text-gray-100 hover:bg-[#5a1e91] transition"
                        >
                            <Text size="single_line_body_base" as="p" className="text-[16px] font-normal">
                                Login
                            </Text>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/registro"
                            className="flex cursor-pointer items-center justify-center rounded-lg border border-gray-500 px-4 py-1.5 text-black transition hover:bg-[#6b21a8] hover:text-white"
                        >
                            <Text size="single_line_body_base" as="p" className="text-[16px] font-normal">
                                Registrar
                            </Text>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
