"use client";

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} alt="A Plate with food" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community">Food Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
