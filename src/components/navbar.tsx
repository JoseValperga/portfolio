"use client";
import { Heart, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 cursor-pointer mx- sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        <Image src="/Original.png" alt="Logo" width={100} height={50} />
      </h1>

      <div className="items-center justify-between hidden font-semibold sm:flex">
        <MenuList/>
      </div>

      <div className="flex sm:hidden">
        <p>Items celular</p>
      </div>

      <div className="flex justify-between gap-2 sm:gap-7">
        <ShoppingCart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <Heart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />
        <User
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/users")}
        />
      </div>
    </div>
  );
};

export default Navbar;
