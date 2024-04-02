import React from "react";
import { IoMdLogOut } from "react-icons/io";

const TopHeader = ({ tabName }) => {
  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-md font-semibold">{tabName}</h1>
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src="https://s3-alpha-sig.figma.com/img/2588/b21c/8c64a52772784a3c354fa08294114e35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLgh7xoOHGuZQqjSi6~ephVHVq0Nct1SGaSm98okWUsYMibLTnuPuqFErs2BLncQbG0KoGf48EooGt2qsalGufSTcYQQN8vGAS6efDJaJyRJlrVJddcgWjsEi57HZvPzPq9jZl-lUApAnDkTyi8JoIuCzOY-pQNhl30o1LC2iyUwg93UyfsWaeJ6-Lj0dTmHI87c2s17k6emFbB3FFMeMobOiNYpiEduyFtzc3UxUQQfBgoeiTcwHT1FBwpNaasEjkCe4wQbYlFMIhkIzj0Yl8jveBJbup9AIGKh~bk3cYcze4E7y~QXA~91jMDPgqCvY9NHfBfDIQWGINsQMerJ4w__"
          alt="Rounded avatar"
        />
        <div className="flex flex-col items-center text-sm">
          <p>Hello User</p>
          <p className="text-xs flex items-center gap-1 text-red-500 cursor-pointer">
            {" "}
            <IoMdLogOut /> Sign Out
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
