import type { Metadata } from "next";
// import type { Accordion, AccordionItem } from "@nextui-org/react";


export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'Somos WebApp-Movies',
  keywords: ['About Page', 'WebApp-Movies', 'información', '...'],
};


export default function AboutPage() {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="container mx-auto bg-filmcard p-5 m-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor magni ducimus earum unde praesentium, corporis suscipit sit eos minus vero, voluptatem cumque numquam. Veniam sint rerum doloremque repellat tempora!</p>
      </div>
      <div className="container mx-auto bg-filmcard p-5 m-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor magni ducimus earum unde praesentium, corporis suscipit sit eos minus vero, voluptatem cumque numquam. Veniam sint rerum doloremque repellat tempora!</p>
      </div>
      <div className="container mx-auto bg-filmcard p-5 m-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor magni ducimus earum unde praesentium, corporis suscipit sit eos minus vero, voluptatem cumque numquam. Veniam sint rerum doloremque repellat tempora!</p>
      </div>
      <div className="container mx-auto bg-filmcard p-5 m-2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi dolor magni ducimus earum unde praesentium, corporis suscipit sit eos minus vero, voluptatem cumque numquam. Veniam sint rerum doloremque repellat tempora!</p>
      </div>
    </>
  )
}