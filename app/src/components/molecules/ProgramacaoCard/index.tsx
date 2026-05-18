"use client";

import { Schedule } from "@/app/lib/types";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

interface ProgramacaoCardTypes {
  bgColor?: string; /* Background color of CONTAINER */
  borderColor?: string; /* Border Color of CONTAINER */
  highlighted?: string; /* Color of weekDay  */
  hrColor?: string; /* Color of HR, below the weekDay */
  firstLeftBlockColor?: string; /* Background color of first decoration block */
  sencondLeftBlockColor?: string; /* Background color of second decoration block */
  imgBlock: string; /* URL of the image inside of the block */
  evenBg?: string; /* Color of EVEN schedules */
  localBg?: string; /* Color of LOCAL CONTAINER */
  weekDay?: string; /* STRING week's day */
  schedule: Schedule[]; /* PROGRAMMATION */
}

export default function ProgramacaoCard({
  bgColor,
  borderColor,
  highlighted,
  hrColor,
  firstLeftBlockColor,
  sencondLeftBlockColor,
  imgBlock,
  evenBg,
  localBg,
  weekDay,
  schedule,
}: ProgramacaoCardTypes) {
  return (
    /* WRAPPER */
    <div className="flex flex-col justify-center items-center mb-10">
      {/* CONTAINER */}
      <div
        className={`w-[98%] sm:w-[90%] md:w-[86%] xl:max-w-[70%] p-4 ${bgColor || "bg-light-mint"} border-6 ${borderColor || "border-light-sea-green"}`}
      >
        {/* CONTAINER HEADER */}
        <div className="flex w-full justify-between items-center">
          {/* Blocks */}
          <div className="flex">
            <div
              className={`${firstLeftBlockColor || "bg-tertiary"} h-14 w-16 sm:h-20 sm:w-22`}
            ></div>
            <div
              className={`flex justify-center items-center ${sencondLeftBlockColor || "bg-mint"} h-14 w-16 sm:h-20 sm:w-22`}
            >
              <Image
                className="h-8 w-8 sm:h-10 sm:w-10"
                src={imgBlock}
                alt="Decoração"
                height={40}
                width={40}
                priority={false}
                quality={65}
              />
            </div>
          </div>

          <div className="w-full relative">
            <h2
              className={`ml-4 ${highlighted || "text-tertiary"} font-press_start text-[1.1rem] sm:text-3xl`}
            >
              {weekDay || "Dia - Data"}
            </h2>
            <span
              className={`ml-4 absolute ${hrColor || "bg-tertiary"} -bottom-1 h-1 w-full`}
            ></span>
          </div>

          <Image
            className="ml-6 h-6 w-6 animate-bounce"
            src="/heart.svg"
            alt="Coração"
            height={24}
            width={24}
            priority={false}
            quality={65}
          />
        </div>

        {/* CONTAINER PROGRAMACAO */}
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`mt-8 flex flex-col sm:flex-row sm:items-center py-2 px-2 ${index % 2 === 0 ? evenBg || "bg-mint" : "bg-transparent"}`}
          >
            <span className="flex items-center gap-1 shrink-0 sm:text-nowrap sm:pr-2 text-[0.95rem] font-medium text-neutral-800">
              <CiClock2 /> {item.time}
            </span>
            <p className="flex-1 text-[1rem] sm:text-[1.05rem] text-justify text-neutral px-4 sm:px-8 py-1">
              <span className="font-bold">{item.title}</span>{" "}
              <span className="font-light">{item.description}</span>
            </p>
            <div className="flex justify-end shrink-0">
              <span
                className={`${localBg || "bg-tertiary"} text-neutral-900 font-semibold text-[0.95rem] sm:text-[1rem] text-center p-1 max-w-48 sm:max-w-[16rem] sm:p-2 shadow-sm whitespace-normal wrap-break-word`}
                title={item.local}
              >
                {item.local}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
