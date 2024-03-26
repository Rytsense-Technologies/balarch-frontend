import React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/icons/User.png";
import mag from "../../../assets/images/icons/mag.png";
import project from "../../../assets/images/icons/project.png";
import scam from "../../../assets/images/icons/scam.png";
import submission from "../../../assets/images/icons/submission.png";
import tag from "../../../assets/images/icons/tag.png";
import Footer from "../../_app/Footer";

export default function DashboardLayout({ children }) {
  const menus = [
    {
      title: "Users",
      icon: user,
      href: "/all-users",
    },
    {
      title: "Projects",
      icon: project,
      href: "/all-projects",
    },
    {
      title: "Tags",
      icon: tag,
      href: "",
    },
    {
      title: "Submissions",
      icon: submission,
      href: "/all-submissions",
    },
    {
      title: "Scam Reports",
      icon: scam,
    },
    {
      title: "Magazines",
      icon: mag,
    },

    {
      title: "Profile",
      icon: mag,
      href: "/user-profile",
    },
  ];
  return (
    <>
      <div className="min-h-full flex p-6">
        {/* Sidebar */}
        <aside className="w-64 ">
          {/* Sidebar content */}
          <div className="h-full flex flex-col justify-between py-6 px-4">
            {/* Sidebar items */}
            <div className="space-y-4">
              <Link to="/">
                <img
                  className="w-32"
                  src="https://s3-alpha-sig.figma.com/img/f133/b3c4/d20f5b2c282d59dc2d493b580fadcdea?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sur09Tfyn3IdAyt8VHAmIoXw2c7adncf99GiFwtm0d7nmLyIcwAZUtnWj0aKST~cnPxWVomDKhHm99W01myi5MusBkGA910hpX7OYo7zks0xsAiJhLyBzfeHWXpv4-X85KbU2bsfCL5ELFNrvPaN7wH7js3sZuUukUr5EDcBZVFujRbbiTudsdJE~Fp1heMZ0G0C5QxoiVAsqKxM3UXr96Y3vYwweo1GDU1PluQV~NB~r02UCNCuwy89HS8x4xy1WbcFmaSMUhC8JBJXrCa3KegqWkOmJid3~uxKlyqkxICfC0Daf2mEYyE5~Wcbr4F2eW0b3HZFruB8ouEam15LiQ__"
                />
              </Link>
              {menus.map((menu, index) => (
                <div
                  key={index}
                  className="block py-2 px-4 hover:bg-blue-400 rounded flex items-center gap-4"
                >
                  <img src={menu.icon} alt={menu.title} />
                  <Link to={menu.href} className=" ">
                    {menu.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1">
          <main>
            <div className="mx-auto min-h-screen max-w-7xl py-6 sm:px-6 lg:px-8 bg-gray-200 rounded-xl">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
